const boxProyects = document.querySelectorAll('.proyect__element');
const proyectContainer = document.querySelector('.proyect__container');
const flechaDerecha = document.querySelector('.flecha-derecha');
const flechaIzquierda = document.querySelector('.flecha-izquierda');

let cantidadP = 1;


let clickProyectsDerecha = () => {
    flechaDerecha.addEventListener("click", () => {
        let translateX = (-346*cantidadP);
        if (cantidadP >= 1 && cantidadP <= 5) {
            proyectContainer.style.transform = "translateX(" + translateX + "px)";
            proyectContainer.style.transition = "transform .5s"
            cantidadP++
        };
        if (cantidadP == 5) {
            proyectContainer.style.transform = "none"
            cantidadP = 1
        };
    });
};

// let clickProyectsIzquierda = ()=>{
//     flechaIzquierda.addEventListener("click", ()=>{
//         proyectContainer.style.transform = "translateX("+ 246*cantidadP +"px)"
//     });
// };

// clickProyectsIzquierda()

clickProyectsDerecha();