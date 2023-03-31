import { Component, OnInit } from "@angular/core";
import {
  CatFactsService,
  Fact,
} from "src/app/shared/services/cat-facts.service";

let facts: Array<Fact>;

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private catFactsService: CatFactsService) {}

  ngOnInit() {
    this.catFactsService.loadFacts().subscribe((data: Array<Fact>) => {
      facts = data;
    });
  }

  image() {
    console.log("image");
  }

  gif() {
    console.log("gif");
  }
}
