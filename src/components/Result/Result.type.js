import { shape, string } from 'prop-types';

const ResultType = shape({
  href: string,
  ingredients: string,
  thumbnail: string,
  title: string,
});

export default ResultType;
