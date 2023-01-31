import {whisper} from './voices.js';
import {shout} from './voices.js';

let inputName = window.prompt("enter your name");

console.log(`Hello, ${inputName}`);

const randNum = Math.random() * 2;

if (randNum > 2) {
    console.log(`dont speak loudly at the library`);
}   else {
    console.log(shout(`dont worry, we are at the beach`));
}