import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { LoginComponent } from './pages/login/login.component';
import { AcessoNegadoComponent } from './pages/acesso-negado/acesso-negado.component';
import { AuthGuard } from './guards/auth.guard';
import { ProdutoComponent } from './pages/produtos/produto.component';
import { PedidoComponent } from './pages/pedidos/pedido.component';
import { FuncionarioComponent } from './pages/funcionarios/funcionario.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    canActivate: [AuthGuard],
    component: ClienteComponent,

  },
  {
    path: 'pedidos',
    canActivate: [AuthGuard],
    component: PedidoComponent,

  },
  {
    path: 'produtos',
    canActivate: [AuthGuard],
    component: ProdutoComponent,

  },
  {
    path: 'funcionarios',
    canActivate: [AuthGuard],
    component: FuncionarioComponent,

  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  }
  //   {
  //     path: 'usuarios',
  //     component: MainLayoutComponent,
  //     canActivate: [AuthGuard],
  //     children: [
  //       { path: '', component: UsuarioComponent, canActivate: [RoleGuard]},
  //       { path: 'form', component: UsuarioformComponent, canActivate: [RoleGuard]}
  //     ]
  //   },
  // { path: 'aplicativos',
  //   component: MainLayoutComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //       { path: '', component: AplicativoComponent, canActivate: [RoleGuard]},
  //       { path: 'form', component: AplicativoformComponent, canActivate: [RoleGuard]}
  //     ]
  //   },
  // {
  //   path: 'clientes',
  //   component: MainLayoutComponent,
  //   canActivate: [AuthGuard],
  //   children:  [
  //     { path: '', component: ClienteComponent, canActivate: [AuthGuard]},
  //     { path: 'form', component: ClienteformComponent, canActivate: [AuthGuard]},
  //     { path: 'associar-aplicativos', component: ClienteAssociarAplicativosFormComponent, canActivate: [AuthGuard]},
  //     { path: 'associar-usuarios', component: ClienteAssociarUsuariosFormComponent, canActivate: [AuthGuard]},
  //     { path: 'associar-aplicativos-usuario', component: ClienteAssociarAplicativosUsuarioFormComponent  , canActivate: [AuthGuard]},
  //     { path: 'associar-usuarios-portal', component: ClienteAssociarUsuariosPortalFormComponent, canActivate: [AuthGuard]},
  //     { path: 'associar-news', component: ClienteAssociarNewsFormComponent, canActivate: [AuthGuard]}
  //   ]
  // },
  // {
  //   path: 'login',
  //   component: EmptyLayoutComponent,
  //   children: [
  //     { path: '', component: LoginComponent }
  //   ]
  // }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
