export interface Property {
  id: string;
  propType: string;
  tranType: string;
  title: string;
  street: string;
  town: string;
  city: string;
  state: string;
  bhk: number;
  bathrooms: number;
  age: number;
  furnished: boolean;
  cArea: number;
  lArea: number;
  price: number;
  dPrice: boolean;
  available: boolean;
  inHouse: string[];
  hospital: number;
  school: number;
  railway: number;
  units: number;
  floor: number;
  tFloors: number;
  desc: number;
  tnc: number;
  images: any[];
  created: any;
  createdDate: Date;
  seller: any;
}
