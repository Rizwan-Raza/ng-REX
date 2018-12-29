import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SigninDialogComponent } from "../signin-dialog/signin-dialog.component";
import { UserService } from "../user.service";

@Component({
  selector: "rex-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent {
  @Input() title: string;
  @Output() inverted = new EventEmitter<boolean>();
  didInvert: boolean = false;
  userData: any;
  isLogin: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private user: UserService
  ) {
    this.isLogin = eval(localStorage.getItem("isLogin"));
    this.userData = JSON.parse(localStorage.getItem("user"));
  }

  invertColors(elem): void {
    this.didInvert = !this.didInvert;
    if (this.didInvert) {
      elem._elementRef.nativeElement.innerText += "_off";
    } else {
      elem._elementRef.nativeElement.innerText = "invert_colors";
    }
    this.inverted.emit(this.didInvert);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SigninDialogComponent, {
      width: "320px",
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isLogin = result.data;
    });
  }

  logout() {
    this.user.logout();
    this.isLogin = false;
  }
}
