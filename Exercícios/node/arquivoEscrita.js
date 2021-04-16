const fs = require ('fs')

const produto = [{
    nome: 'celular',
    preco: 1249.00,
    desconto: 0.15, 
}, {
    nome: 'Iphone',
    preco: 5000.00,
    desconto: 0.20
}]

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo Salvo!')
}) 

 