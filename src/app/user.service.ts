import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private afAuth: AngularFireAuth) {}

  socialSignIn(socialSelector: number) {
    switch (socialSelector) {
      case 1:
      default:
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
      case 2:
        return this.afAuth.auth.signInWithPopup(
          new auth.FacebookAuthProvider()
        );
      case 3:
        return this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
  }

  logout() {
    localStorage.setItem("isLogin", "false");
    localStorage.removeItem("user");
    return this.afAuth.auth.signOut();
  }
}
