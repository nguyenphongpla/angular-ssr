import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('init', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('init=>final', animate('5000ms')),
      transition('final=>init', animate('5000ms'))
    ]),
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentState = 'init';
  changeState() {
    this.currentState = this.currentState === 'init' ? 'final' : 'init';
  }

  listItem = [];
  list_order: number = 1;
  addItem() {
    var listitem = "ListItem " + this.list_order;
    this.list_order++;
    this.listItem.push(listitem);
  }
  removeItem() {
    this.listItem.length -= 1;
  }

}
