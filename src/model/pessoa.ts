import { Usuario } from "./usuario";

export interface Pessoa {
id:number,
nome:string,
cpf:string,
dataNascimento:string,
codigo:string,
usuarios?:Usuario[]
}
