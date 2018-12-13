import { Component } from '@angular/core';

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
  title = 'Alert message';
  amessage= 'Hi Iam an alert message';
  adisclaimer: 'Please read it carefully';
}
