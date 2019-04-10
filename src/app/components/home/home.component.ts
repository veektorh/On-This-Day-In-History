
import { Component, OnInit } from "@angular/core";
import {  HttpClient } from "@angular/common/http";
import { ApiResponse } from "./ApiResponse";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  
  fact: string;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.another();
  }

  another() {
    this.fact = "loading...";
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;

    var url = "http://numbersapi.com/" + month + "/" + day + "/date";
    var url2 = "https://localhost:5001/api/values";
    var url3 = "https://onthisdayinhistoryapi.herokuapp.com/api/values"


      this.httpClient.get(url3)
        .subscribe((res: ApiResponse) => {

          if (res.status) {
            this.fact = res.data;
          } else {
            this.fact = "An error occured";
          }

      },
      (error)=>{
        this.fact = "An error occured";
      });

    

  }
}
