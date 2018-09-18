import { Component, OnInit, Input } from '@angular/core';
import { Channel } from '../../models/channel.model';
import { faFacebook, faGooglePlus, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-channel-link',
	templateUrl: './channel-link.component.html',
	styleUrls: ['./channel-link.component.scss']
})
export class ChannelLinkComponent implements OnInit {

	@Input() channel: Channel;

	facebookIcon = faFacebook;
	googlePlusIcon = faGooglePlus;
	twitterIcon = faTwitter;
	youTubeIcon = faYoutube;

	constructor() { }

	ngOnInit() {
	}

}
