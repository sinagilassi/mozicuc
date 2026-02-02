/**
 * Complete mozicuc Usage Examples
 * Demonstrates all features and functions
 */

import * as mozicuc from '../src/index';

// SECTION: Check References
const references = mozicuc.listReferences();
console.log('Available References:', references);

// SECTION: Check Reference
const pressureRefs = mozicuc.checkReference('pressure');
console.log('Pressure References:', pressureRefs);

// SECTION: Get Reference Units
const pressureUnits = mozicuc.getReferenceUnits('pressure');
console.log('Pressure Units:', pressureUnits);

// NOTE: Unit Conversion
const P1 = 1; // 1 atm

// looping through pressure units and converting
pressureUnits.forEach((unit) => {
    const convertedValue = mozicuc.convertFromTo(P1, 'atm', unit);
    console.log(`1 atm = ${convertedValue} ${unit}`);
});
