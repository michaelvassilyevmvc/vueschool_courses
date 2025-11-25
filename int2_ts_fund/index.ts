enum Sizes {
  small,
  medium = 'medium',
  large = 'large'
}

interface Emailable {
  emailBody(): string,

  emailSubject(): string
}

class InventoryItem {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }


  buy(): this {
    console.log(this.price);
    return this
  }

}

class Product extends InventoryItem {
  color: string = 'gray'
   size: Sizes | undefined

}


class Service extends InventoryItem implements Emailable {
  startTime: Date
  endTime: Date


  constructor(name: string, price: number, startTime: Date, endTime: Date) {
    super(name, price);
    this.startTime = startTime;
    this.endTime = endTime;
  }

  emailBody(): string {
    return `Thank you for purchasing ${this.name}!Your appointment starts at ${this.startTime.toLocaleTimeString()} and ends at ${this.endTime.toLocaleTimeString()}.`
  }

  emailSubject(): string {
    return `${this.name} | My Company`
  }
}

function sendEmail(emailable: Emailable, to: string) {
  console.log('Body:', emailable.emailBody());
  console.log('Subject::', emailable.emailSubject());
  console.log('To:', to);
}

const tshirt = new Product('TShirt Design B', 10);
tshirt.size = Sizes.medium;
tshirt.color = 'red';
tshirt.buy();

const photoShoot = new Service(
    'Kelly Wedding Photo Shoot',
    450,
    new Date('May 9, 2009 11:00:00'),
    new Date('May 9, 2009 12:30:00'),
)

photoShoot.buy()

sendEmail(photoShoot, 'rebusmv@gmail.com')