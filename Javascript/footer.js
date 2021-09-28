let footerIcons = document.querySelectorAll('.footer-icons_ul');
footerIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault()
    })
})