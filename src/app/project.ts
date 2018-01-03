export class Project {
  constructor(private _id: string, private _name: string, private _language: string ){
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
}
