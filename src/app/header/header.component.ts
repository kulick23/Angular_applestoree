import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AppleService} from "../services/apple.service";
import {OrderComponent} from "../order/order.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject('BaseURL') public BaseURL: string,
              public appleService: AppleService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public openOrderForm() {
    this.dialog.open(OrderComponent, {
        width: '700px',
        height: 'auto'
      }
    );
  }
}
