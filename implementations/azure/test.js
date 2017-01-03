import Attestation from './index';

const test = new Attestation({key: '1234567890'});

// console.log('Setup test')
console.log(test);

// console.log('Failure test');
test
  .create()
  .then(result => {
    return result;
  })
  .then(result => {
    console.log('success:', result);
  })
  .catch(error => {
    console.log('failure:', error);
  });

// console.log('Create test');
test
  .create({
    ids: ['jwalsh.id'],
    chainpoint: 'http://localhost:3002',
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  })
  .then(result => {
    console.log('success:', result);
  })
  .catch(error => {
    console.log('failure:', error);
  });

test
  .retrieve('1')
  .then(result => {
    console.log('success:', result);
  })
  .catch(error => {
    console.log('failure:', error);
  });

test
  .status('1')
  .then(result => {
    console.log('success:', result.body);
  })
  .catch(error => {
    console.log('failure:', error);
  });

test
  .listen('1');

test
  .verify('1');
