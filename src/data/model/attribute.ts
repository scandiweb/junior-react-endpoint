class Attribute {
    constructor(
        protected displayValue: string,
        protected value?: string,
        protected id?: string
    ) {
        if (!value) {
            this.value = displayValue;
        }

        if (!id) {
            this.id = displayValue;
        }
    }
}

export default Attribute;