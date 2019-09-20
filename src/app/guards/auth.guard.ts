import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class AuthGuard implements CanActivate {

  private user: Observable<firebase.User>;


  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        /*if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }*/
        // console.log('user: '+ user.email);
        // console.log('user: '+ user.emailVerified);
        // console.log('user: '+ user.displayName);
      }
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    // logic here
    // console.log("VERIFY");
    // console.log(localStorage['token']);
    this.user = this.firebaseAuth.authState;
    //        console.log('user: ');
    //      console.log(this._firebaseAuth.auth.currentUser);
    //    console.log(this._firebaseAuth.auth.app.name);
    this.user.subscribe(
      (user) => {
        /*if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }*/
        /*console.log('user: '+ user);
        console.log(user.displayName);
        console.log(user.email);
        console.log(user.emailVerified);
        let jsonUser : any = user.toJSON();
        console.log(jsonUser.stsTokenManager);
        console.log(jsonUser.stsTokenManager.expirationTime);
        console.log(user.providerData[0]);*/
      }
    );

    if (localStorage.token === undefined) {
      this.router.navigate(['/login']);
    }

    if (localStorage.token !== 'null') {
      return true;
    } else {
      this.router.navigate(['/login']);
    }


  }
}

