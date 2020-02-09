import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatchService } from '../match.service';
import { ActivatedRoute } from '@angular/router';
import { getSideNames } from '../utils';
import { NgxSpinnerService } from 'ngx-spinner';
import * as Rx from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { MatchDetail } from '../match.types';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit, OnDestroy {
  matchDetail: MatchDetail;
  side1Names: string;
  side2Names: string;
  side1Score: number;
  side2Score: number;
  subscription;

  constructor(
    private matchService: MatchService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.subscription = Rx.interval(10000)
        .pipe(
          startWith(0),
          switchMap(() => {
            this.spinner.show();
            return this.matchService.getMatch(id);
          })
        )
        .subscribe(
          data => {
            this.matchDetail = data;
            this.side1Names = getSideNames(this.matchDetail.side1);
            this.side2Names = getSideNames(this.matchDetail.side2);
            this.side1Score = this.matchDetail.side1[0].score;
            this.side2Score = this.matchDetail.side2[0].score;
            this.spinner.hide();
          },
          error => {
            this.toastr.error(error.message, 'Error');
            this.spinner.hide();
          }
        );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
