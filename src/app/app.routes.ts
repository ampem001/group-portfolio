import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortComponent } from './pages/port/port.component';
import { PAGE_ALIAS } from './shared/constants/constants';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            pageAlias: PAGE_ALIAS.HOME
        }
        // resolve: {
        //     dvicAccount: dvicEligibilityResolver
        // }
    },
    {
        path: ':folio',
        component: PortComponent
    }
];
