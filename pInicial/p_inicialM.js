const btt = document.querySelector("#icoHeader")
var i = 2

btt.addEventListener("click", (e) => {
    if (i%2 == 0) {
        document.querySelector("#lado").style.width = "350px" 
        document.querySelectorAll(".nomes").forEach(function(elemento){elemento.style.display = "block"})
        i ++
    } else {
        document.querySelector("#lado").style.width = ""
        document.querySelectorAll(".nomes").forEach(function(elemento){elemento.style.display = "none"})
        i ++
    }
})

saveName = localStorage.getItem("usuarioNome")
document.querySelector("#header2 > h1").innerHTML = `<h1>Bem Vindo, ${saveName}!</h1>` 