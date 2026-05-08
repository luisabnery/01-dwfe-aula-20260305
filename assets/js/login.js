const email = "admin@exemplo.com";
<<<<<<< HEAD
const senha = "1234"

function verificarCredenciais(){
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    if(emailInformado === email){
        alert("E-mail informado corretamente!");
        if(senhaInformada === senha){
            alert("Senha informada corretamente!");
            window.location = "home.html";
        } else{
            alert("Senha informada incorretamente!");
        }
    } else{
        alert("E-mail informado incorretamente!");
    }
=======
const senha = "1234";
function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    if (emailInformado == email) {
        alert("E-mail informado corretamente!");
        if (senhaInformada == senha) {
            alert("Senha Informada corretamente!");
            window.location = "home.html";
        }
        else
            alert("Senha informada incorretamente!");

    }
    else
        alert("E-mail informado incorretamente!");
>>>>>>> fa1efa7667bc7a5a5a2e758e186f83e31d4138f5
}