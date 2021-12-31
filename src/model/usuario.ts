import { USER_KEY } from "../config/storageConfig";
import { getMockUser } from "../helpers/userHelper";
//import { getUserFromToken } from "../helpers/userHelper";
import { Caixa } from "./caixa";
import { Movimento } from "./movimento";
import { Pessoa } from "./pessoa";
import { RegistroEntrada } from "./registroEntrada";
import { RegistroSaida } from "./registroSaida";

export interface Usuario {
  id: number,
  username: string,
  roles: string,
  password: string,
  pessoaId: string,
  dataCadastro: string,
  dataAtualizacao: string,
  ativo: boolean,
  email: string,
  codigo: string,

  pessoa?: Pessoa,
  caixas?: Caixa[],
  movimentos?: Movimento[],
  registroEntradas?: RegistroEntrada[],
  registroSaidas?: RegistroSaida[]
}

export const getLocalUser = (): Usuario => {
  const user = sessionStorage.getItem(USER_KEY);
  if (!user) {
    return {} as Usuario;
  }
  return JSON.parse(user);
};

export const setLocalUser = (): void => {
  //const user = getUserFromToken();
  const user = getMockUser();
  sessionStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const removeLocalUser = (): void => {
  sessionStorage.removeItem(USER_KEY);
};

