import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoulInputComponent } from './soul-input/soul-input.component';
import { SoulButtonComponent } from './soul-button/soul-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SoulInputComponent, SoulButtonComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [SoulInputComponent, SoulButtonComponent],
})
export class CoreModule {}
