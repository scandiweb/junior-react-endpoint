import Attribute from "./attribute";

class AttributeSet {
    protected id: string;
    protected items: Attribute[] = [];

    constructor(
        protected name: string
    ) {
        this.id = name;
    }

    addItem(item: Attribute) {
        this.items.push(item);

        return this;
    }
}

export default AttributeSet;