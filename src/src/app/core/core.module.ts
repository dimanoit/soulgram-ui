import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoulInputComponent } from './soul-input/soul-input.component';
import { SoulButtonComponent } from './soul-button/soul-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SoulInputComponent, SoulButtonComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SoulInputComponent, SoulButtonComponent],
})
export class CoreModule {}
