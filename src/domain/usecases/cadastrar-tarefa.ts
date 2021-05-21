import { Atividade } from '@/domain/entity/atividade'

export interface CadastrarTarefa {
    cadastrar: ( atividade: Atividade ) => Promise<void>
}
