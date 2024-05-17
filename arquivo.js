
var array_usuarios = new Array()

var div_registro = document.getElementById('registro')
var div_login = document.getElementById('logar')

tela_usuarios.style.display = 'none'

div_registro.style.display = 'none'
div_login.style.display = 'none'

function registrar() {

    let name = document.getElementById('nome').value
    let log = document.getElementById('login').value
    let sen = document.getElementById('senha').value
    let conf = document.getElementById('conf_senha').value
    let res = document.getElementById('registro_res')

    if (name == '' || log == '' || sen == '' || conf == '') {
        res.innerHTML = 'Preencha todos os campos!'
        res.style.color = 'red'
        return
    } else if (sen != conf) {
        res.innerHTML = 'Senhas inválidas!'
        res.style.color = 'red'
        return
    } else { 

        for (let conta of array_usuarios) {
            if (conta.login == log) {
                res.innerHTML = 'Login já utilizado!'
                res.style.color = 'red'
                return
            }
        }

        res.innerHTML = 'Cadastrado com sucesso!'
        res.style.color = 'green'
        array_usuarios.push({nome: name, login: log, senha: sen})
    }

    let res_usuarios = document.getElementById('res_usuarios')
    array_usuarios.forEach(function(item, index) {
        if (index + 1 == array_usuarios.length) {
            res_usuarios.innerHTML += `${index + 1} - ${item.nome}</br>`
        }
    })

    if (array_usuarios.length != 0) {
        tela_usuarios.style.display = 'block'
    }
}

function logar() {
    let login_usuario = document.getElementById('logar_login').value
    let senha_usuario = document.getElementById('logar_senha').value
    let res_login = document.getElementById('login_res')

    if (login_usuario == '' || senha_usuario == '') {
        res_login.innerHTML = 'Preencha todos os campos!'
        res_login.style.color = 'red'
    } else {
        for (let item of array_usuarios) {
            if (item.login == login_usuario && item.senha == senha_usuario) {
                res_login.innerHTML = `Login aprovado!</br>Olá, <strong>${item.nome}</strong>`
                res_login.style.color = 'green'
                break
            } else {
                res_login.innerHTML = 'Login ou Senha inválidos!'
                res_login.style.color = 'red'
            }
    }
    }
}

function registro() {
    div_login.style.display = 'none'
    div_registro.style.display = 'block'
}
function login() {
    div_login.style.display = 'block'
    div_registro.style.display = 'none'
}