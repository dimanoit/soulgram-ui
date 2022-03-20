import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoulInputComponent } from './components/soul-input/soul-input.component';
import { SoulButtonComponent } from './components/soul-button/soul-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SoulChipsComponent } from './components/soul-chips/soul-chips.component';

@NgModule({
  declarations: [
    SoulInputComponent,
    SoulButtonComponent,
    FileUploaderComponent,
    ModalComponent,
    SoulChipsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MatDialogModule],
  exports: [
    SoulInputComponent,
    SoulButtonComponent,
    FileUploaderComponent,
    ModalComponent,
    SoulChipsComponent,
  ],
})
export class CoreModule {}
