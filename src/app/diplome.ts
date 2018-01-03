export class Diplome {
  constructor(private _id: string, private _total: string, private _ville: string, private _alternance, private _date ){
  }
  get Id(): string {
    return this._id;
  }
  get Total(): string {
      return this._total;
  }
  get Ville(): string {
      return this._ville;
  }
  get Alternance(): string {
      return this._alternance;
  }
  get Date(): string {
      return this._date;
  }
}
