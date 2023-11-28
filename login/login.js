const inNome = document.querySelector('#nome')
const inEmail = document.querySelector('#email')
const inSenha = document.querySelector('#senha')
const cadastrar = document.querySelector('#cadastrar')
const entrar = document.querySelector('#entrar')

var saveName = true
var saveEmail = true
var saveSenha = true

const bttCriar = document.querySelector('#criar')
const bttLogar = document.querySelector('#logar')


bttCriar.addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector('form > p').innerHTML = "Cadastrar"
    inNome.style.display = 'block'
    bttLogar.style.display = 'block'
    cadastrar.style.display = 'block'

    entrar.style.display = 'none'
    bttCriar.style.display = 'none'
    document.querySelector('a').style.display = 'none'
    
    inNome.value = ""
    inEmail.value = ""
    inSenha.value = ""
}) 

bttLogar.addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector('form > p').innerHTML = "Login"
    bttLogar.style.display = 'block'
    entrar.style.display = 'block'
    bttCriar.style.display = 'block'
    document.querySelector('a').style.display = 'block'
    
    inNome.style.display = 'none'
    cadastrar.style.display = 'none'
    bttLogar.style.display = 'none'

    inNome.value = ""
    inEmail.value = ""
    inSenha.value = ""
})

cadastrar.addEventListener("click", (e) => {
    e.preventDefault()
    if (inNome.value == "" || inEmail.value == "" || inSenha.value == ""){
        window.alert("Preencha todos os campos.")
    } else {
        saveName = inNome.value
        saveEmail = inEmail.value
        saveSenha = inSenha.value
        window.alert(`Olá, ${saveName}. Cadastro realizado com sucesso.`)

        localStorage.setItem("usuarioNome", saveName)
    }        

    inNome.value = ""
    inEmail.value = ""
    inSenha.value = ""

})

entrar.addEventListener("click", (e) => {
    e.preventDefault()
    if (inEmail.value != "" || inSenha.value != ""){
        if (inEmail.value == saveEmail && inSenha.value == saveSenha){
            if (window.innerWidth >= 801) {
                window.location.href = "pInicial/p_inicial801.html"
            } else {
                window.location.href = "pInicial/p_inicial800.html"
            }
        } else {
            window.alert("Email ou senha incorreta")
        }
    } else {
        window.alert("Preencha todos os campos corretamente")
    }

    inNome.value = ""
    inEmail.value = ""
    inSenha.value = ""
})

document.querySelector('#esqueceu').addEventListener("click", (e) => {
    inSenha.value = saveSenha
})


