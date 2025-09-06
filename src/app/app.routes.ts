import { Routes } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap';
import { FaceSnapList } from './face-snap-list/face-snap-list';

export const routes: Routes = [
    {
        path: '',
        component: FaceSnapList
    }
];
