const combine = (n1: number, n2: number) => {
  return n1 + n2;
}

const newResult = (num: number): void => {
  console.log('Result: ', + num);
}

let addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
}

newResult(combine(5, 12))

let combineValues: (a: number, b: number) => number;

combineValues = combine;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8))

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});

// function sendRequest(data: string, cb: (response: any) => void) {
//   // ... sending a request with "data"
//   return cb({data: 'Hi there!'});
// }

// sendRequest('Send this!', (response) => {
//   console.log(response);
//   return true;
//  });