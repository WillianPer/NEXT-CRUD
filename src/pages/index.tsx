import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-r to-blue-500 from-purple-500
    text-white`}/*"flex"*/>
      <Layout titulo="Cadastro Simples">
        <span>Conteudo</span>
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
