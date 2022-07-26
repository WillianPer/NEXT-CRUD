import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoClientes"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {
        tabelaVisivel,
        formularioVisivel,
        exibirTabela,
        exibirFormulario} = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])
    
    function obterTodos() {
        repo.obterTodos().then(cliente => {
        setClientes(clientes)
        exibirTabela()
        })
    }

    // const clientes = [
    //   new Cliente('Ana', 34, '1'),
    //   new Cliente('Bia', 45, '2'),
    //   new Cliente('Carlos', 23, '3'),
    //   new Cliente('Pedro', 54, '4')
    // ]

    function selecionarCliente( cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente( cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos
    }
}