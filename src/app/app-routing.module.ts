import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeComponent } from './episode/episode.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'episode/:id', component: EpisodeComponent },
  { path: '**', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
