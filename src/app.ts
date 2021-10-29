const { log } = console;

let appId = 'abc';

const button = document.querySelector('button')!;

const newAdd = (n1: number, n2: number) => {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

const clickHandler = (message: string) => {
  // let userName = 'Tyler';
  console.log('Clicked' + message);
}

button.addEventListener('click', clickHandler.bind(null, 'You\'re welcome!'));

log('test')