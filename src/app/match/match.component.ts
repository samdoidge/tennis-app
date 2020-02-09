import { Component, OnInit } from '@angular/core';
import { MatchStatus, MatchSummary } from './match.types';
import { MatchService } from './match.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  matchList: MatchSummary[] = [];

  constructor(private matchService: MatchService, private toastr: ToastrService) {}

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
        this.toastr.error(error.message, 'Error');
        console.log(error.message);
      }
    );
  }
}
