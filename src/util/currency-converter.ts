const rates: Record<string, number> = {
    USD: 1.205736,
    GBP: 0.866671,
    AUD: 1.555409,
    JPY: 130.210363,
    RUB: 91.181299
}

const currencyConverter = {
    availableCurrencies: Object.keys(rates),

    convertFromEUR(amount: number, targetCurrency: string) {
        return rates[targetCurrency] * amount;
    }
}

export default currencyConverter;