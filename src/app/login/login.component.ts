import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HttpService} from "../services/http.service";
import {AppleService} from "../services/apple.service";
import {SignUpComponent} from "../sign-up/sign-up.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public appleService: AppleService,
              private dialogRef: MatDialogRef<LoginComponent>,
              private httpService: HttpService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.appleService.getUser().subscribe(user => {
      const data: any = user;
      if (data.length != 0) {
        this.appleService.user = data[0];
        this.appleService.isUserSubmitted = true;
        this.dialogRef.close();
      } else {
        this.appleService.openMessagePopup("Неверная комбинация логин/пароль");
      }
    });
  }

  public openSignUpForm(): void {
    this.dialogRef.close();
    this.dialog.open(SignUpComponent, {
        width: '700px',
        height: '500px'
      }
    );
  }
}
