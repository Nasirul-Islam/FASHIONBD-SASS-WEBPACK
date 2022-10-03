import { sum } from './test.js';
import "../styles/style.scss";
import "../index.html";

const myFunc = () => {
    console.log("got it!")
    console.log("I can use webpack with babel 1")
    console.log("I can use webpack with babel 2")
    console.log("I can use webpack with babel 3")
}
myFunc()
sum(3, 4)
