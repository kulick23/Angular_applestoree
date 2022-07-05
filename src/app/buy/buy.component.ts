import {Component, Inject, OnInit} from '@angular/core';
import {Chosenapple} from "../shared/chosenapple";
import {AppleService} from "../services/apple.service";
import {flyIn} from "../animations/app.animation";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
  host: {
    '[@flyIn]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyIn()
  ]
})
export class BuyComponent implements OnInit {

  public apples!: Chosenapple[];
  public selectedChosenapple!: Chosenapple;


  constructor(@Inject('BaseURL') public BaseURL: string,
              private appleService: AppleService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.appleService.getApples()
      .subscribe(apples => this.apples = apples);
  }

  public onSelect(apples: Chosenapple): void {
    this.selectedChosenapple = apples;
  }

  public navigateToProduct(apple: Chosenapple): void {
    this.router.navigate(['/' + apple.name]);
  }
}
