import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData = 'hello';
  imgFolder = 'http://media.mw.metropolia.fi/wbma/uploads/';
  imgUrl = '';

  constructor(private http: HttpClient) { }

  getJson() {
    this.http.get('assets/package.json').subscribe(( res ) => {
      console.log(res);
      this.someData = res['name'];
    });
  }

  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe(res => {
      this.imgUrl = this.imgFolder + res[0].filename;
      console.log(this.imgUrl);
    });
  }

  ngOnInit() {
    this.getJson();
    this.getMedia();
  }
}
