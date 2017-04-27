export class Wine {
  _id?: number;
  namn: string;
  argang: string;
  typ: string;
  land: string;
  region: string;
  subRegion: string;
  appellation: string;
  druva: string;
  pris: number;
  inlagd: string;
  bestalld: string;
  aov: {
    betyg: string;
    kvalitet: {
      max: number;
      kvalitet: number;
    }
    lagring: string;
    smaktyp: string;
    bedomning: string;
  }
  systembolaget: {
    nr: number;
    klocka: {
      fyllighet: number;
      stravhet: number;
      fruktsyra: number;
      sotma: number;
    }
    smaktyp: string;
    smak: string;
    doft: string;
  }
  hd: {
    betyg: number;
    kvalitet: {
      max: number;
      kvalitet: number;
    }
  }
  lrvf: {
    kvalitet: {
      max: number;
      kvalitet: number;
    }
  }
}
