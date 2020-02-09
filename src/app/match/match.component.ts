import { Component, OnInit } from '@angular/core';
import { MatchStatus, MatchSummary } from './match.types';
import { MatchService } from './match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  matchList: MatchSummary[] = [];

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.getMatches();
  }

  getMatches() {
    this.matchService.getMatches().subscribe(
      data => {
        this.matchList = data.filter(m => m.status === MatchStatus.Playing);
        console.log(this.matchList);
      },
      error => {
        console.log(error.message);
      }
    );
  }
}
