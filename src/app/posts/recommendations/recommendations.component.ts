import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'soul-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsComponent {
  constructor() {}
}
