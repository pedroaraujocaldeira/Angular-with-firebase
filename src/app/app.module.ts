import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClientesComponent } from './pages/cliente/CRUD-cliente/clientes/clientes.component';
import { ListClientesComponent } from './pages/cliente/CRUD-cliente/list-clientes/list-clientes.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AcessoNegadoComponent } from './pages/acesso-negado/acesso-negado.component';
import { AuthGuard } from './guards/auth.guard';
import { ListPedidosComponent } from './pages/pedidos/CRUD-pedido/list-pedidos/list-pedidos.component';
import { PedidosComponent } from './pages/pedidos/CRUD-pedido/pedidos/pedidos.component';
import { ProdutosComponent } from './pages/produtos/CRUD-produto/produtos/produtos.component';
import { ListProdutosComponent } from './pages/produtos/CRUD-produto/list-produtos/list-produtos.component';
import { PedidoComponent } from './pages/pedidos/pedido.component';
import { ProdutoComponent } from './pages/produtos/produto.component';
import { FuncionarioComponent } from './pages/funcionarios/funcionario.component';
import { FuncionariosComponent } from './pages/funcionarios/CRUD-funcionarios/funcionarios/funcionarios.component';
import { ListFuncionariosComponent } from './pages/funcionarios/CRUD-funcionarios/list-funcionarios/list-funcionarios.component';
import { MenuComponent } from './pages/main/menu/menu.component';






@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ClienteComponent,
    ClientesComponent,
    ListClientesComponent,
    LoginComponent,
    AcessoNegadoComponent,
    PedidoComponent,
    ListPedidosComponent,
    PedidosComponent,
    ProdutoComponent,
    ProdutosComponent,
    ListProdutosComponent,
    FuncionarioComponent,
    FuncionariosComponent,
    ListFuncionariosComponent,
    MenuComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AngularFireDatabaseModule,               
    AngularFireAuthModule 



  ],
  providers: [ LoginService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
