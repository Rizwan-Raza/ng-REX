import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { Property } from "../property";
import { PropertyService } from "../property.service";

export interface Selector {
  value: string;
  viewValue: string;
}

@Component({
  selector: "rex-sell-property",
  templateUrl: "./sell-property.component.html",
  styleUrls: ["./sell-property.component.scss"]
})
export class SellPropertyComponent {
  propertyToSell: Property;
  basicInfoGroup: FormGroup;
  locationGroup: FormGroup;
  featuresGroup: FormGroup;
  priceAndAreaGroup: FormGroup;
  amenitiesGroup: FormGroup;
  keyDistancesGroup: FormGroup;
  snapshotGroup: FormGroup;

  prop_types: Selector[] = [
    { value: "res-0", viewValue: "Residential" },
    { value: "com-1", viewValue: "Commercial" },
    { value: "ind-2", viewValue: "Industrial" }
  ];
  tran_types: Selector[] = [
    { value: "new-0", viewValue: "New" },
    { value: "res-1", viewValue: "Resale" },
    { value: "unc-2", viewValue: "Under Construction" }
  ];
  amenities: Selector[] = [
    { viewValue: "Internet / Wi-Fi", value: "net" },
    { viewValue: "Air Conditioned", value: "air" },
    { viewValue: "RO Water System", value: "ro" },
    { viewValue: "Gas Supply", value: "gas" },
    { viewValue: "Water Supply", value: "water" }
  ];
  images = [];
  processing = false;

  constructor(
    private _formBuilder: FormBuilder,
    private property: PropertyService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.basicInfoGroup = this._formBuilder.group({
      prop_type: ["", Validators.required],
      tran_type: ["", Validators.required],
      title: [
        "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
      ]
    });
    this.locationGroup = this._formBuilder.group({
      street: ["", Validators.required],
      town: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required]
    });
    this.featuresGroup = this._formBuilder.group({
      bhk: ["", Validators.required],
      bathrooms: ["", Validators.required],
      age: ["", Validators.required],
      furnished: [""]
    });
    this.priceAndAreaGroup = this._formBuilder.group({
      c_area: ["", Validators.required],
      l_area: ["", Validators.required],
      price: ["", Validators.required],
      dPrice: [""],
      available: [""]
    });
    this.amenitiesGroup = this._formBuilder.group({
      inHouse: [""]
    });
    this.keyDistancesGroup = this._formBuilder.group({
      hospital: ["", Validators.required],
      school: ["", Validators.required],
      railway: ["", Validators.required]
    });
    this.snapshotGroup = this._formBuilder.group({
      units: ["", Validators.required],
      floor: [""],
      tFloors: ["", Validators.required],
      desc: [""],
      tnc: [""],
      images: [""]
    });
  }

  onSubmit() {
    this.processing = true;
    this.propertyToSell = {
      propType: this.basicInfoGroup.value.prop_type,
      tranType: this.basicInfoGroup.value.tran_type,
      title: this.basicInfoGroup.value.title,
      street: this.locationGroup.value.street,
      town: this.locationGroup.value.town,
      city: this.locationGroup.value.city,
      state: this.locationGroup.value.state,
      bhk: this.featuresGroup.value.bhk,
      bathrooms: this.featuresGroup.value.bathrooms,
      age: this.featuresGroup.value.age,
      furnished: this.featuresGroup.value.furnished
        ? this.featuresGroup.value.furnished
        : false,
      cArea: this.priceAndAreaGroup.value.c_area,
      lArea: this.priceAndAreaGroup.value.l_area,
      price: this.priceAndAreaGroup.value.price,
      dPrice: this.priceAndAreaGroup.value.dPrice
        ? this.priceAndAreaGroup.value.dPrice
        : false,
      available: this.priceAndAreaGroup.value.available
        ? this.priceAndAreaGroup.value.available
        : false,
      inHouse: this.amenitiesGroup.value.inHouse,
      hospital: this.keyDistancesGroup.value.hospital,
      school: this.keyDistancesGroup.value.school,
      railway: this.keyDistancesGroup.value.railway,
      units: this.snapshotGroup.value.units,
      floor:
        this.snapshotGroup.value.floor.length != 0
          ? this.snapshotGroup.value.floor
          : null,
      tFloors: this.snapshotGroup.value.tFloors,
      desc: this.snapshotGroup.value.desc,
      tnc: this.snapshotGroup.value.tnc,
      images: this.images,
      seller: JSON.parse(localStorage.getItem("user")),
      created: Date.now(),
      createdDate: new Date(),
      id: null
    };
    if (this.property.addProp(this.propertyToSell)) {
      this.processing = false;
    }
  }

  appendImage(event) {
    for (const element of event) {
      this.images.push({
        src: this.sanitizer.bypassSecurityTrustResourceUrl(
          URL.createObjectURL(element)
        ),
        file: element
      });
    }
  }

  removeImage(i) {
    this.images.splice(i, 1);
  }
}
