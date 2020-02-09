import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchComponent } from './match.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';

const routes: Routes = [
  { path: '', component: MatchComponent },
  {
    path: 'match/:id',
    component: MatchDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule {}
