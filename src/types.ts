export interface IProperty {
  heading: string;
  id: number;
  description: string;
  displayAddress: string;
  unitNumber: string;
  inserted: string;
  modified: string;
  photos?: {
    thumbnails: {
      thumb_1024: string;
    };
  }[];
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
  displayPrice: string;
  image: string;
  price: number;
  state: string;
  suburb: string;
  modified: string;
}

export interface IAgent {
  id: number;
  name: string;
  slug: string;
  mobile?: string;
  role: string;
  imageUrl: string;
  about?: string;
}
