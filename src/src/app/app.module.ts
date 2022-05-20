import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { routes } from './main.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from './navigation/navigation.module';
import { UiKitSamplesComponent } from './ui-kit-samples/ui-kit-samples.component';

@NgModule({
  declarations: [AppComponent, UiKitSamplesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CoreModule,
    AuthModule,
    BrowserAnimationsModule,
    NavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
