import 'module-alias/register';

import { EditarController } from "@/presentation/controller/tarefas";

export async function handler( event: any ) {
  let tarefa = event.pathParameters.tarefa;
  const res = new EditarController();
  return await res.handle( event.body, tarefa );
  
}