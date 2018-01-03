export class Competence {
  constructor(private _id: string, private _type: string, private _icon: string, private _level ){
  }
  get Id(): string {
    return this._id;
  }
  get Type(): string {
      return this._type;
  }
  get Icon(): string {
      return this._icon;
  }
  get Level(): string {
      return this._level;
  }
}
