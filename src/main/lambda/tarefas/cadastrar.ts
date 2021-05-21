import 'module-alias/register';

import { CadastrarController } from "@/presentation/controller/tarefas";

export async function handler( event: any ) {
  const cadastrar = new CadastrarController();
  return await cadastrar.handle( event.body );
}