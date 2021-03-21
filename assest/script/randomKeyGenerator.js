import * as app from './app.js';
 
export const getRandomNumber = (min, max) => {
   return Math.floor((Math.random()* max - min + 1) + min);
}

export const getRandomKey = () => {
    return app.keys[getRandomNumber(0, app.keys.length-1)];
}

export const targetRandomKey = () => {
    const targetted = document.getElementById(getRandomKey());
    targetted.classList.add("selected");
}

export const getTimeStamp = () =>{
    console.log(Math.floor(Date.now()));
    return Math.floor(Date.now() / 1000);
}
