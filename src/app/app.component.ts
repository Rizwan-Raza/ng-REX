import { Component } from "@angular/core";

@Component({
  selector: "rex-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isInverted: boolean = false;

  title = "R.E.X.";

  onInvert(invert: boolean) {
    this.isInverted = invert;
  }
}
