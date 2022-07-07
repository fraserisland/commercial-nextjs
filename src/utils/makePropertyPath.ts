import type { IProperty } from '../types';

const kebabCase = require('lodash.kebabcase');

const makePropertyPath = (property: IProperty) => {
  return `/properties/${property.commercialListingType}/${kebabCase(property.heading)}/${property.id}`;
};

export default makePropertyPath;
