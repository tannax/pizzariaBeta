//validacao endereco//
var endlocalForm = document.getElementById("myForm");
var endlocalInput = document.getElementsByName("endereco")[0];

endlocalInput.addEventListener("input", function () {
    var endlocal = endlocalInput.value;
    if (!validateEndlocal(endlocal)) {
        endlocalInput.setCustomValidity("Coloque um endereço válido!");
    } else {
        endlocalInput.setCustomValidity("");
    }
});

function validateEndlocal(endlocal) {
    var endlocalRegex = /^[a-zA-Z0-9\s]*$/;
    return endlocalRegex.test(endlocal);
}

//validacao telefone//
var foneForm = document.getElementById("myForm");
var foneInput = document.getElementsByName("telefo")[0];

foneInput.addEventListener("input", function () {
    var fone = foneInput.value;
    if (!validatePhone(fone)) {
        foneInput.setCustomValidity("Utilize um número real");
    } else {
        foneInput.setCustomValidity("");
    }
});

function validatePhone(fone) {
    var foneRegex = /^[0-9]*$/;
    return foneRegex.test(fone);
}

//validacao nome//
var form = document.getElementById("myForm");
var nameInput = document.getElementsByName("nome")[0];

form.addEventListener("submit", function (event) {
    var name = nameInput.value;
    if (!validateName(name)) {
        event.preventDefault();
        nameInput.setCustomValidity("Coloque um nome válido!");
    }
});

function validateName(name) {
    var nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(name);
}