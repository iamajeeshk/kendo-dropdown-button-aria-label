import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <kendo-dropdownbutton aria-label="dropdown aria label" [data]="data" [popupSettings]="{popupClass: popupClass, animate: true}">
            User Settings
        </kendo-dropdownbutton>`,
})
export class AppComponent {
  public popupClass = 'font-arial';

  public data = [
    {
      text: 'My Profile',
    },
    {
      text: 'Friend Requests',
    },
    {
      text: 'Account Settings',
    },
    {
      text: 'Support',
    },
    {
      text: 'Log Out',
    },
  ];
}
