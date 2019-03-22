import {Routes} from '@angular/router';
import {ContactListComponent} from '../contact/contact-list/contact-list.component';
import {ContactDetailsComponent} from '../contact/contact-details/contact-details.component';

export const RouteConfig: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contacts'
  },
  {
    path: 'contacts',
    component: ContactListComponent,
    data: {
      pathName: 'route.contacts',
    }
  },
  {
    path: 'contacts/new',
    component: ContactDetailsComponent,
    data: {
      pathName: 'route.contacts.create',
      parentPathName: 'contacts'
    }
  },
  {
    path: 'contacts/:id',
    component: ContactDetailsComponent,
    data: {
      pathName: 'route.contacts.edit',
      parentPathName: 'contacts'
    }
  }
];
