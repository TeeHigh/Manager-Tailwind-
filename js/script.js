const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const body = document.getElementById('body')
const light = document.getElementById('light')
const dark = document.getElementById('dark')
const system = document.getElementById('system')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
})

document.onclick = (e) => {
    if (e.target.id !== "menu" && e.target.id !== 'menuBtn') {
        // menu.classList.remove('flex')
        // menu.classList.add('hidden')
    }
}

// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     body.classList.add('dark')
// } else {
//     body.classList.remove('dark')
// }

// light.addEventListener('click', function(){
//     // Whenever the user explicitly chooses light mode
//     localStorage.theme = 'light'
// })

// dark.addEventListener('click', function(){
//     // Whenever the user explicitly chooses dark mode
//     localStorage.theme = 'dark'
//     console.log("dark")
// })

// system.addEventListener('click', function(){
//     // Whenever the user explicitly chooses to respect the OS preference
//     localStorage.removeItem('theme')
// })
