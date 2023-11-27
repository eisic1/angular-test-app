import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent {
  inputText: string = '';

  onSubmit(inputEl: HTMLInputElement){
    this.inputText = inputEl.value;
  }
}
