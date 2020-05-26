import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(
    private storage: Storage,
    private router: Router
  ){}

  async canActivate(){
    // traemos la variable que tiene almacenada el usuario
    // si ya visitó intro va ser true
    // si no visitó no va existir la variable
    const isIntroShowed = await this.storage.get('isIntroShowed');
    // si es true retorna true para que muestre home
    if(isIntroShowed){
      return true;
    }
    // si no existe vamos a redirigir directamente a intro 
    else{
      this.router.navigateByUrl('/intro');
    }
  }
}
