import { Atividade } from '@/domain/entity/atividade'

export interface EditarTarefa {
    editar: ( atividade: Atividade, id:string ) => Promise<void>
}
