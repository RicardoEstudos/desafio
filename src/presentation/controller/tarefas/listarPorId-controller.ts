import { HttpResponse } from "@/presentation/contratos/http";
import { ok, notFound, badRequest, created } from "@/presentation/helpers/http-helper";
import { ListarPorIdTarefa } from "@/domain/usecases";

export class ListarPorIdController {

    constructor (
        private readonly tarefaPorId: ListarPorIdTarefa
    ) {}

    async handle ( request:any ): Promise<HttpResponse> {
        
        // try {
            let result = await this.tarefaPorId.listarPorId('1');
            console.log(result);
            return created();
            // console.log('Aqui 2');
            // if ( result ) {
            //     console.log('Aqui 3');
                // return ok({
                //     body: {"retorno":request}
                // });
            // }

            // console.log('Aqui 4');

            // return notFound();

        // } catch (error) {
            
        //     return ok({
        //         body: {"mensage":"Erro de retorno"}
        //     });
        // }
    }
}