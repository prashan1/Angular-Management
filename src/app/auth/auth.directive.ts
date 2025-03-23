import { Directive, effect, inject, input } from '@angular/core';
import { AuthService } from './auth.service';
import { Permission } from './auth.model';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth'})
  private authService = inject(AuthService);

  constructor() { 
    console.log(this.userType,'sdflkjsdk');
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
          console.log('active permission')
      }
      else {
        console.log('inactive permission')
      }
    })
  }

}
