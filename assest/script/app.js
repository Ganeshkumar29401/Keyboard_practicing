import * as  random from './randomKeyGenerator.js';

export const keys = [..."abcdefghijklmnopqrstuvwxyz"];

const timeStamp = [];

timeStamp.unshift(random.getTimeStamp());

document.addEventListener("keyup", e => {
    let keyPressed = e.key;
    keyPressed = keyPressed.toLowerCase();
    const keyElement = document.getElementById(keyPressed);
    const highlightedKey = document.querySelector('.selected');

    keyElement.classList.add("hit");
    keyElement.addEventListener("animationend", () => {
        keyElement.classList.remove("hit");
    })
    if (keyPressed === highlightedKey.innerHTML.toLowerCase()) {
        highlightedKey.classList.remove("selected");
        random.targetRandomKey();
    }
});

random.targetRandomKey();

        // timeStamp.unshift(random.getTimeStamp());
        // const elapsedTime = timeStamp[0] - timeStamp[1];
        // console.log(elapsedTime);
        // console.log(`character per minute ${60/elapsedTime}`);

