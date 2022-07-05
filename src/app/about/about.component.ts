import {Component, Inject, OnInit} from '@angular/core';
import {expand} from "../animations/app.animation";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@expand]': 'true',
    'style': 'display: block;'
  },
  animations: [
    expand()
  ]
})
export class AboutComponent implements OnInit {

  constructor(@Inject('BaseURL') public BaseURL: string) {
  }

  ngOnInit(): void {
  }
}
