import { Component, OnInit, ChangeDetectorRef, AfterViewInit  } from '@angular/core';
import { BoxComponent } from './box.component';


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'app-fast-onchange',
  styleUrls: ['./fast-onchange.component.scss'],
  templateUrl: './fast-onchange.component.html'
})

export class FastOnchangeComponent implements OnInit, AfterViewInit {

  constructor(
    private _cdr : ChangeDetectorRef
  ) { }

  currentBoxComponent: BoxComponent = null;
  currentId = null;
  boxes = [];
  offsetX;
  offsetY;

  ngOnInit() {
    for (let i = 0; i < 10000; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box = {
        id,
        x,
        y
      };
      this.boxes.push(box);
    }
  }

  ngAfterViewInit(){
    this._cdr.detach();
  }

  mouseDown(event) {
    const boxComponent = event.target['BoxComponent'];
    if (boxComponent) {
      const box = boxComponent.box;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      this.offsetX = box.x - mouseX;
      this.offsetY = box.y - mouseY;
      
      this.currentBoxComponent = boxComponent;
      
      boxComponent.selected = true;
      boxComponent.update();
    }
  }

  mouseMove(event) {
    event.preventDefault();
    if (this.currentBoxComponent !== null) {
      this.updateBox(this.currentBoxComponent, event.clientX + this.offsetX, event.clientY + this.offsetY);
    }
  }

  mouseUp($event) {
    if (this.currentBoxComponent) {
      this.currentBoxComponent.selected = false;
      this.currentBoxComponent.update();
    }
    this.currentBoxComponent = null;
  }

  updateBox(boxComponent, x, y) {
    boxComponent.box.x = x;
    boxComponent.box.y = y;
    boxComponent.update();
  }

}
