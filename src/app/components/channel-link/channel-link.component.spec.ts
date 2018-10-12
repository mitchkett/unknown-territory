import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChannelLinkComponent } from './channel-link.component';
import { Channel } from 'src/app/models/channel.model';

describe('ChannelLinkComponent', () => {
	let component: ChannelLinkComponent;
	let fixture: ComponentFixture<ChannelLinkComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ChannelLinkComponent],
			imports: [ FontAwesomeModule ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChannelLinkComponent);
		component = fixture.componentInstance;
		const componentChannel = new Channel();
		componentChannel.type = 'facebook';
		componentChannel.id = '1234';
		component.channel = componentChannel;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
