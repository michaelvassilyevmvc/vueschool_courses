enum Sizes {
  small,
  medium = 'medium',
  large = 'large'
}

class Product {
  name: string
  price: number
  color: string = 'gray'
  size: Sizes | undefined

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }

  buy(): this {
    console.log(this.price);
    return this
  }
}

const tshirt = new Product('TShirt Design B', 10);
tshirt.size = Sizes.medium;
tshirt.color = 'red';
tshirt.buy();