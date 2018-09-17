import { DivisionMap } from './division-map.model';
import { Office } from './office.model';
import { Official } from './official.model';

export class RepresentativeInfoResponse {
	kind: string;
	normalizedInput: {
		line1: string,
		city: string,
		state: string,
		zip: string
	};
	divisions: DivisionMap;
	offices: Office[];
	officials: Official[];
}
