import { Component, OnInit } from "@angular/core";

@Component({
  selector: "rex-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isLogin: boolean = false;
  constructor() {}

  ngOnInit() {
    this.isLogin = eval(localStorage.getItem("isLogin"));
  }
}
