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
  floorArea: {
    units: string;
    value: number;
  };
  contactStaff: {
    id: number;
    firstName: string;
    staffTypeId: number;
  }[];
}

export type PropertyType = 'sale' | 'sold' | 'lease' | 'leased';

export interface IPropertyNormalised extends IProperty {
  type: PropertyType;
}

export interface IPropertySearch {
  objectID: string;
  title: string;
  slug: string;
  date: string;
  timestamp: number;
  displayPrice: string;
  excerpt: string;
  image: string;
  price: number;
  address: {
    suburb: string;
    state: string;
  };
  modified: string;
  floorArea: number;
  type: PropertyType;
  agents: {
    id: number;
    firstName: string;
    staffTypeId: number;
  }[];
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
