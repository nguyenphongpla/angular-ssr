
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imagesList = [];
  constructor(
    private title: Title,
    private meta: Meta
  ) {
    for (let i = 0; i < 50; i++) {
      const url = 'https://loremflickr.com/640/480?random=' + (i + 1);
      this.imagesList[i] = {
        url: url,
        show: false
      };
    }
  }

  ngOnInit() {
    this.title.setTitle('Home / Angular SSR');
    this.meta.updateTag({
      'description': 'Welcome to home section'
    });
  }
}