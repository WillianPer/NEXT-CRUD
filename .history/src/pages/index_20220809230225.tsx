import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
    cliente, 
    clientes,
    novoCliente,
    exibirTabela,
    salvarCliente,
    tabelaVisivel,
    excluirCliente,
    selecionarCliente
  } = useClientes()

  // const repo: ClienteRepositorio = new ColecaoCliente()

  // const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  // const [clientes, setClientes] = useState<Cliente[]>([])
  // const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  // useEffect(obterTodos, [])
  
  // function obterTodos() {
  //   repo.obterTodos().then(cliente => {
  //     setClientes(clientes)
  //     setVisivel('tabela')
  //   })
  // }

  // // const clientes = [
  // //   new Cliente('Ana', 34, '1'),
  // //   new Cliente('Bia', 45, '2'),
  // //   new Cliente('Carlos', 23, '3'),
  // //   new Cliente('Pedro', 54, '4')
  // // ]

  // function clienteSelecionado( cliente: Cliente) {
  //   setCliente(cliente)
  //   setVisivel('form')
  // }

  // async function clienteExcluido( cliente: Cliente) {
  //   await repo.excluir(cliente)
  //   obterTodos()
  // }

  // function novoCliente() {
  //   setCliente(Cliente.vazio())
  //   setVisivel('form')
  // }

  // async function salvarCliente(cliente: Cliente) {
  //   await repo.salvar(cliente)
  //   obterTodos()
  // }


  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-r to-blue-500 from-purple-500
    text-white`}/*"flex"*/>

      <Layout titulo="Cadastro Simples">

        {tabelaVisivel ? (

          <>

            <div className="flex justify-end">

              <Botao cor="green" className="mb-4"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>

            </div>

            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}/>
            
          </>

        ) : (
          
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}/>

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
