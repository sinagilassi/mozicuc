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
const enthalpyMassUnits = mozicuc.Refs._getMassUnits(enthalpyRefs);
console.log('Enthalpy Mass Units:', enthalpyMassUnits);

// NOTE: get enthalpy molar units
const enthalpyMolarUnits = mozicuc.Refs._getMolarUnits(enthalpyRefs);
console.log('Enthalpy Molar Units:', enthalpyMolarUnits);

// SECTION: Flowrate Conversion Example
const flowrateRefs = mozicuc.checkReference('flow_rate');
console.log('Flowrate References:', flowrateRefs);

// NOTE: get flowrate volumetric units
const flowrateVolumetricUnits = mozicuc.Refs._getVolumeUnits(flowrateRefs);
console.log('Flowrate Volumetric Units:', flowrateVolumetricUnits);

// NOTE: get flowrate mass units
const flowrateMassUnits = mozicuc.Refs._getMassUnits(flowrateRefs);
console.log('Flowrate Mass Units:', flowrateMassUnits);




