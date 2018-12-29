import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Property } from "../property";
import { PropertyService } from "../property.service";

@Component({
  selector: "rex-sell-property",
  templateUrl: "./sell-property.component.html",
  styleUrls: ["./sell-property.component.scss"]
})
export class SellPropertyComponent {
  propertyToSell: Property;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private property: PropertyService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      prop_name: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      prop_address: ["", Validators.required]
    });
  }

  onSubmit() {
    this.propertyToSell = {
      propName: this.firstFormGroup.value.prop_name,
      propAddress: this.secondFormGroup.value.prop_address
    };
    this.property.addProp(this.propertyToSell);
  }
}
