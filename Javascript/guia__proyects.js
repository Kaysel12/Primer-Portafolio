const proyectsSection = document.querySelector('.proyects__secciones-elecciones1');
let childsProyects = document.querySelectorAll('.proyects__secciones-elements');

const proyectsDesarrollados = document.querySelector('.proyects__desarrollados');
const proyectsElementos = document.querySelectorAll('.proyects__elementos');


let iteracionClases = (id, id1, id2, id3, id4, id5)=>{
    document.getElementById(id).classList.add('background-seleccion');
    childsProyects[id1].classList.remove('background-seleccion');
    childsProyects[id2].classList.remove('background-seleccion');
    childsProyects[id3].classList.remove('background-seleccion');
    childsProyects[id4].classList.remove('background-seleccion');
    childsProyects[id5].classList.remove('background-seleccion');
};

let reorganizacionArray = (num,num1,num2,num4)=>{
    proyectsElementos[num].classList.add('display');
    proyectsElementos[num1].classList.add('display');
    proyectsElementos[num2].classList.add('display');
    proyectsElementos[num4].classList.remove('display');
};

let recorridoElements = (element) => {
    switch (element) {
        case "html/css":
            iteracionClases(element, 1, 2, 3, 4, 5);
            reorganizacionArray(1,2,3, 0);
            break;
        case "javascript":
            iteracionClases(element, 0, 2, 3, 4, 5);
            reorganizacionArray(0,2,3, 1);
            break;
        case "photoshop":
            iteracionClases(element, 0, 1, 3, 4, 5);
            reorganizacionArray(0,1,3, 2);
            break;
        case "illustrator":
            iteracionClases(element, 0, 2, 1, 4, 5);
            reorganizacionArray(0,1,2, 3);
            break;
        case "curriculumA":
            iteracionClases(element, 0, 2, 1, 3, 5);
            iteracionCurriculum("iframe2","iframe1")
            break;
        case "curriculumB":
            iteracionClases(element, 0, 2, 1, 3, 4);
            iteracionCurriculum("iframe1","iframe2")
            break;
        default:        
            break;
    }
}

childsProyects.forEach(element=>{
    element.addEventListener('click', ()=>{
        recorridoElements(element.id);
    });
});


// Selectores para el tipo de guia: Curriculum / Proyects

const seleccionadores = document.querySelector('.proyects__secciones-titulos');
const proyectsCurriculum = document.querySelector('.proyects__curriculum')

const curriculum = document.getElementById('curriculum');
const proyects = document.getElementById('proyects');

curriculum.addEventListener('click', ()=>{
    document.querySelector('.proyects__secciones-elecciones1').classList.add('display');
    document.querySelector('.proyects__secciones-elecciones2').classList.remove('display');
    curriculum.classList.remove('background-selectores')
    proyects.classList.add('background-selectores')
    proyectsDesarrollados.classList.add('display')
    proyectsCurriculum.classList.remove('display');
});

proyects.addEventListener('click', ()=>{
    document.querySelector('.proyects__secciones-elecciones2').classList.add('display');
    document.querySelector('.proyects__secciones-elecciones1').classList.remove('display');
    proyects.classList.remove('background-selectores')
    curriculum.classList.add('background-selectores')
    proyectsDesarrollados.classList.remove('display')
    proyectsCurriculum.classList.add('display');

    // Para quitar el display de todos los elementos 
    let array = document.getElementsByClassName('proyects__elementos');
     for (i of array) {
         if (i.classList.contains('display')) {
             i.classList.remove('display');
         }
     }
});

let iteracionCurriculum = (id,id2)=>{
    document.getElementById(id).classList.remove('display');
    document.getElementById(id2).classList.add('display');
}

