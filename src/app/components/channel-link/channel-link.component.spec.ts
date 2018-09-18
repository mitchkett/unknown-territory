import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelLinkComponent } from './channel-link.component';

describe('ChannelLinkComponent', () => {
  let component: ChannelLinkComponent;
  let fixture: ComponentFixture<ChannelLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
