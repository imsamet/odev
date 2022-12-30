const navLanguage = document.getElementById("nav-language")
const navFlag = document.getElementById("nav-flag")
const navLanguageItems = document.getElementsByClassName("nav-language-list-item")
navLanguage.onclick = () => {
  navLanguage.classList.toggle("nav-language-open")
  navLanguage.children[2].classList.toggle("nav-arrow-open")
  navLanguage.children[3].classList.toggle("nav-language-list-open")
}
for (let i = 0; i < navLanguageItems.length; i++) {
  navLanguageItems[i].onclick = () => {
    const svg = navLanguageItems[i].children[0].innerHTML;
    const span = navLanguageItems[i].children[1].innerHTML;
    navLanguage.children[0].innerHTML = svg
    navLanguage.children[1].innerHTML = span
  }
}