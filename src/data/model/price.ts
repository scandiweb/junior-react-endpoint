import { Currency } from '../type';

class Price {
    constructor(
        protected currency: Currency,
        protected amount: number
    ) {}
}

export default Price;
