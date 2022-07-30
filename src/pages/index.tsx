import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4')
  ]

  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-r to-blue-500 from-purple-500
    text-white`}/*"flex"*/>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>

    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  )

  // return (
    // <div className={`
    //   flex h-screen justify-center items-center 
    //   bg-gradient-to-r from-purple-500 via-yellow-500 to-blue-600
    // `}/*"flex"*/>
    //   <span className="text-4xl">Texto</span>
    // </div>)
}
