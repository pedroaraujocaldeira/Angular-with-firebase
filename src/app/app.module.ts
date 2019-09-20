import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatTableModule } from '@angular/material';
import { ClienteComponent } from './cliente/cliente.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClientesComponent } from './cliente/CRUD-cliente/clientes/clientes.component';
import { ListClientesComponent } from './cliente/CRUD-cliente/list-clientes/list-clientes.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ClienteComponent,
    ClientesComponent,
    ListClientesComponent
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
    MatTableModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
