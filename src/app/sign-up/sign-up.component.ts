import {Component, OnInit} from '@angular/core';
import {AppleService} from "../services/apple.service";
import {MatDialogRef} from "@angular/material/dialog";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public appleService: AppleService,
              private dialogRef: MatDialogRef<SignUpComponent>,
              private http: HttpService) {
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.appleService.checkUsername().subscribe(user => {
      const data: any = user;
      if (data.length != 0) {
        this.appleService.openMessagePopup("Логин занят!");
      } else {
        if (this.appleService.user.remember) {
          this.http.save(this.appleService.user, this.appleService.usersLink);
        }
        this.dialogRef.close();
        this.appleService.isUserSubmitted = true;
      }
    });
  }
}
