"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarPorIdController = void 0;
const http_helper_1 = require("@/presentation/helpers/http-helper");
class ListarPorIdController {
    constructor(tarefaPorId) {
        this.tarefaPorId = tarefaPorId;
    }
    handle(request) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            let result = yield this.tarefaPorId.listarPorId('1');
            console.log(result);
            return http_helper_1.created();
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
        });
    }
}
exports.ListarPorIdController = ListarPorIdController;
