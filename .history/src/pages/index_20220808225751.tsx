import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoClientes";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(() => {
    repo.obterTodos().then(setClientes)
  }, [])

  // const clientes = [
  //   new Cliente('Ana', 34, '1'),
  //   new Cliente('Bia', 45, '2'),
  //   new Cliente('Carlos', 23, '3'),
  //   new Cliente('Pedro', 54, '4')
  // ]

  function clienteSelecionado( cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido( cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }


  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-r to-blue-500 from-purple-500
    text-white`}/*"flex"*/>

      <Layout titulo="Cadastro Simples">

        {visivel === 'tabela' ? (

          <>

            <div className="flex justify-end">

              <Botao cor="green" className="mb-4"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>

            </div>

            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}/>
            
          </>

        ) : (
          
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}/>

        )}
        

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
