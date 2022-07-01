export interface IProperty {
  heading: string;
  id: number;
  description: string;
  displayAddress: string;
  unitNumber: string;
  inserted: string;
  modified: string;
  displayPrice: string;
  searchPrice: number;
  address: {
    street: string;
    streetNumber: string;
    level: string;
    state: {
      id: number;
      abbreviation: string;
      name: string;
    };
    suburb: {
      id: number;
      nzDistrict: null;
      name: string;
      postcode: string;
      state: {
        id: number;
        abbreviation: string;
        name: string;
      };
      isPoBox: false;
      indoCity: null;
    };
    country: {
      id: 1;
      isocode: string;
      name: string;
      gstRate: number;
    };
  };
}

export interface IPropertySearch {
  objectID: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  displayPrice: number;
  price: string;
  state: string;
  suburb: string;
  modified: string;
}
