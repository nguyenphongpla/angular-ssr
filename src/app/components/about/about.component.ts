import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [

  ]
})
export class AboutComponent implements OnInit, AfterViewInit {
  public users: any = [];
  @ViewChild('temp', {read: ElementRef}) temp: ElementRef;
  // @ViewChildren('temp', { read: ElementRef }) temps: QueryList<any>;

  constructor(
    private title: Title,
    private meta: Meta,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.title.setTitle('About / Angular SSR');
    this.meta.updateTag({
      'description': 'Welcome to about section'
    });

    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((users) => {
        this.users = users;
      }, (err) => {
        console.log(err);
      });
  }

  ngAfterViewInit() {
    console.log(this.temp, 'temp');
    // this.temps.forEach(div => console.log(div));
  }
}