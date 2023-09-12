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
