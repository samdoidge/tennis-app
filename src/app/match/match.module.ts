import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { MatchComponent } from './match.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchSummaryComponent } from './match-summary/match-summary.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';


@NgModule({
  declarations: [MatchComponent, MatchListComponent, MatchSummaryComponent, MatchDetailComponent],
  imports: [
    CommonModule,
    MatchRoutingModule
  ]
})
export class MatchModule { }
