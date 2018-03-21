import App from "../App";
import '../styles/main.scss';


const arr = [1, 2, 3];
console.log(arr)

const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
