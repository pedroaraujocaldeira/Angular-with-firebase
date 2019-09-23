import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/shared/cliente.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(private _firebaseAuth: AngularFireAuth, private loginService: LoginService, private router: Router,
    private clienteService: ClienteService,private breakpointObserver: BreakpointObserver) {
    // this.sidebarService._demo.subscribe(res => {
    //   if (res == '/login' || res == null || ((res == '/' || res == null) && localStorage['token'] == "null"))
    //     this.canActivate = false;
    //   else
    //     this.canActivate = true;
    //   this.clienteKey = localStorage['role'].split(" ")[1];
    //   const obser = this.clienteService.buscarPorId(this.clienteKey);
    //   this.subsc = obser.subscribe(data => {
    //     let objetoData: any = {}
    //     objetoData = data.payload.val();

    //     if (objetoData == null)
    //       this.clienteNome = 'Informata';
    //     else
    //       this.clienteNome = 'Cliente ' + objetoData.name;
    //   })

    // })

  }

  role: string;
  clienteKey: string;
  clienteNome: string;

  canActivate: boolean;
  user: Observable<firebase.User>;
  email: string = '';

  subscription: any;
  isLogin: boolean;

  subsc: Subscription;
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.role = localStorage['role'].split(" ")[0];

    this.user = this._firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user != null)
          this.email = user.email;
      }
    );

  }

  logout() {
    this.email = "";
    this.loginService.logout();
  }

}
