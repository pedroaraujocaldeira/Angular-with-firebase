import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
 

  formData: Cliente;

  constructor(
    private firestore: AngularFirestore,private afa: AngularFireDatabase
    ) { }

    getClientes() {
    return this.firestore.collection('clientes').snapshotChanges();
  }
  public buscar() {
    return this.afa.list('/data/clientes').snapshotChanges();
  }

  public buscarPorId(id) {
    return this.afa.object('/data/clientes/' + id).snapshotChanges();
  }
}
