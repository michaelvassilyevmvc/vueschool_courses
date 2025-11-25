const reverse = (value: string | string[]) => {
  if (typeof value === 'string') {
    return value.split('').reverse().join('');
  } else {
    return [...value].reverse();
  }
}

console.log(reverse('123'));
console.log(reverse(['1', '2', '3']));