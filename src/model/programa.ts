import { RegistroEntrada } from "./registroEntrada";
import { RegistroSaida } from "./registroSaida";

export interface Programa {
  id:number,
  nome:string,
  logo:string,
  descricao:string,
  url:string,
  registroEntradas?: RegistroEntrada[],
  registroSaida?: RegistroSaida[]
}
