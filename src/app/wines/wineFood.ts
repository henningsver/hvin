export class WindFood {
	_id?: number;
	datum: string;
	bas: string;
	ratt: string;
	tillbehor: string;
	sas: string;
	extra: string;
	vin: {
		vinID: number;
		argang: string;
		namn: string;
	}
	betyg: {
		mat: number;
		vin: number;
		kombi: number;
	}
	kommentar: string;
}
