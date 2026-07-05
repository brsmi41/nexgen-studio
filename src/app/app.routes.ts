import { Routes } from '@angular/router';
import { Home} from './pages/home/home'
import { Work} from './pages/work/work'

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'work', component: Work },
];
