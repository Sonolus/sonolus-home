import './index.css'

if (location.pathname === '/') {
    let path

    if (navigator.language.startsWith('zh')) {
        switch (navigator.language) {
            case 'zh-HK':
            case 'zh-TW':
                path = 'zht'
                break
            default:
                path = 'zhs'
                break
        }
    } else {
        path = navigator.language.split('-')[0]
        switch (path) {
            case 'es':
            case 'id':
            case 'ja':
            case 'ko':
            case 'ru':
            case 'tr':
                break
            default:
                path = ''
                break
        }
    }

    if (path) location.href = path
}

const togglePopup = () => {
    const popup = document.getElementById('popup-localization')
    if (!popup) return

    popup.classList.toggle('opacity-0')
    popup.classList.toggle('pointer-events-none')
}

document.getElementById('btn-localization')?.addEventListener('click', togglePopup)

for (const localization of document.getElementsByClassName('localization')) {
    ;(localization as HTMLAnchorElement).addEventListener('click', togglePopup)
}

const list = document.getElementById('testflight-list')

for (const [time, amount] of [
    [1752235200000, 300],
    [1752278400000, 300],
    [1752321600000, 300],
    [1752364800000, 300],
    [1752408000000, 300],
    [1752451200000, 300],
]) {
    const item = document.createElement('li')
    item.textContent = `${new Date(time).toLocaleString()}: ${amount}`

    if (Date.now() > time + 12 * 60 * 60 * 1000) {
        item.classList.add('line-through', 'text-sonolus-ui-text-disabled')
    }

    list?.appendChild(item)
}
