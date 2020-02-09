import { Component, OnInit } from '@angular/core';
import { MatchStatus, MatchSummary } from './match.types';
import { MatchService } from './match.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  matchList: MatchSummary[] = [];

  constructor(private matchService: MatchService, private spinner: NgxSpinnerService, private toastr: ToastrService) {}

  ngOnInit() {
    this.spinner.show();
    this.getMatches();
  }

  getMatches() {
    this.matchService.getMatches().subscribe(
      data => {
        this.matchList = data.filter(m => m.status === MatchStatus.Playing);
        this.spinner.hide();
      },
      error => {
        this.toastr.error(error.message, 'Error');
        this.spinner.hide();
      }
    );
  }
}
