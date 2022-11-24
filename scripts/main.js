const nav = document.querySelector(".nav")
const navElement = document.querySelector("nav")
const more = document.querySelector(".more")
const btnL2 = document.querySelector(".prev")
const btnR2 = document.querySelector(".next")
const corousel = document.querySelector(".carousel")
const formBtn = document.querySelector(".form-btn")

nav.addEventListener('click', (e) => {
    if (e.target.className) {
        return null
    } else {
        for (let item of nav.children) {item.children[0].className = ""}
        e.target.style.transition = "border-bottom 0.5s"
        e.target.className = "active"
    }
})

more.addEventListener('click', () => {
    if (navElement.style.display === "flex") {       
        return navElement.removeAttribute("style")  
    }  
    navElement.style.display = "flex"
    navElement.style.justifyContent = "center"
})



// Карусель
let count = 0
btnR2.addEventListener('click', () => {
    count += 237
    for (let item of corousel.children) {
        item.style.right = count+"px"
        item.style.transition = "right 1s"
    }

    if (corousel.lastElementChild.style.right == "474px") {
        btnR2.setAttribute('disabled', true)
    }

    if (corousel.firstElementChild.style.right != "0px") {
        btnL2.removeAttribute('disabled');
    }
})

corousel.firstElementChild.style.right = "0px"
btnL2.addEventListener('click', () => {
    if (corousel.firstElementChild.style.right == "0px") {
        return btnL2.setAttribute('disabled', true);
    }

    count -= 237
    for (let item of corousel.children) {
        item.style.right = count + "px"
    }
    if (corousel.lastElementChild.style.right != "474px") {
        btnR2.removeAttribute('disabled');
    }
})

// Псевдовалидация почты
formBtn.addEventListener('click', () => {
    if (form.firstElementChild.value == "") {
        return null
    }

    if (form.firstElementChild.value.includes("@mail.ru")) {
        form.firstElementChild.value = ""
        alert("E-mail отправлен")
    } else {alert("E-mail введен неправильно")}
})