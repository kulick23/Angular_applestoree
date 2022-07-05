import {Component, Inject, OnInit} from '@angular/core';
import {AppleService} from "../services/apple.service";
import {flyIn} from "../animations/app.animation";
import {Apple} from "../shared/apple";

@Component({
  selector: 'app-iphon',
  templateUrl: './iphon.component.html',
  styleUrls: ['./iphon.component.scss'],
  host: {
    '[@flyIn]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyIn()
  ]
})
export class IphonComponent implements OnInit {

  public iphon!: Apple[];
  public selectedApple!: Apple;

  constructor(@Inject('BaseURL') public BaseURL: string,
              private appleService: AppleService) {
  }

  ngOnInit(): void {
    this.appleService.getIphon()
      .subscribe(iphon => this.iphon = iphon);
  }

  public onSelect(iphon: Apple): void {
    this.selectedApple = iphon;
  }
}
