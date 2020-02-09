import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { MatchService } from '../match.service';
import { MatchSummary, MatchToCreate } from '../match.types';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.scss']
})
export class MatchFormComponent implements OnInit {
  @ViewChild('form', { static: false }) form;
  @Output() private refreshMatches: EventEmitter<undefined> = new EventEmitter<undefined>();
  createMatchForm = new FormGroup({
    side1: new FormArray([], Validators.required),
    side2: new FormArray([], Validators.required)
  });
  isCollapsed = true;
  submitted = false;
  matchType = 1;

  constructor(private matchService: MatchService, private spinner: NgxSpinnerService, private toastr: ToastrService) {}

  get side1() {
    return this.createMatchForm.get('side1') as FormArray;
  }

  get side2() {
    return this.createMatchForm.get('side2') as FormArray;
  }

  ngOnInit() {
    this.addPlayers();
  }

  onSubmit = () => {
    this.submitted = true;
    if (!this.createMatchForm.valid) {
      return;
    }
    this.spinner.show();
    const matchToPost = this.transformForEndpoint();
    this.matchService.createMatch(matchToPost).subscribe(
      data => {
        this.refreshMatches.emit();
        this.resetForm();
        this.toastr.success('Match successfully created.', 'Success');
        this.spinner.hide();
      },
      error => {
        this.toastr.error(error.message, 'Error');
        this.spinner.hide();
      }
    );
  };

  transformForEndpoint(): MatchToCreate {
    const matchToCreate = { ...this.createMatchForm.value };
    const { side1, side2 } = matchToCreate;
    matchToCreate.side1 = side1.map(p => {
      return { name: p };
    });
    matchToCreate.side2 = side2.map(p => {
      return { name: p };
    });
    return matchToCreate;
  }

  resetForm() {
    this.createMatchForm.reset();
    this.submitted = false;
  }

  setSingles() {
    if (this.matchType !== 1) {
      this.removePlayers();
    }
    this.matchType = 1;
  }

  setDoubles() {
    if (this.matchType !== 2) {
      this.addPlayers();
    }
    this.matchType = 2;
  }

  addPlayers() {
    this.side1.push(new FormControl('', Validators.required));
    this.side2.push(new FormControl('', Validators.required));
  }

  removePlayers() {
    this.side1.controls.splice(-1, 1);
    this.side2.controls.splice(-1, 1);
  }

  getPlaceholder(i): string {
    return `Player ${i}`;
  }
}
