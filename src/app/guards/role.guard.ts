import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  private user: Observable<firebase.User>;
  private url: string;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
      }
    );

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


    this.user = this.firebaseAuth.authState;
    this.user.subscribe(
      (user) => {

      }
    );

    if (localStorage.token === undefined) {
      this.router.navigate(['/login']);
    }

    if (localStorage.token !== 'null') {
      if (localStorage.role === 'INFORMATA') {
        return true;
      } else {
        return false;
      }

    } else {
      this.router.navigate(['/login']);
    }

  }
}
