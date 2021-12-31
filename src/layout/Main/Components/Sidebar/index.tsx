import React from 'react'
import Divider from './components/Divider'
import Heading from './components/Heading'
import NavDropdown from './components/NavDropdown/NavDropdown'
import NavItem from './components/NavItem'

const Sidebar:React.FC = () => {
  return (
      <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id='accordionSidebar'>

        {/* Sidebar - Brand */}
        <a className='sidebar-brand d-flex align-items-center justify-content-center'
          href='http://localhost:3000'>
          <div className='sidebar-brand-icon rotate-n-15'>
            <i className='fas fa-map-signs'></i>
          </div>
          <div className='sidebar-brand-text mx-3'>gomilhas</div>
        </a>

        <Divider />
        {/* Painel */}
        <NavItem title='Painel' active faIcon='fas fa-home' target='http://localhost:3000' />
        <Divider />
        <Heading title='Opções' />
        {/* Cadastros */}
        <NavDropdown dataParent='accordionSidebar' id='opcoes' title='Cadastros' faIcon='fas fa-cog' items={[
          {
            header: 'Gerenciar', group: [
              { target: 'http://localhost:3000', title: 'Tipo Entrada' },
              { target: 'http://localhost:3000', title: 'Tipo Saída' },
              { target: 'http://localhost:3000', title: 'Programa' },
              { target: 'http://localhost:3000', title: 'Empresa de Milhas' }
            ]
          }
        ]} />
        {/* Usuários */}
        <NavDropdown dataParent='accordionSidebar' id='usuarios' title='Usuários' faIcon='fas fa-user' items={[
          {
            header: 'Gerenciar', group: [
              { target: 'http://localhost:3000', title: 'Pessoa' },
              { target: 'http://localhost:3000', title: 'Usuário' }
            ]
          }
        ]} />
        <Divider />
        <Heading title='Seja bem vindo' />
        <NavItem title='Entrada' faIcon='fas fa-home' target='http://localhost:3000' />
        <NavItem title='Saída' faIcon='fas fa-home' target='http://localhost:3000' />
        {/* Operações */}
        <NavDropdown dataParent='accordionSidebar' id='operacoes' title='Operações' faIcon='fas fa-dollar-sign' items={
          [
            {header: 'Movimentações', group: [
              { target: 'http://localhost:3000', title: 'Transferir' },
              { target: 'http://localhost:3000', title: 'Fechar Caixa' },
              { target: 'http://localhost:3000', title: 'Cancelar Transação' }
            ]},
            {header: 'Credenciais:', group: [
              { target: 'http://localhost:3000', title: 'Trocar Senha' },
              { target: 'http://localhost:3000', title: 'Sair' }
            ]},
          ]} />
        <Divider />
        {/* Sidebar Toggler (Sidebar) */}
        <div className='text-center d-none d-md-inline'>
          <button className='rounded-circle border-0' id='sidebarToggle'></button>
        </div>
      </ul>
  )
}

export default Sidebar

