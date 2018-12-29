import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { UserService } from "../user.service";

@Component({
  selector: "rex-signin-dialog",
  templateUrl: "./signin-dialog.component.html",
  styleUrls: ["./signin-dialog.component.scss"]
})
export class SigninDialogComponent implements OnInit {
  ngOnInit() {}

  constructor(
    public dialogRef: MatDialogRef<SigninDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private user: UserService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  socialSignIn(selector: number): void {
    this.user.socialSignIn(selector).then(this.login);
  }

  login = data => {
    localStorage.setItem("isLogin", "true");
    localStorage.setItem(
      "user",
      JSON.stringify({
        displayName: data.user.displayName,
        email: data.user.email,
        phoneNumber: data.user.phoneNumber,
        photoURL: data.user.photoURL
      })
    );
    console.log(data.user);
    this.dialogRef.close({ data: false });
  };
}
