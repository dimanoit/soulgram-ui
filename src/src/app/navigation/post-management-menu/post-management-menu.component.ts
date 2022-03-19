import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { MenuIcons } from '../navbar/menu-items.enum';
import { take } from 'rxjs';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';

@Component({
  selector: 'soul-post-management-menu',
  templateUrl: './post-management-menu.component.html',
  styleUrls: ['./post-management-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostManagementMenuComponent {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  icons = MenuIcons;

  constructor(public dialog: MatDialog) {
    this.addPostDialog();
  }

  addPostDialog() {
    const dialogRef = this.dialog.open(AddPostDialogComponent, {
      restoreFocus: false,
    });

    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
}
