import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-material-admin-demo';
  navigationList = [
    {
      text: 'Dashboard',
      routerLink: '/',
    },
    {
      text: 'Table',
      routerLink: '/table',
    },
    {
      text: 'Dashboard Flex',
      routerLink: '/dashboard-flex',
    },
    {
      text: 'Form',
      routerLink: '/form',
    },
  ];
}
