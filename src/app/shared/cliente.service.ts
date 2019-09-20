import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  formData: Cliente;

  constructor(
    private firestore: AngularFirestore
    ) { }

    getClientes() {
    return this.firestore.collection('clientes').snapshotChanges();
  }
}
