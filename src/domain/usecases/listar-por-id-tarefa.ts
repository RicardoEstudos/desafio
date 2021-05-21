import { Atividade } from '@/domain/entity/atividade'

export interface ListarPorIdTarefa {
    listarPorId: (id: string) => Promise<Atividade>
}
