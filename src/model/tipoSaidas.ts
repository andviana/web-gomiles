import { RegistroSaida } from "./registroSaida";

export interface TipoSaida {
  id:number,
  descricao:string,
  registroSaidas?:RegistroSaida[]
}
