import converter from '../util/currency-converter';
import { Currency } from '../data/type';

const currencyResolver = (): Currency[] => converter.availableCurrencies;

export default currencyResolver;
