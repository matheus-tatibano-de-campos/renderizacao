
function numeroAleatorio(min = 1, max= 10000) {
    return parseInt(Math.random() * (max - min)) + min
}

export default function handler(req,res) {
    res.status(200).json([
        {id:numeroAleatorio(), nome: 'Caneta', valor: 6.50},
        {id:numeroAleatorio(), nome: 'Caderno', valor: 16.50},
        {id:numeroAleatorio(), nome: 'Borracha', valor: 3.50},
        {id:numeroAleatorio(), nome: 'Tesoura', valor: 8.50},
    ])
}