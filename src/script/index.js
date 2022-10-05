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
// Added Message
let AddedCart = document.getElementById("AddedCart");
let AddedHeart = document.getElementById("AddedHeart");

// Shopping Cart
for (const item of shopping) {
    item.addEventListener("click", (e) => {
        shoppingMenu.classList.add("navIcon");
        shopCount.innerText = parseInt(shopCount.innerText) + 1;
        AddedCart.style.visibility = "visible";
        setTimeout(() => {
            AddedCart.style.visibility = "hidden";
        }, 2000);
    })
}
// Heart Cart
for (const item of heart) {
    item.addEventListener("click", (e) => {
        heartMenu.classList.add("navIcon");
        heartCount.innerText = parseInt(heartCount.innerText) + 1;
        AddedHeart.style.visibility = "visible";
        setTimeout(() => {
            AddedHeart.style.visibility = "hidden";
        }, 3000);
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


// console.log(AddedCart);
// console.log(AddedHeart);


// sum(3, 4)
