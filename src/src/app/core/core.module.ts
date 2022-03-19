import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoulInputComponent } from './components/soul-input/soul-input.component';
import { SoulButtonComponent } from './components/soul-button/soul-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';

@NgModule({
  declarations: [
    SoulInputComponent,
    SoulButtonComponent,
    FileUploaderComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [SoulInputComponent, SoulButtonComponent, FileUploaderComponent],
})
export class CoreModule {}
