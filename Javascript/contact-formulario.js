const formulario = document.querySelector('.formulario__grid');
const inputs = document.querySelectorAll('input');
const button = document.getElementById('button')

const expresiones = {
    // Expresion que puede llevar letras, espacios y asentos
    name: /^[a-zA-Zá-Ÿ\s]{1,40}$/,
    // Expresion que puede llevar letras, espacios y asentos
    lastName: /^[a-zA-Zá-Ÿ\s]{1,40}$/,
    // Expresion para un correo
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z8-9-]+[a-zA-Z0-9-.]+$/,
    // Expresion para los telefonos, 10 numeros
    mobile: /^\d{10}$/
};

let campos = {
    name: false,
    lastName: false,
    email: false,
    mobile: false
};

let recorridoCampos = (expresione, contadorInputs, idInput, idLabel, campo) => {
    if (expresione.test(contadorInputs.value)) {
        document.getElementById(idInput).style.borderBottom = "1px solid #000";
        document.getElementById(idLabel).style.color = "#258147";
        campos[campo] = true;
    } else {
        document.getElementById(idInput).style.borderBottom = "1px solid red";
        document.getElementById(idLabel).style.color = "#ff0000";
        campo[campo] = false;
    };
};

let validarCampos = (e) => {
    switch (e.target.id) {
        case "name":
            recorridoCampos(expresiones.name, inputs[0], 'name', 'nameL', "name");
            break;
        case "lastname":
            recorridoCampos(expresiones.lastName, inputs[1], 'lastname', 'lastnameL', "lastName");
            break;
        case "email":
            recorridoCampos(expresiones.email, inputs[2], 'email', 'emailL', "email");
            break;
        case "mobile":
            recorridoCampos(expresiones.mobile, inputs[3], 'mobile', 'mobileL', "mobile");
            break;
        default:
            break;
    };
};

inputs.forEach(input => {
    input.addEventListener('keyup', validarCampos);
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (campos.name && campos.lastName && campos.email && campos.mobile) {
        inputs.forEach(input => {
            input.value = "";

            // Iterando los campos para que vuelvan al valor por defecto
            for (camposIteracion in campos) {
                campos[camposIteracion] = false;
                console.log(camposIteracion)
            }
        })
    }
})