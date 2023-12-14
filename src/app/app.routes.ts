import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortComponent } from './pages/port/port.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        // resolve: {
        //     dvicAccount: dvicEligibilityResolver
        // }
    },
    {
        path: ':folio',
        component: PortComponent
    }
];
