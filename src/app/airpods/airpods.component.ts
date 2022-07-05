import {Component, Inject, OnInit} from '@angular/core';
import {AppleService} from "../services/apple.service";
import {flyIn} from "../animations/app.animation";
import {Apple} from "../shared/apple";

@Component({
  selector: 'app-airpods',
  templateUrl: './airpods.component.html',
  styleUrls: ['./airpods.component.scss'],
  host: {
    '[@flyIn]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyIn()
  ]
})
export class AirpodsComponent implements OnInit {

  public airpods!: Apple[];
  public selectedApple!: Apple;

  constructor(@Inject('BaseURL') public BaseURL: string,
              private appleService: AppleService) {
  }

  ngOnInit(): void {
    this.appleService.getAirpods()
      .subscribe(airpods => this.airpods = airpods);
  }

  public onSelect(airpods: Apple): void {
    this.selectedApple = airpods;
  }
}
