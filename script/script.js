// sidebar open/hide
const btn = document.querySelector('.sidebar_btn')
const sidebar = document.getElementById('sidebar')
const btnIcon = document.getElementById('xMark')
btn.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar_visible')
    btnIcon.classList.toggle('fa-xmark')
})
