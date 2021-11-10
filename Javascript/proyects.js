const boxProyects = document.querySelectorAll('.proyect__element');
const proyectContainer = document.querySelector('.proyect__container');
const flechaDerecha = document.querySelector('.flecha-derecha');
const flechaIzquierda = document.querySelector('.flecha-izquierda');

let translateX = -346;

let clickProyectsDerecha = () => {
    flechaDerecha.addEventListener("click", () => {
        functionTranslateX(translateX);
    });
};

let clickProyectsIzquierda = () => {
    flechaIzquierda.addEventListener("click", () => {
        functionTranslateXIzquierda(translateX);
    });
};


let functionTranslateX = (idTX) => {
    switch (idTX) {
        case 0:
            proyectContainer.style.transform = "translateX(" + idTX + "px)";
            proyectContainer.style.transition = "transform .5s";
            translateX = -346;
            break;
        case -346:
            proyectContainer.style.transform = "translateX(" + idTX + "px)";
            proyectContainer.style.transition = "transform .5s";
            translateX = -692;
            break;
        case -692:
            proyectContainer.style.transform = "translateX(" + idTX + "px)";
            proyectContainer.style.transition = "transform .5s";
            translateX = -1038;
            break;
        case -1038:
            proyectContainer.style.transform = "translateX(" + idTX + "px)";
            proyectContainer.style.transition = "transform .5s";
            translateX = 0;
            break;

        default:
            break;
    };
};

let functionTranslateXIzquierda = () => {
    if (translateX == -692) {
        proyectContainer.style.transform = "translateX(" + 0 + "px)";
        translateX = -346;
    } else if (translateX == -1038) {
        proyectContainer.style.transform = "translateX(" + -346 + "px)";
        translateX = -692;
    } else if (translateX == 0){
        proyectContainer.style.transform = "translateX(" + -692 + "px)";
        translateX = -1038;
    };
 };


clickProyectsIzquierda();
clickProyectsDerecha();