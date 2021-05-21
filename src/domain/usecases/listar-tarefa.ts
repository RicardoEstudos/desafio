import { Atividade } from '@/domain/entity/atividade'

export interface ListarTarefa {
    listar: () => Promise<Atividade[]>
}
