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
        window.alert("Burro, não sabe nem preencher um negócio básico, cavalo, égua, obrigado por digitar '-'")
    } else {
        saveName = inNome.value
        saveEmail = inEmail.value
        saveSenha = inSenha.value
        window.alert(`Olá, ${saveName}. Cadastro realizado com sucesso.`)
    }        

    inNome.value = ""
    inEmail.value = ""
    inSenha.value = ""

})

entrar.addEventListener("click", (e) => {
    e.preventDefault()
    if (inEmail.value != "" || inSenha.value != ""){
        if (inEmail.value == saveEmail && inSenha.value == saveSenha){
            window.alert("Parabéns pelo acesso.")
        } else {
            window.alert("Ei seu sem vergonha, vá criar uma conta!!")
        }
    } else {
        window.alert("Preencha os campos seus fuboca.")
    }

    inNome.value = ""
    inEmail.value = ""
    inSenha.value = ""
})