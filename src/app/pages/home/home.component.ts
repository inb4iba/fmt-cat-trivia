import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import {
  CatFactsService,
  Fact,
} from "src/app/shared/services/cat-facts.service";
import { CataasService } from "src/app/shared/services/cataas.service";

let facts: Array<Fact>;

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  text = "";
  imageUrl: SafeUrl = "";

  constructor(
    private catFactsService: CatFactsService,
    private cataasService: CataasService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.catFactsService.getFacts().subscribe((data: Array<Fact>) => {
      facts = data;
      const i = Math.floor(Math.random() * facts.length);
      this.text = data[i].text;
    });
    this.imageClicked();
  }

  imageClicked() {
    this.cataasService.getImage().subscribe((data: Blob) => {
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(data)
      );
    });
  }

  gifClicked() {
    this.cataasService.getGIF().subscribe((data: Blob) => {
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(data)
      );
    });
  }
}
