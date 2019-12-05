import {Size} from './Size';

export class Product {
  private _id: number;
  private _label: string;
  private _photo: string;
  private _price: number;
  private _creationDate: Date;
  private _size: Size[];


  constructor() {
  }

  public fill(id: number, label: string, photo: string, price: number, available: boolean, creationDate: Date, size: Size[]): Product {
    this._id = id;
    this._label = label;
    this._photo = photo;
    this._price = price;
    this._creationDate = creationDate;
    this._size = size;
    return this;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get photo(): string {
    return this._photo;
  }

  set photo(value: string) {
    this._photo = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

 

  get creationDate(): Date {
    return this._creationDate;
  }

  set creationDate(value: Date) {
    this._creationDate = value;
  }

  get size(): Size[] {
    return this._size;
  }

  set size(value: Size[]) {
    this._size = value;
  }
}
