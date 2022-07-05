import {Component, Inject, OnInit} from '@angular/core';
import {AppleService} from "../services/apple.service";
import {flyIn} from "../animations/app.animation";
import {Apple} from "../shared/apple";

@Component({
  selector: 'app-ipad',
  templateUrl: './ipad.component.html',
  styleUrls: ['./ipad.component.scss'],
  host: {
    '[@flyIn]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyIn()
  ]
})
export class IpadComponent implements OnInit {

  public ipad!: Apple[];
  public selectedApple!: Apple;

  constructor(@Inject('BaseURL') public BaseURL: string,
              private appleService: AppleService) {
  }

  ngOnInit(): void {
    this.appleService.getIpad()
      .subscribe(ipad => this.ipad = ipad);
  }

  public onSelect(ipad: Apple): void {
    this.selectedApple = ipad;
  }
}
