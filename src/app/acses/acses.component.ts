import {Component, Inject, OnInit} from '@angular/core';
import {AppleService} from "../services/apple.service";
import {flyIn} from "../animations/app.animation";
import {Apple} from "../shared/apple";

@Component({
  selector: 'app-acses',
  templateUrl: './acses.component.html',
  styleUrls: ['./acses.component.scss'],
  host: {
    '[@flyIn]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyIn()
  ]
})
export class AcsesComponent implements OnInit {

  public acses!: Apple[];
  public selectedApple!: Apple;

  constructor(@Inject('BaseURL') public BaseURL: string,
              private appleService: AppleService) {
  }

  ngOnInit(): void {
    this.appleService.getAcses()
      .subscribe(acses => this.acses = acses);
  }

  public onSelect(acses: Apple): void {
    this.selectedApple = acses;
  }
}
