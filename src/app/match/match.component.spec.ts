import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchComponent } from './match.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchSummaryComponent } from './match-summary/match-summary.component';
import { MatchFormComponent } from './match-form/match-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

describe('MatchComponent', () => {
  let component: MatchComponent;
  let fixture: ComponentFixture<MatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchComponent, MatchListComponent, MatchFormComponent, MatchSummaryComponent ],
      imports: [NgbModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, ToastrModule.forRoot()],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
