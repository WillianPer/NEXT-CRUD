import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoClientes"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    useEffect(obterTodos, [])
    
    function obterTodos() {
        repo.obterTodos().then(cliente => {
        setClientes(clientes)
        setVisivel('tabela')
        })
    }

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

    async function clienteExcluido( cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        setVisivel('form')
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

}