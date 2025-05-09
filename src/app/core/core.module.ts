import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './components/header/header.component';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
  ],
  providers: [
AuthService
  ],
  exports: [
HeaderComponent
  ]
})
export class CoreModule { }
