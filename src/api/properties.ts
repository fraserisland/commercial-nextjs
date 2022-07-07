import fetch from 'node-fetch';

import type { IProperty, PropertyType } from '../types';

const API_URL = 'https://ap-southeast-2.api.vaultre.com.au/api/v1.3/';

const client = async (endpoint: string, customConfig?: RequestInit): Promise<null | any> => {
  try {
    const headers = {
      'X-Api-Key': 'UIxhtpbAwu2C7ODbHllEXnRs49FyuNz4KMOt8Ch9',
      Authorization: 'Bearer sabblonocgwvaysnstujdijolciofiospxhpyzml',
    };

    const config = {
      method: 'GET',
      ...customConfig,
      headers: {
        ...headers,
        ...(customConfig?.headers ?? {}),
      },
    };

    const res = await fetch(`${API_URL}${endpoint}`, config as any);
    const resJSON = await res.json();

    return resJSON;
  } catch (e) {
    console.log(e);
  }

  return null;
};

const getAvailableSaleProperties = () => {
  return client('properties/commercial/sale/available');
};

const getAvailableLeaseProperties = () => {
  return client('properties/commercial/lease/available');
};

const getSoldSaleProperties = () => {
  return client('properties/commercial/sale/sold');
};

const getLeasedLeaseProperties = () => {
  return client('properties/commercial/lease/leased');
};

const getSalePropertyByID = ({ id }: { id: string }) => {
  return client(`properties/commercial/sale/${id}`);
};

const getLeasePropertyByID = ({ id }: { id: string }) => {
  return client(`properties/commercial/lease/${id}`);
};

const addPropertyType = (properties: IProperty[], type: PropertyType) => {
  return properties.map((p: IProperty) => ({ ...p, type }));
};

const getAllProperties = async () => {
  const sale = await getAvailableSaleProperties();
  const lease = await getAvailableLeaseProperties();
  const leased = await getLeasedLeaseProperties();
  const sold = await getSoldSaleProperties();

  return [
    ...addPropertyType(sale.items, 'sale'),
    ...addPropertyType(lease.items, 'lease'),
    ...addPropertyType(leased.items, 'leased'),
    ...addPropertyType(sold.items, 'sold'),
  ];
};

export {
  getAllProperties,
  getAvailableLeaseProperties,
  getAvailableSaleProperties,
  getLeasedLeaseProperties,
  getSalePropertyByID,
  getLeasePropertyByID,
  getSoldSaleProperties,
};
