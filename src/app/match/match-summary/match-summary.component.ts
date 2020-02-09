import { Component, OnInit, Input } from '@angular/core';
import { MatchSummary } from '../match.types';
import { getSideNames } from '../utils';

@Component({
  selector: 'app-match-summary',
  templateUrl: './match-summary.component.html',
  styleUrls: ['./match-summary.component.scss']
})
export class MatchSummaryComponent implements OnInit {
  @Input() match: MatchSummary;
  side1Names: string;
  side2Names: string;

  constructor() {}

  ngOnInit() {
    this.side1Names = getSideNames(this.match.side1);
    this.side2Names = getSideNames(this.match.side2);
  }
}
