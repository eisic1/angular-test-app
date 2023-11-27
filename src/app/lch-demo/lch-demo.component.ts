import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lch-demo',
  templateUrl: './lch-demo.component.html',
  styleUrls: ['./lch-demo.component.css']
})
export class LchDemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {
  @Input() value: string = 'procademy';

  constructor(){
    console.log('Constructo called!');
    //console.log(this.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges called!');
    console.log(changes);
  }

  ngOnInit(){
    console.log('OnInit called!');
    //console.log(this.value);
  }

  ngDoCheck(){
    console.log('DoCheck called!');
  }

  ngAfterContentInit(){
    console.log('AfterContentInit called!');
  }

  ngAfterContentChecked(){
    console.log('AfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit called!');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('OnDestroy called!');
  }
}
