import { Component, ChangeDetectorRef, AfterViewInit, Input, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: '[box]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <svg:rect #rect
      [attr.dataId]="box.id"
      [attr.x]="box.x"
      [attr.y]="box.y"
      width="20"
      height="20"
      stroke="black"
      [attr.fill]="selected ? 'red' : 'transparent'"
      strokeWidth="1"></svg:rect>
  `
})
export class BoxComponent implements AfterViewInit {
    @Input() box;
    @Input() selected;
    @ViewChild('rect')
    set rect(value: ElementRef) {
      if (value) {
        value.nativeElement['BoxComponent'] = this;
      }
    }

    constructor(
        private _cdr: ChangeDetectorRef
    ){

    }

    ngAfterViewInit(){
        this._cdr.detach();
    }

    update() {
        this._cdr.detectChanges();
      }
}