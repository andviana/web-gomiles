import { RegistroSaida } from "./registroSaida";

export interface EmpresaMilha {
  id:number,
  nome:string,
  logo:string,
  url:string,
  registroSaidas?:RegistroSaida[]
}
