import { Component, OnInit } from "@angular/core";

@Component({
  selector: "rex-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  user;
  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
}
