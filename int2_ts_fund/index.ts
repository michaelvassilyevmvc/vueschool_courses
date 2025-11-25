interface Person {
  name: string;
  age: number;
}

const me: Person = {
  name: 'Juan',
  age: 25
}

const clone = <T>(value: T): T => {
  const json = JSON.stringify(value);
  return JSON.parse(json)
}

const myClone = clone(me);

const books: string[] = ['Harry Potter', 'Jurassic Park', 'The Dark Tower'];
const bookCopies = clone<string[]>(books);
bookCopies.push('Project Hail Mary');