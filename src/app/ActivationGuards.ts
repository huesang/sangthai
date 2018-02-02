import { Injectable } from "@angular/core";
import { Router,CanActivate } from '@angular/router';
import { FormService } from './form/form.service';
@Injectable()
export class ActivationGuards implements CanActivate {
 
   constructor(private router: Router, private userService: FormService) {}
 
   public canActivate() {
    if (!this.userService.checkLogin()) {
        this.router.navigate(["/home"]);
        return false;
    } else {
        return true;
    }
   }
}