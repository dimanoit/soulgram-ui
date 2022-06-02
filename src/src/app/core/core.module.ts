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
import { SoulTextAreaComponent } from './components/soul-text-area/soul-text-area.component';
import { ToDateViewPipe } from './pipes/to-date-view.pipe';
import { SoulAddLabelComponent } from './components/soul-add-label/soul-add-label.component';
import { SoulSmallItemViewComponent } from './components/soul-small-item-view/soul-small-item-view.component';

@NgModule({
  declarations: [
    SoulInputComponent,
    SoulButtonComponent,
    FileUploaderComponent,
    ModalComponent,
    SoulChipsComponent,
    SoulTextAreaComponent,
    ToDateViewPipe,
    SoulAddLabelComponent,
    SoulSmallItemViewComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MatDialogModule],
  exports: [
    SoulInputComponent,
    SoulButtonComponent,
    FileUploaderComponent,
    ModalComponent,
    SoulChipsComponent,
    SoulTextAreaComponent,
    ToDateViewPipe,
    SoulAddLabelComponent,
  ],
})
export class CoreModule {}
