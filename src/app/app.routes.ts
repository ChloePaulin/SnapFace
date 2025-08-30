import { Routes } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap';

export const routes: Routes = [
    {
        path: 'facesnap',
        component: FaceSnapComponent
    },
    {
        path: '',
        component: FaceSnapComponent,
        pathMatch: 'full'
    }
];
