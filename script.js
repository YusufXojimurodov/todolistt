let form = document.querySelector(".form")
let array = []


form.addEventListener("submit", (yengilanma) => {
    yengilanma.preventDefault()
    let body = document.querySelector("body")
    let createElement = document.createElement("li")
    let ul = document.createElement("ul")
    let input = document.querySelector(".input")
    let inputvalue = input.value

    array.push(inputvalue)

    if (inputvalue.length >= 4) {
        todoList()
    } else if (inputvalue.length <= 4) {
        let p = document.querySelector(".xato")
        p.textContent = "4 ta harfdan kop malumot kirgizing ‼️"

        let timeOut = setTimeout(() => {
            p.textContent = ''
        }, 3000)

    }

    let text = document.querySelector(".text")
    let checkbox = document.querySelector(".checkbox")
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            text.style.textDecoration = "line-through"
            text.style.opacity = "50%"
        } else {
            text.style.textDecoration = "none"
            text.style.opacity = "100%"
        }
    })


    function todoList() {
        array.forEach((e) => {
            createElement.innerHTML = `
    <li>
        <input class="checkbox" type="checkbox">
        <p class="text">${e}</p>
        <button class="edit-btn">✏️</button>
        <button class="del-btn">🗑️</button>
    </li>
`
        })

        body.append(ul)
        ul.append(createElement)
        createElement.style.borderBottom = "2px solid #6C63FF"
        input.value = ""
    }

    let deleteBtn = createElement.querySelector('.del-btn');

    deleteBtn.addEventListener('click', () => {
        let index = array.indexOf(inputvalue);
        if (index !== -1) {
            array.splice(index, 1);
        }
        createElement.remove();
    });

    let editBtn = createElement.querySelector('.edit-btn');

    editBtn.addEventListener('click', () => {
        input.value = inputvalue; // inputni eski qiymat bilan to‘ldiramiz
        let index = array.indexOf(inputvalue);
        if (index !== -1) {
            array.splice(index, 1); // eski qiymatni o‘chiramiz
        }
        createElement.remove(); // eski elementni DOMdan o‘chiramiz
    });



})




let darkbtn = document.querySelector(".dark-btn");

darkbtn.addEventListener("click", () => {
    let body = document.querySelector("body");

    let dark = body.classList.toggle("dark-mode");

    if (dark) {
        darkbtn.innerHTML = `
        <img src="Vector (2).svg" alt="light">
        `
    } else {
        darkbtn.innerHTML = `
        <img src="Vector (1).svg" alt="dark">
        `
    }
});