
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fact:string;

  constructor(private http:Http) { }

  ngOnInit() {
    this.another();
  }

  another(){
    this.fact = 'loading...';
    var day = new Date().getDate() ;
    var month = new Date().getMonth() + 1;

    var url = "http://numbersapi.com/" + month+ "/" +day+ "/date"

    this.http.get(url)
          .subscribe((data)=>{
            this.fact = data["_body"];
        }, (err)=>{
          this.fact = "An error occured, please try again later";
        });
  }
}
