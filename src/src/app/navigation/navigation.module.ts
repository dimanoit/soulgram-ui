import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PostManagementMenuComponent } from './post-management-menu/post-management-menu.component';
import { AddPostDialogComponent } from './post-management-menu/add-post-dialog/add-post-dialog.component';
import { CoreModule } from '../core/core.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../shared/services/posts.service';

@NgModule({
  declarations: [
    NavbarComponent,
    PostManagementMenuComponent,
    AddPostDialogComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatMenuModule,
  ],
  providers: [PostsService],
  exports: [NavbarComponent],
})
export class NavigationModule {}
