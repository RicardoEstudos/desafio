import { HttpResponse } from "@/presentation/contratos/http";
import { noContent } from "@/presentation/helpers/http-helper";
import { EditarTarefa } from "@/domain/usecases";

export class EditarController {

    constructor (
        private readonly tarefaEdit: EditarTarefa,
    ) {}

    async handle ( request:any, id:any ): Promise<HttpResponse> {
        
        try {
            
            let result = this.tarefaEdit.editar(request, id);
    
            return noContent();

        } catch (error) {
            
            return badRequest(error);
        }
    }
}