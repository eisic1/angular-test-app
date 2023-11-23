import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-child-container',
  templateUrl: './child-container.component.html',
  styleUrls: ['./child-container.component.css']
})
export class ChildContainerComponent {
  @ViewChild('dobInput') dateOfBirth!: ElementRef;
  @ViewChild('ageInput') age!: ElementRef;
  @ViewChild(DemoComponent, { static: true }) demoComp!: DemoComponent;

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    this.age.nativeElement.value = currentYear - birthYear;
    //console.log(this.dateOfBirth);
    //console.log(this.age);
  }
}
