import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoulInputComponent } from './soul-input/soul-input.component';
import { SoulButtonComponent } from './soul-button/soul-button.component';

@NgModule({
  declarations: [SoulInputComponent, SoulButtonComponent],
  imports: [CommonModule],
  exports: [SoulInputComponent, SoulButtonComponent],
})
export class CoreModule {}
