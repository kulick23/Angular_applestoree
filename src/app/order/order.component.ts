import {Component, OnInit} from '@angular/core';
import {AppleService} from "../services/apple.service";
import {Apple} from "../shared/apple";
import {LoginComponent} from "../login/login.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {HttpService} from "../services/http.service";
import {Order} from "../shared/order";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public displayedColumns: string[] = ['Apple devices', 'price', 'count', 'sum', 'delete'];
  public totalSum!: string;
  private order: Order = new Order();

  constructor(public appleService: AppleService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<OrderComponent>,
              private router: Router,
              private http: HttpService) {
  }

  ngOnInit(): void {
    this.calculateTotalOrderSum();
  }

  public displayedAppleList(): Apple[] {
    return [...new Map(this.appleService.orderedIphon.map(x=>[x.name,x])).values()]
      .sort((a, b) => (
        a.name.localeCompare(b.name))
      );
  }

  public calculateAppleSum(chosenApple: Apple): string {
    return (this.countApples(chosenApple) * Number(chosenApple.price))
      .toFixed(2);
  }

  public calculateTotalOrderSum(): void {
    this.totalSum = this.appleService.orderedIphon
      .map((apple => (Number(apple.price))))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  }

  public removeFromOrder(deletedApple: Apple): void {
    this.appleService.orderedApples = this.appleService.orderedApples.filter(apple => apple !== deletedApple);
    this.calculateTotalOrderSum();
  }

  public countApples(chosenApple: Apple): number {
    return this.appleService.orderedApples.filter(apple => apple.id == chosenApple.id).length;
  }

  public addApple(chosenApple: Apple): void {
    this.appleService.orderedApples.push(chosenApple);
    this.calculateTotalOrderSum();
  }

  public removeApple(chosenApple: Apple): void {
    const numberOfApples: number = this.appleService.orderedApples.filter(apple => apple == chosenApple).length;
    this.appleService.orderedApples = this.appleService.orderedApples.filter(apple => apple !== chosenApple);
    for (let i = 0; i < numberOfApples - 1; i++) {
      this.appleService.orderedApples.push(chosenApple);
    }
    this.calculateTotalOrderSum();
  }

  public openLoginForm(): void {
    this.dialog.open(LoginComponent, {
        width: '500px',
        height: '300px'
      }
    );
  }

  public onSubmit(): void {
    this.dialogRef.close();
    this.order.apples = this.appleService.orderedApples;
    this.order.username = this.appleService.user.username;
    this.order.totalSum = this.totalSum;
    this.http.save(this.order, this.appleService.ordersLink);
    this.router.navigate(['/order']);
    this.appleService.orderedApples = [];
  }
}
