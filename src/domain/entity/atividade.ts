import { Usuario } from "./usuario"

type Situacao = {
    situaca: 'pendente' | 'concluida'
} 

type Prioridade = {
    priore: 'baixa' | 'media' | 'alta'
}

export type Atividade = {
    nome: string
    inicio: Date
    situacao: Situacao
    prioridade: Prioridade
    conclusao: Date
    usuario: Usuario
}
