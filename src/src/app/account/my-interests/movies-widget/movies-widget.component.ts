import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'soul-movies-widget',
  templateUrl: './movies-widget.component.html',
  styleUrls: ['./movies-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
