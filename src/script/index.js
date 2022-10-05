// import { sum } from './test.js';
import "../styles/style.scss";
import "../index.html";

// click event
let shopping = document.getElementsByClassName("shopping");
let heart = document.getElementsByClassName("heart");
let shoppingMenu = document.getElementById("shoppingMenu");
let heartMenu = document.getElementById("heartMenu");
let shopCount = document.getElementById("shopCount");
let heartCount = document.getElementById("heartCount");

// Shopping Cart
for (const item of shopping) {
    item.addEventListener("click", (e) => {
        shoppingMenu.classList.add("navIcon");
        shopCount.innerText = parseInt(shopCount.innerText) + 1;
        console.log(shopCount.innerText);
    })
}
// Heart Cart
for (const item of heart) {
    item.addEventListener("click", (e) => {
        heartMenu.classList.add("navIcon");
        heartCount.innerText = parseInt(heartCount.innerText) + 1;
        console.log(heartCount.innerText);
    })

}

// scroll animation start
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        // window.outerHeight
        document.querySelector("#scrollToTop").classList.add("active");
    }
    else {
        document.querySelector("#scrollToTop").classList.remove("active");
    }
});

document.querySelector('#scrollToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
// scroll animation end


// console.log("Cart has been added")

// sum(3, 4)
