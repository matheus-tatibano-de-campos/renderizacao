export  async function getServerSideProps() {
    const resp = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resp.json()
    return {

        props: {
            produtos: produtos
        }
    }
}


export default function Dinamico2(props){
    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return <li key={produto.id}>
                {produto.id} - {produto.nome} tem preço de  R${produto.valor}</li>
        })
    }
    return(
        <div>
            <h1>Dinâmico #02</h1>
            <ul>
            <h2>{renderizarProdutos()}</h2>
            </ul>
        </div>
    )
}