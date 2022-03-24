import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { MenuIcons } from '../navbar/menu-items.enum';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';
import { ComponentType } from '@angular/cdk/portal';
import { AddArticleDialogComponent } from './add-article-dialog/add-article-dialog.component';

@Component({
  selector: 'soul-post-management-menu',
  templateUrl: './post-management-menu.component.html',
  styleUrls: ['./post-management-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostManagementMenuComponent {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;
  icons = MenuIcons;

  constructor(public dialog: MatDialog) {}

  addPostDialog() {
    this.openDialog(AddPostDialogComponent);
  }

  addArticleDialog() {
    this.openDialog(AddArticleDialogComponent);
  }

  private openDialog(component: ComponentType<object>): void {
    const dialogRef = this.dialog.open(component, {
      restoreFocus: false,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
}
