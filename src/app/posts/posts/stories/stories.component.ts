import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'soul-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesComponent {
  stories = [
    {
      profile: 'mock-small-profile-10.png',
      content: null,
    },
    {
      profile: 'mock-small-profile-1.png',
      content: 'story-1.png',
    },
    {
      profile: 'mock-small-profile-2.png',
      content: 'story-2.png',
    },
    {
      profile: 'mock-small-profile-3.png',
      content: 'story-3.png',
    },
    {
      profile: 'mock-small-profile-4.png',
      content: 'story-4.png',
    },
    {
      profile: 'mock-small-profile-5.png',
      content: 'story-5.png',
    },
    {
      profile: 'mock-small-profile-6.png',
      content: 'story-6.png',
    },
    {
      profile: 'mock-small-profile-7.png',
      content: 'story-7.png',
    },
    {
      profile: 'mock-small-profile-8.png',
      content: 'story-8.png',
    },
    {
      profile: 'mock-small-profile-9.png',
      content: 'story-9.png',
    },
  ];
}
