import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-danger" [hidden]="displayNotification">
              <p>This website uses cookies to provide better user experience.</p>
            </div>`,
  //styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  displayNotification: boolean = false;
}
