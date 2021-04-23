import Attribute from "./attribute";

export enum AttributeType {
    text = 'text',
    swatch = 'swatch'
}

class AttributeSet {
    protected id: string;
    protected items: Attribute[] = [];
    protected type: AttributeType = AttributeType.text;

    constructor(
        protected name: string
    ) {
        this.id = name;
    }

    addItem(item: Attribute) {
        this.items.push(item);

        return this;
    }

    addItemList(items: Attribute[]) {
        this.items.push(...items);

        return this;
    }

    setType(type: AttributeType) {
        this.type = type;

        return this;
    }
}

export default AttributeSet;