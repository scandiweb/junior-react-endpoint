import converter from '../util/currency-converter';

const currencyResolver = () => converter.availableCurrencies;

export default currencyResolver;