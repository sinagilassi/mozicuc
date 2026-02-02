// import libs
const {
    listReferences,
    checkReference,
    getReferenceUnits,
    convertFromTo,
    Refs
} = require('mozicuc')


// SECTION: List references
allRef = listReferences()
console.log('All references:', allRef)

// SECTION: Check References
const references = listReferences();
console.log('Available References:', references);

// SECTION: Check Reference
const pressureRefs = checkReference('pressure');
console.log('Pressure References:', pressureRefs);

// SECTION: Get Reference Units
const pressureUnits = getReferenceUnits('pressure');
console.log('Pressure Units:', pressureUnits);

// NOTE: Unit Conversion
const P1 = 1; // 1 atm

// looping through pressure units and converting
pressureUnits.forEach((unit) => {
    const convertedValue = convertFromTo(P1, 'atm', unit);
    console.log(`1 atm = ${convertedValue} ${unit}`);
});

// SECTION: Enthalpy Conversion Example
const enthalpyRefs = checkReference('enthalpy');
console.log('Enthalpy References:', enthalpyRefs);

// NOTE: get enthalpy mass units
const enthalpyMassUnits = Refs._getMassUnits(enthalpyRefs);
console.log('Enthalpy Mass Units:', enthalpyMassUnits);

// NOTE: get enthalpy molar units
const enthalpyMolarUnits = Refs._getMolarUnits(enthalpyRefs);
console.log('Enthalpy Molar Units:', enthalpyMolarUnits);

// SECTION: Flowrate Conversion Example
const flowrateRefs = checkReference('flow_rate');
console.log('Flowrate References:', flowrateRefs);

// NOTE: get flowrate volumetric units
const flowrateVolumetricUnits = Refs._getVolumeUnits(flowrateRefs);
console.log('Flowrate Volumetric Units:', flowrateVolumetricUnits);

// NOTE: get flowrate mass units
const flowrateMassUnits = Refs._getMassUnits(flowrateRefs);
console.log('Flowrate Mass Units:', flowrateMassUnits);