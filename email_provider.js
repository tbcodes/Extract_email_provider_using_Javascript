function findEmailProvider(address) {
  const lastIndex = address.lastIndexOf('@');
  return address.slice(lastIndex + 1, address.length);
}

console.log(findEmailProvider('hellothere@yahoo.com');
console.log(findEmailProvider('truzzblogg@gmail.com');
