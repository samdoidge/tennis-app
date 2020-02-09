import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatchRoutingModule } from './match-routing.module';
import { MatchComponent } from './match.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchSummaryComponent } from './match-summary/match-summary.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { MatchFormComponent } from './match-form/match-form.component';

@NgModule({
  declarations: [MatchComponent, MatchListComponent, MatchSummaryComponent, MatchDetailComponent, MatchFormComponent],
  imports: [CommonModule, MatchRoutingModule, FormsModule, ReactiveFormsModule, NgbModule]
})
export class MatchModule {}
