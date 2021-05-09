import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    
  ],
  declarations: [AuthComponent]
})
export class AuthPageModule {}