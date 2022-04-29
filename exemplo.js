var num = document.getElementById('txtnum')
var lista = document.getElementById('caixasel')
var res = document.getElementById('res')
var valores = []

function Enum(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true 
    }else{
        return false
    }
}
function nalista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}    
function adicionar(){
    if (Enum(num.value) && !nalista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('valor invalido ou ja adicionado na lista')
    }
num.value = ""
num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0 
        for(var pos in valores){
            soma += valores[pos]
        }
        media = soma / tot
        for(var pos in valores){
            if(valores[pos] > maior)
            maior = valores[pos]
        }if(valores[pos] < menor)
            menor = valores[pos]
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados!</p>`
        res.innerHTML += `<p>O maioir valor é: ${maior}</p>`
        res.innerHTML += `<p>O menor valor é: ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é: ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é: ${media}</p>`
    }
}
