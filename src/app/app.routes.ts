import { Routes } from '@angular/router';
import { FaceSnap } from './face-snap/face-snap';

export const routes: Routes = [
    {
        path: 'facesnap',
        component: FaceSnap
    },
    {
        path: '',
        component: FaceSnap,
        pathMatch: 'full'
    }
];
