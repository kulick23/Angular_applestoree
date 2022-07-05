import {Component, Inject, OnInit} from '@angular/core';
import {Apple} from "../shared/apple";
import {AppleService} from "../services/apple.service";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../services/http.service";
import {visibility} from "../animations/app.animation";

@Component({
  selector: 'app-apple-detail',
  templateUrl: './apple-detail.component.html',
  styleUrls: ['./apple-detail.component.scss'],
  animations: [
    visibility()
  ],
})
export class AppleDetailComponent implements OnInit {
  public apple!: Apple ;
  public applesIds!: string[];
  public previousAppleId!: string;
  public nextAppleId!: string;
  public visibility = 'shown';


  constructor(@Inject('BaseURL') public BaseURL: string,
              private appleService: AppleService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private httpService: HttpService) {

  }

  ngOnInit(): void {
    this.getAppleDetails();
  }



  public addToOrder(): void {
    this.openOrderPopup();
    this.appleService.orderedApples.push(this.apple);
  }

  public openOrderPopup(): void {
    this.appleService.openMessagePopup("Продукт apple добавлена в корзину!");
  }



  private getAppleDetails(): void {
    this.appleService.getApplesIds()
      .subscribe((applesIds) => this.applesIds = applesIds);
    this.route.params.pipe(switchMap((params: Params) => {
      this.visibility = 'hidden';
      return this.appleService.getApple(params['name']);
    }))
      .subscribe(apple => {
        this.visibility = 'shown';
        this.apple = apple;
        this.setPreviousAndNextApple(apple.id);
      });
  }

  private setPreviousAndNextApple(appleId: string): void {
    const index: number = this.applesIds?.indexOf(appleId);
    this.previousAppleId = this.applesIds[(this.applesIds.length + index - 1) % this.applesIds.length];
    this.nextAppleId = this.applesIds[(this.applesIds.length + index + 1) % this.applesIds.length];

  }


}
