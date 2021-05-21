import 'module-alias/register';

import { ListarPorIdController } from "@/presentation/controller/tarefas";

export async function handler( event: any ) {
  const id = event.pathParameters.tarefa;
  const response = new ListarPorIdController();
  
  return await response.handle( id );
}