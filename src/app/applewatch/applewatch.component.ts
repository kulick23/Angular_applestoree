import {Component, Inject, OnInit} from '@angular/core';
import {AppleService} from "../services/apple.service";
import {flyIn} from "../animations/app.animation";
import {Apple} from "../shared/apple";

@Component({
  selector: 'app-applewatch',
  templateUrl: './applewatch.component.html',
  styleUrls: ['./applewatch.component.scss'],
  host: {
    '[@flyIn]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyIn()
  ]
})
export class ApplewatchComponent implements OnInit {

  public applewatch!: Apple[];
  public selectedApple!: Apple;

  constructor(@Inject('BaseURL') public BaseURL: string,
              private appleService: AppleService) {
  }

  ngOnInit(): void {
    this.appleService.getApplewatch()
      .subscribe(applewatch => this.applewatch = applewatch);
  }

  public onSelect(applewatch: Apple): void {
    this.selectedApple = applewatch;
  }
}
