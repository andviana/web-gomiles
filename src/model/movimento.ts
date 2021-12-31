import { Caixa } from "./caixa";
import { RegistroEntrada } from "./registroEntrada";
import { RegistroSaida } from "./registroSaida";
import { Usuario } from "./usuario";

export interface Movimento {
  id: number,
  tipoOperacao: string,
  data: string,
  idCaixa: string,
  caixa?: Caixa,
  valor: number,
  quantidade: number,
  codigo: string,
  usuario?: Usuario,
  registroEntrada?: RegistroEntrada,
  registroSaida?: RegistroSaida
}
