import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export type Fact = {
  status: {
    verified: boolean;
    sentCount: number;
  };
  _id: string;
  user: string;
  text: string;
  __v: number;
  source: string;
  updatedAt: string;
  type: string;
  createdAt: string;
  deleted: boolean;
  used: boolean;
};

@Injectable({
  providedIn: "root",
})
export class CatFactsService {
  private baseUrl = "https://cat-fact.herokuapp.com";

  constructor(private http: HttpClient) {}

  getFacts() {
    return this.http.get<Array<Fact>>(`${this.baseUrl}/facts`, {
      responseType: "json",
    });
  }
}
