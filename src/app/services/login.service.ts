import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { catchError, map } from 'rxjs/operators';


import * as firebase from 'firebase/app';

import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { reject } from 'q';
import { AngularFireAuth } from '@angular/fire/auth';
import { ClienteService } from '../shared/cliente.service';


@Injectable()
export class LoginService {

    user: Observable<firebase.User>;
    
    role:BehaviorSubject<any> = new BehaviorSubject(null);


    constructor(private router: Router, public afAuth: AngularFireAuth,private clienteService:ClienteService) {
        this.user = afAuth.authState;
    }

    public verificar(uid:string) {
        let foundUid:boolean = false;

        const arrObervs =  this.clienteService.buscar();     
        const subscribeObservFb = arrObervs.subscribe((data: any) => {

      let dataFormatada = new Array(data.length); 
      for (var i = 0; i < data.length; i++) {
        let objetoData:any = {}
        objetoData = data[i].payload.val();        
        objetoData.key = data[i].key;
        dataFormatada[i] = objetoData;    
        
        if(dataFormatada[i].uid == uid) {
            localStorage['role'] = 'CLIENTE ' + dataFormatada[i].key;
            return this.role.next('CLIENTE ' + dataFormatada[i].key);
        }
     }
     localStorage['role'] = 'INFORMATA';
    return this.role.next('INFORMATA');
    });       

    //subscribeObservFb.unsubscribe();
    }
    

    public login(mail: string, password: string) {

        return new Promise((resolve, reject) => {            
            this.afAuth.auth.signInWithEmailAndPassword(mail, password).then((user) => {
                user.user.getIdToken().then((sToken) => {
                  localStorage['token'] = sToken;
                  this.verificar(user.user.uid);
                  resolve('200');
                  
                })
                .catch((eToken)=>{
                  resolve('eToken');
                  localStorage['token'] = null;
                  this.router.navigate(['/login'])
                });                
                
            })
                .catch((error) => {
                    console.log(error);
                    resolve(error.message);
                    localStorage['token'] = null;                    
                    this.router.navigate(['/login']);
                });

                
        })
            .catch((error) => {
                console.log(error);
                reject('error');
                localStorage['token'] = null;
                this.router.navigate(['/login']);
            })
    }

    public logout() {        
        this.afAuth.auth.signOut().then(() => {
          localStorage['token'] = null;
          localStorage['role'] = null;
          this.role.next(null);
          this.router.navigate(['/login']);          
       }).catch((e)=> {
          console.log("erro: " + e);
          localStorage['token'] = null;
          localStorage['role'] = null;
          this.role.next(null);
          this.router.navigate(['error']);
       });
    }


}
