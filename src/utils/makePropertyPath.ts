import kebabCase from 'lodash.kebabcase';

import type { IProperty } from '@/types';

const makePropertyPath = (property: IProperty) => {
  return `/properties/${kebabCase(property.heading)}/${property.id}`;
};

export default makePropertyPath;
