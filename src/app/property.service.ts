import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Property } from "./property";

@Injectable({
  providedIn: "root"
})
export class PropertyService {
  constructor(private afs: AngularFirestore) {}

  addProp(property: Property) {
    this.afs.collection<Property>("properties").add(property);
  }

  getAllProp() {
    return this.afs.collection<Property>("properties").valueChanges();
  }
}
