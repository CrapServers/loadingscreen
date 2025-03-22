// This file contains all images used for the background element
// PR YOUR IMAGES HERE!! :)
// Format is: [username]_[img name]
// Thanks!

const imgs = [
    "noooooo_gm_hilly.jpg",
    "noooooo_circle.jpg",
    "noooooo_camspam.jpg", // yuck this shows me with s37k in my name... oh well.
    "noooooo_drinking.jpg"
];


function setBackground() {
    const imgElement = document.getElementById("background");
    const random = imgs[Math.floor(Math.random()*imgs.length)];
    imgElement.src = "./imgs/" + random;
    console.log("set!");
};
console.log("ae");
setInterval(setBackground, 10*1000);

