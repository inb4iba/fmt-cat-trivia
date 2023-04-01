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
  private baseUrl = "https://cataas.com";
  text = "";
  imageUrl = "";

  constructor(private catFactsService: CatFactsService) {}

  ngOnInit() {
    this.catFactsService.getFacts().subscribe((data: Array<Fact>) => {
      facts = data;
      const i = Math.floor(Math.random() * facts.length);
      this.text = data[i].text;
    });
    this.imageClicked();
  }

  imageClicked() {
    this.imageUrl = `${this.baseUrl}/cat`;
  }

  gifClicked() {
    this.imageUrl = `${this.baseUrl}/cat/gif`;
  }
}
