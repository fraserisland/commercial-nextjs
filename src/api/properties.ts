const API_URL = 'https://ap-southeast-2.api.vaultre.com.au/api/v1.3/';

const client = async (
  endpoint: string,
  customConfig?: RequestInit
): Promise<null | any> => {
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

    const res = await fetch(`${API_URL}${endpoint}`, config);
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

const getSalePropertyByID = ({ id }: { id: string }) => {
  return client(`properties/commercial/sale/${id}`);
};

export { getAvailableSaleProperties, getSalePropertyByID };
