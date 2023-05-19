var Csn = document.getElementById("Senha")
var Eem = document.getElementById("EEmail")
var Esn = document.getElementById("ESenha")
window.addEventListener("load", function () {
    
    //dashboard.textContent = exibir()

    var str = ""
    for (let i = 0, len = localStorage.length; i < len; i++) {
        let oi = localStorage.key(i)
        let S = localStorage.getItem(oi)
        ///str += `${[i + 1]}. Cadastro de: ${oi}<br>ㅤㅤEmail: ${S}  <br>`
        let use = localStorage.getItem(eemail)
        if (use) {
            console('ok')
            dashboard.innerHTML += `
            <div id="userName">${[i + 1]}. Cadastro de: ${oi}</div>
            <div id="userEmail">Email: ${S}</div>
            `
        }
         const nameDash = document.getElementById('userName')
        const emailDash = document.getElementById('userEmail')
        nameDash.innerHTML = `${[i + 1]}. Cadastro de: ${oi}`
        emailDash.innerHTML = `Email: ${S}`
    }
})

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = document.getElementById('eemail').value;
    const senha = document.getElementById('ssenha').value;
    const cadastro = JSON.parse(localStorage.getItem(usuario));

    if (!usuario || !senha) {
        //  return showToast('error', 'Campos incompletos');
    } else if ((cadastro === null) || (CryptoJS.SHA256(senha).toString() !== cadastro.senha)) {
        // return showToast('error', 'Usuário ou senha incorreta');
    } else {
        const dashboard = document.getElementById('dadosContainer')
        var str = ""
        for (let i = 0, len = localStorage.length; i < len; i++) {
            let oi = localStorage.key(i)
            let S = localStorage.getItem(oi)
            ///str += `${[i + 1]}. Cadastro de: ${oi}<br>ㅤㅤEmail: ${S}  <br>`
            dashboard.innerHTML += `
                <div id="userName">${[i + 1]}. Cadastro de: ${oi}</div>
                <div id="userEmail">Email: ${S}</div>
                `
        }
        /* const nameDash = document.getElementById('userName')
        const emailDash = document.getElementById('userEmail')
        nameDash.innerHTML = `${[i + 1]}. Cadastro de: ${oi}`
        emailDash.innerHTML = `Email: ${S}` */
    }
});
