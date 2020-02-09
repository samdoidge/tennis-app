import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSummaryComponent } from './match-summary.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatchStatus } from '../match.types';

describe('MatchSummaryComponent', () => {
  let component: MatchSummaryComponent;
  let fixture: ComponentFixture<MatchSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchSummaryComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchSummaryComponent);
    component = fixture.componentInstance;
    component.match = { id: 'FE23232', status: MatchStatus.Playing, side1: [{ name: 'Peter' }], side2: [{ name: 'John' }] };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
