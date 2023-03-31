import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CataasService {
  private baseUrl = "https://cataas.com";

  constructor(private http: HttpClient) {}

  getImage() {
    return this.http.get(`${this.baseUrl}/cat`, { responseType: "blob" });
  }

  getGIF() {
    return this.http.get(`${this.baseUrl}/cat/gif`, { responseType: "blob" });
  }
}
