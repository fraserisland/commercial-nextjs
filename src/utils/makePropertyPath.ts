import type { IProperty } from '../types';

const kebabCase = require('lodash.kebabcase');

const makePropertyPath = (property: IProperty) => {
  return `/properties/${kebabCase(property.heading)}/${property.id}`;
};

export default makePropertyPath;
