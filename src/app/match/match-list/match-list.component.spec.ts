import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchListComponent } from './match-list.component';
import { MatchStatus } from '../match.types';
import { MatchSummaryComponent } from '../match-summary/match-summary.component';
import {MatchModule} from '../match.module'
import { AppModule } from 'src/app/app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('MatchListComponent', () => {
  let component: MatchListComponent;
  let fixture: ComponentFixture<MatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatchListComponent, MatchSummaryComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchListComponent);
    component = fixture.componentInstance;
    component.matches = [{ id: 'FE23232', status: MatchStatus.Playing, side1: [{ name: 'Peter' }], side2: [{ name: 'John' }] }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
