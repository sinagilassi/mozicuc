/**
 * Complete mozicuc Usage Examples
 * Demonstrates all features and functions
 */

import * as mozicuc from '../src/index';
import { ConversionDict } from '../src/types';

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

// SECTION: Enthalpy Conversion Example
const enthalpyRefs = mozicuc.checkReference('enthalpy');
console.log('Enthalpy References:', enthalpyRefs);


// NOTE: get enthalpy mass units
// const enthalpyMassUnits = mozicuc.Refs._getMassUnits(enthalpyDict);
// console.log('Enthalpy Mass Units:', enthalpyMassUnits);



