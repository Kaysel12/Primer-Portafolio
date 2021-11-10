const navHover = document.querySelectorAll('.nav__hover');
const menu = document.querySelectorAll('.nav__ul-li')


// Menu-Home / Eleccion: "Comentarios"
let lastChild = navHover[0].lastElementChild;
lastChild.addEventListener('click', () => {
    document.querySelector('.aviso-container').classList.remove('display');
    showAviso();
});

// Menu-Learning / Eleccion: "Learning"
menu.forEach(seccion => {
    seccion.addEventListener('click', (e) => {
        if (seccion.id == "learning") {
            document.querySelector('.aviso-container').classList.remove('display');
            showAviso();
        };
    });
});

const notaResponsive = document.getElementById('nota');
notaResponsive.addEventListener('click', (e) => {
    if (notaResponsive.id == "nota") {
        document.querySelector('.aviso-container').classList.remove('display');
        showAviso();
    };
})


// Funcion
let showAviso = () => {
    let buttonAccept = document.querySelector('.aviso__button');
    buttonAccept.addEventListener('click', () => {
        document.querySelector('.aviso-container').classList.add('display');
    });
};

// Menu-MyCV / Eleccion: "MyCV"

const mycv = document.getElementById('mycv');
const mycv2 = document.getElementById('mycv2');

let myCvAccion = ()=>{
    document.querySelector('.proyects__secciones-elecciones1').classList.add('display');
    document.querySelector('.proyects__secciones-elecciones2').classList.remove('display');
    document.querySelector('.proyects__desarrollados').classList.add('display');
    document.querySelector('.proyects__curriculum').classList.remove('display');
    curriculum.classList.remove('background-selectores')
    proyects.classList.add('background-selectores')
}

try {
    mycv.addEventListener('click', () => {
        myCvAccion();
    })
} catch (error) {
    console.warn("Hay componentes del menu que no pueden ser utilizadas en esta seccion de la pagina. Esto fue manejado con un TryCatch");
}

try {
    mycv2.addEventListener('click', ()=>{
        myCvAccion();
    })
} catch (error) {
    console.warn("Hay componentes del menu que no pueden ser utilizadas en esta seccion de la pagina. Esto fue manejado con un TryCatch");
}
