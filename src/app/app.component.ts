import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocalStorageService } from './shared/services/local-storage.service';

@Component({
  selector: 'soul-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private readonly localStorageService: LocalStorageService) {}

  get isAuthorized(): boolean {
    return this.localStorageService.getToken() !== null;
  }

  //TODO Auth Guard
}
