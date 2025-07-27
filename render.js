import { readFileSync, readdirSync, writeFileSync } from 'node:fs'

const i18n = readdirSync('./i18n').map((locale) => ({
    locale,
    localization: JSON.parse(readFileSync(`./i18n/${locale}/index.json`, 'utf8')),
}))
const fallbackLocalization = i18n.find(({ locale }) => locale === 'en').localization

const html = readFileSync('./dist/index.html', 'utf8')

const altLinks = [
    ...i18n.map(
        ({ locale, localization }) =>
            `<link rel="alternate" hreflang="${localization['meta.lang']}" href="https://sonolus.com/${locale}" />`,
    ),
    `<link rel="alternate" hreflang="x-default" href="https://sonolus.com/" />`,
]

const translationMatches = [...html.matchAll(/<inject-translation>(.*)<\/inject-translation>/g)]

const localizationMatch = /<inject-localization>(.*)<\/inject-localization>/gs.exec(html)

for (const { locale, localization } of i18n) {
    const t = (key) => localization[key] ?? fallbackLocalization[key]

    let out = html
        .replace('<html>', `<html lang="${localization['meta.lang']}">`)
        .replace(
            '</head>',
            [
                ...altLinks,
                `<title>${t('meta.title')}</title>`,
                `<meta name="description" content="${t('app.description')}" />`,
                '</head>',
            ].join(''),
        )
        .replace('src="ios"', `src="./ios-${locale}.png"`)
        .replace('src="android"', `src="./android-${locale}.png"`)
        .replace(
            'href="wiki"',
            `href="https://wiki.sonolus.com${locale === 'en' ? '' : `/${locale}`}"`,
        )
        .replace(
            localizationMatch[0],
            i18n
                .map(({ locale, localization }) =>
                    localizationMatch[1]
                        .replace('href="localization"', `href="/${locale}"`)
                        .replace('<inject-name></inject-name>', localization['meta.name']),
                )
                .join(''),
        )

    for (const [search, key] of translationMatches) {
        out = out.replace(search, t(key))
    }

    writeFileSync(`./dist/${locale}.html`, out)

    if (locale === 'en') writeFileSync('./dist/index.html', out)
}
