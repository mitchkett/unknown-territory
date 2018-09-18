import { Address } from './address.model';
import { Channel } from './channel.model';

export class Official {
	name: string;
	address: Address[];
	party: string;
	phones: string[];
	emails: string[];
	urls: string[];
	photoUrl: string;
	channels: Channel[];
}
