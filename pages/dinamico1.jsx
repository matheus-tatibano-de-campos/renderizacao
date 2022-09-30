export function getServerSideProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}


export default function Dinamico() {
    return(
        <div>
            <h1>Dinâmico # 01</h1>
        </div>
    )
}