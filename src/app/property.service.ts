import { Injectable } from "@angular/core";
import {} from "@angular/fire";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { Property } from "./property";

@Injectable({
  providedIn: "root"
})
export class PropertyService {
  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  addProp(property: Property) {
    let images = [];
    let id = this.afs.createId();
    for (let image of property.images) {
      images.push("props/" + id + "/" + image.file.name);
      this.storage.upload("props/" + id + "/" + image.file.name, image.file);
    }
    property.images = images;
    property.id = id;
    this.afs
      .collection<Property>("properties")
      .doc(id)
      .set(property);
    return true;
  }

  getAllProp() {
    return this.afs.collection<Property>("properties").valueChanges();
    // this.afs
    //   .collection<Property>("properties")
    //   .valueChanges()
    //   .subscribe(properties => {
    //     let props = [];
    //     for (let j in properties) {
    //       let images = [];
    //       for (let i in properties[j].images) {
    //         images[i] = this.storage
    //           .ref(properties[j].images[i])
    //           .getDownloadURL();
    //       }
    //       forkJoin(images).subscribe(resp => {
    //         properties[j].images = resp;
    //         props[j] = of(properties[j]);
    //       });
    //     }
    //     forkJoin(props).subscribe(sendToParent);
    //   });
  }

  getURL(path: string) {
    // console.log(path);
    this.storage
      .ref(path)
      .getDownloadURL()
      .subscribe(console.log);
  }
}
