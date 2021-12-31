import { Movimento } from "./movimento";
import { Programa } from "./programa";
import { TipoEntrada } from "./tipoEntrada";
import { Usuario } from "./usuario";

export interface RegistroEntrada {
  id:number,
  movimento:Movimento,
  programa:Programa,
  milhas:number,
  valor:number,
  dataEntrada:number,
  tipoEntrada:TipoEntrada,
  usuario:Usuario,
  codigo:string
}
