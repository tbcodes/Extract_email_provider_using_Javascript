// Mini Project in Javascript: How to extract email provider name using Javascript code.
// Javascript code presented in this video: https://www.youtube.com/watch?v=j9ahBGcOyBo

function findEmailProvider(address) {
  const lastIndex = address.lastIndexOf('@');
  return address.slice(lastIndex + 1, address.length);
}

console.log(findEmailProvider('hellothere@yahoo.com'));
console.log(findEmailProvider('truzzblogg@gmail.com'));
