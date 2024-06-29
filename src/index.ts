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
    [1720180800000, 250],
    [1720224000000, 250],
    [1720267200000, 250],
    [1720310400000, 250],
    [1720353600000, 250],
    [1720396800000, 250],
]) {
    const item = document.createElement('li')
    item.textContent = `${new Date(time).toLocaleString()}: ${amount}`

    if (Date.now() > time + 12 * 60 * 60 * 1000) {
        item.classList.add('line-through', 'text-sonolus-ui-text-disabled')
    }

    list?.appendChild(item)
}
