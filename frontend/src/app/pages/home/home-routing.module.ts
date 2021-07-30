import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo:'index', pathMatch:'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'index',
        loadChildren: () => import('./../index/index.module').then(m => m.IndexModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
