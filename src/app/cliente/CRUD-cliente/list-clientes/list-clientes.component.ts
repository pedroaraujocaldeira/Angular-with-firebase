import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/cliente.model';
import { ClienteService } from 'src/app/shared/cliente.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})


export class ListClientesComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Position', 'Mobile', 'Delete'];

  dataSource;

  constructor(private service: ClienteService, private firestore: AngularFirestore,
    // private toastr:ToastrService

  ) { }

  ngOnInit() {
    this.service.getClientes().subscribe(actionArray => {
      console.log(actionArray);

      const list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Cliente;
      });

      this.dataSource = new MatTableDataSource(list);

    });
  }

  onEdit(emp: Cliente) {
    this.service.formData = Object.assign({}, emp);
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.firestore.doc('clientes/' + id).delete();
      // this.toastr.warning('Deleted successfully','EMP. Register');
    }
  }

}
