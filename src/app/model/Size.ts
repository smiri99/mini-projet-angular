export class Size {
  private _type: number;
  private _qte: number;


  constructor() {
  }

  get type(): number {
    return this._type;
  }

  set type(value: number) {
    this._type = value;
  }

  get qte(): number {
    return this._qte;
  }

  set qte(value: number) {
    this._qte = value;
  }
}
