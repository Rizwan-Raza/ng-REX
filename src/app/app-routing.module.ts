import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BuyPropertyComponent } from "./buy-property/buy-property.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";
import { IsLoginGuard } from "./is-login.guard";
import { IsntLoginGuard } from "./isnt-login.guard";
import { ProfileComponent } from "./profile/profile.component";
import { SellPropertyComponent } from "./sell-property/sell-property.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [IsLoginGuard],
    children: [
      { path: "", redirectTo: "/buy", pathMatch: "full" },
      { path: "buy", component: BuyPropertyComponent },
      { path: "sell", component: SellPropertyComponent },
      { path: "my", component: GalleryComponent },
      { path: "profile", component: ProfileComponent }
    ]
  },
  { path: "home", component: HomeComponent, canActivate: [IsntLoginGuard] },
  { path: "about", component: AboutComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
