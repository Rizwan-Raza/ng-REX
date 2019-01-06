import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Property } from "../property";
import { PropertyService } from "../property.service";

@Component({
  selector: "rex-buy-property",
  templateUrl: "./buy-property.component.html",
  styleUrls: ["./buy-property.component.scss"]
})
export class BuyPropertyComponent implements OnInit {
  processing: boolean = true;
  // props: Property[];
  props: Observable<Property[]> = this.property.getAllProp();
  /** Based on the screen size, switch from standard to one column per row */
  cols = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return 1;
      }
      return 2;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private property: PropertyService
  ) {}

  ngOnInit() {
    // this.property.getAllProp(props => {
    //   this.props = props;
    //   this.processing = false;
    // });
    this.props.subscribe(() => (this.processing = false));
  }
}
