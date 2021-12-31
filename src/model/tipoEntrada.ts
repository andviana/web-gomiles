import { RegistroEntrada } from "./registroEntrada";

export interface TipoEntrada {
  id:number,
  descricao:string,
  registroEntradas?:RegistroEntrada[]
}
