import {Component, Inject, OnInit} from '@angular/core';
import {Chosenapple} from "../shared/chosenapple";
import {AppleService} from "../services/apple.service";
import {flyIn} from "../animations/app.animation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyIn]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyIn()
  ]
})
export class HomeComponent implements OnInit {

  public firstPromotion!: Chosenapple;
  public secondPromotion!: Chosenapple;
  private apples!: Chosenapple[];
  private featuredApples!: Chosenapple[];

  constructor(@Inject('BaseURL') public BaseURL: string,
              private appleService: AppleService) {
  }

  ngOnInit() {
    this.setPromotionApples();
  }

  private setPromotionApples() {
    this.appleService.getApples()
      .subscribe(apples => {
        this.apples = apples;
        this.setFeaturedApples();
      });
  }

  private setFeaturedApples() {
    this.appleService.getFeaturedApples()
      .subscribe(featuredApples => {
        this.featuredApples = featuredApples;
        this.displayFeaturedApples();
      });
  }

  private displayFeaturedApples() {
    if (this.featuredApples.length >= 2) {
      this.firstPromotion = this.featuredApples[0];
      this.secondPromotion = this.featuredApples[1];
    } else if (this.featuredApples.length == 1) {
      this.firstPromotion = this.featuredApples[0];
      this.secondPromotion = this.apples[0];
    } else {
      this.firstPromotion = this.apples[0];
      this.secondPromotion = this.apples[1];
    }
  }
}
