import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'soul-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryComponent {

  constructor() { }
}
