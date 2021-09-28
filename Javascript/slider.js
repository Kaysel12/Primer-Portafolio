// *********Codigo para el slide*************

const sliderBox = document.querySelector(".skills__slider");
const slideImage = document.querySelectorAll(".skills__image");

let intervalo = 2500;
let width = sliderBox.clientWidth;
let cantidad = 1;

window.addEventListener('resize', () => {
    width = sliderBox.clientWidth;
})

let automationSlide = ()=>{
    sliderBox.style.transform = "translateX(-" + width * cantidad + "px)";
    sliderBox.style.transition = "transform 1.5s ease-out";
    cantidad++


    if (cantidad == slideImage.length) {
        setTimeout(() => {
            sliderBox.style.transform = "translateX(" + 0 + "px)";
            sliderBox.style.transition = "transform 0s";
            cantidad = 1;
        }, 1500)
    }

};

setInterval(() => {
    automationSlide();
    recorridoPuntos();
    eliminarRecorridoPuntos();
}, intervalo);



// *****Codigo para los puntos que funcionan como guia en el slide******

let puntos = document.querySelectorAll(".puntos");
let i = 1;
let varianteI = 0

let recorridoPuntos = ()=>{
    if (i <= 6) {
        puntos[i].style.background = "#38434e";
        i++  
    };
    if (i == 7) return i = 0
};

let eliminarRecorridoPuntos = ()=>{
    if (varianteI <= 6) {
        puntos[varianteI].style.background = "#d7fffec7";
        varianteI++
    };
    if (varianteI == 7) return varianteI = 0;
};
