import { Movimento } from "./movimento";
import { Usuario } from "./usuario";

export interface Caixa {
  id: number,
  dataAbertura: string,
  dataFechamento?: string,
  ativo: boolean,
  saldoMilhas: number,
  totalEntradas: number,
  valorEntradas: number,
  totalSaidas: number,
  valorSaidas: number,
  valorEstoqueMilhasPeriodo: number,
  valorLucroMilhasPeriodo: number,
  valorMilhaPeriodo: number,
  codigo: string,
  usuarioFechamento?: Usuario,
  movimentos?: Movimento[]
}
