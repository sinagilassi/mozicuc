import * as mozicuc from '../src/index';

console.log('Starting test...');
try {
    console.log(`Version: ${mozicuc.checkVersion()}`);
    const result = mozicuc.convertFromTo(1, 'MPa', 'Pa');
    console.log(`1 MPa = ${result} Pa`);
} catch (error) {
    console.error('Error during test:', error);
}
console.log('Test finished.');
