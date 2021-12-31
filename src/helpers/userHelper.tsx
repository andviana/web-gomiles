import { GROUP_ADMIN } from "../config/appRoles";
import { Usuario } from "../model/usuario";


export const checkRoles = (role: string | string[]): boolean => {
  /*
  const data = getDecodedToken();
  if (!role || !data) {
    return false;
  }
  const { roles } = data;
  if (typeof role === 'string') {
    return roles.includes(role);
  }
  let exists = false;
  role.forEach(item => {
    if (roles.includes(item)) exists = true;
  });
  return exists;
  */
  return true;

};

export const isAdmin = (): boolean => {
  //return checkRoles(GROUP_ADMIN);
  return true;
};

export const getMockUser = (): Usuario => {
  return {
    ativo: true,
    codigo: '457b5ddf-2cce-4564-9654-6c1d3a37f3da',
    dataAtualizacao: '2021-12-30',
    dataCadastro: '2021-12-30',
    email: 'teste@teste.com',
    id: 9999,
    password: 'teste',
    pessoaId: '/api/pessoas/9999',
    roles: '[]',
    username: 'admin'
  } as Usuario;
}
