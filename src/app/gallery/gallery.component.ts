import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "rex-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: "Property 1", cols: 1, rows: 1 },
          { title: "Property 2", cols: 1, rows: 1 },
          { title: "Property 3", cols: 1, rows: 1 },
          { title: "Property 4", cols: 1, rows: 1 }
        ];
      }

      return [
        { title: "Property 1", cols: 2, rows: 1 },
        { title: "Property 2", cols: 1, rows: 1 },
        { title: "Property 3", cols: 1, rows: 2 },
        { title: "Property 4", cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
