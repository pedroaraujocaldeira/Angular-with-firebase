import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ClienteComponent,

  },
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
