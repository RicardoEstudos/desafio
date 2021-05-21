import { HttpResponse } from "@/presentation/contratos/http";
import { ok } from "@/presentation/helpers/http-helper";

export class ListarController {

    async handle ( request:any ): Promise<HttpResponse> {

        return ok({
            body: request
        });
    }
}