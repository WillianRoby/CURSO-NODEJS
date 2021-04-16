let a = 2 // visível somente dentro do módulo.

module.exports = { // visível para fora do módulo
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa noite'
    }
}
console.log(moduloB)