import { HttpResponse } from "@/presentation/contratos/http";
import { created, ok } from "@/presentation/helpers/http-helper";
import { CadastrarTarefa, ListarPorIdTarefa } from "@/domain/usecases";

export class ExcluirController {

    constructor (
        private readonly cadastrarTarefa: CadastrarTarefa,
        private readonly listarPorId: ListarPorIdTarefa
    ) {}

    async handle ( request:any ): Promise<HttpResponse> {
        
        try {
            
            let result = this.listarPorId.listarPorId(request.nome);
            
            if ( result ) {
                return ok({
                    body:"Tarefa já cadastrada"
                });
            }
            
            await this.cadastrarTarefa.cadastrar( request )
    
            return created();

        } catch (error) {
            
            return created();
        }
    }
}