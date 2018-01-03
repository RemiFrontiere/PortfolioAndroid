export class Project {
  constructor(private _id: string, private _name: string, private _language: string, private _topImg: string, private _texts: Array<string> ){
  }

  get Id(): string {
    return this._id;
  }
  get Name(): string {
      return this._name;
  }
  get Language(): string {
      return this._language;
  }
  get TopImg(): string {
      return this._topImg;
  }
  get Texts(): Array<string> {
      return this._texts;
  }
}
