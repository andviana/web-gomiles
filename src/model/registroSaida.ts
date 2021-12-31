import { EmpresaMilha } from "./empresaMilha";
import { Movimento } from "./movimento";
import { Programa } from "./programa";
import { TipoSaida } from "./tipoSaidas";
import { Usuario } from "./usuario";

export interface RegistroSaida {
  id: number,
  movimento: Movimento,
  empresaMilha: EmpresaMilha,
  programa: Programa,
  valor: number,
  milhas: number,
  valorMilha: number,
  dataSaida: string,
  dataCompensaca: string,
  tipoSaida: TipoSaida,
  usuario: Usuario,
  codigo: string
}
