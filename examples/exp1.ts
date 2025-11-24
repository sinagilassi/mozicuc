/**
 * Complete mozicuc Usage Examples
 * Demonstrates all features and functions
 */

import * as mozicuc from '../src';

console.log('╔════════════════════════════════════════╗');
console.log('║   MOZICUC - Complete Usage Examples    ║');
console.log('╚════════════════════════════════════════╝\n');

// ============================================
// SECTION 1: Package Information
// ============================================
console.log('─── 1. Package Information ───');
console.log(`Version: ${mozicuc.checkVersion()}`);
const info = mozicuc.getInfo();
console.log(`Description: ${info.description}`);
console.log(`Available references: ${mozicuc.listReferences().join(', ')}\n`);

// ============================================
// SECTION 2: Simple Conversions (convertFromTo)
// ============================================
console.log('─── 2. Simple Conversions ───');

// Pressure
const pressure1 = mozicuc.convertFromTo(1, 'MPa', 'Pa');
console.log(`1 MPa = ${pressure1} Pa`);

const pressure2 = mozicuc.convertFromTo(100, 'bar', 'psi');
console.log(`100 bar = ${pressure2.toFixed(2)} psi`);

// Temperature
const temp1 = mozicuc.convertFromTo(358, 'K', 'C');
console.log(`358 K = ${temp1.toFixed(2)} °C`);

const temp2 = mozicuc.convertFromTo(25, 'C', 'K');
console.log(`25 °C = ${temp2.toFixed(2)} K`);

const temp3 = mozicuc.convertFromTo(32, 'F', 'C');
console.log(`32 °F = ${temp3} °C`);

// Mass
const mass = mozicuc.convertFromTo(10, 'kg', 'lb');
console.log(`10 kg = ${mass.toFixed(2)} lb\n`);

// ============================================
// SECTION 3: Conversion Block Syntax (to)
// ============================================
console.log('─── 3. Conversion Block Syntax ───');

console.log(`1 MPa => Pa: ${mozicuc.to(1, 'MPa => Pa')}`);
console.log(`100 m => ft: ${mozicuc.to(100, 'm => ft').toFixed(2)}`);
console.log(`1000 W => HP: ${mozicuc.to(1000, 'W => HP').toFixed(4)}`);
console.log(`5 mi => km: ${mozicuc.to(5, 'mi => km').toFixed(2)}`);
console.log(`212 F => C: ${mozicuc.to(212, 'F => C')}\n`);

// ============================================
// SECTION 4: Using createCuc
// ============================================
console.log('─── 4. Using createCuc ───');

// Pressure example
const myCuc1 = mozicuc.createCuc(1, 'MPa');
console.log('Created converter for 1 MPa:');
console.log(`  → Pa: ${myCuc1.convert('Pa')}`);
console.log(`  → bar: ${myCuc1.convert('bar')}`);
console.log(`  → kPa: ${myCuc1.convert('kPa')}`);

// Temperature example
const myCuc2 = mozicuc.createCuc(358, 'K');
console.log('\nCreated converter for 358 K:');
console.log(`  → C: ${myCuc2.convert('C').toFixed(2)}`);
console.log(`  → F: ${myCuc2.convert('F').toFixed(2)}`);
console.log(`  → R: ${myCuc2.convert('R').toFixed(2)}\n`);

// ============================================
// SECTION 5: Custom Units with createCuc
// ============================================
console.log('─── 5. Custom Units ───');

const myCuc3 = mozicuc.createCuc(25, 'J/mol.K');
myCuc3.addCustomUnit('J/mol.K', 1);
myCuc3.addCustomUnit('kJ/mol.K', 0.001);

console.log('Added custom heat capacity units:');
console.log(`  25 J/mol.K = ${myCuc3.convert('J/mol.K')} J/mol.K`);
console.log(`  25 J/mol.K = ${myCuc3.convert('kJ/mol.K')} kJ/mol.K\n`);

// ============================================
// SECTION 6: Using go() function
// ============================================
console.log('─── 6. Using go() Function ───');

const converter = mozicuc.go();

// Pressure conversions
console.log('Pressure conversions:');
console.log(`  100 bar => psi: ${converter.fromTo(100, 'bar', 'psi').toFixed(2)}`);
console.log(`  1 atm => Pa: ${converter.fromTo(1, 'atm', 'Pa').toFixed(2)}`);

// Temperature conversions
console.log('\nTemperature conversions:');
console.log(`  0 C => F: ${converter.fromTo(0, 'C', 'F')}`);
console.log(`  100 C => K: ${converter.fromTo(100, 'C', 'K').toFixed(2)}`);

// Volume conversions
console.log('\nVolume conversions:');
console.log(`  1 m3 => L: ${converter.fromTo(1, 'm3', 'L')}`);
console.log(`  1 L => cm3: ${converter.fromTo(1, 'L', 'cm3')}`);

// Energy conversions
console.log('\nEnergy conversions:');
console.log(`  1000 J => kJ: ${converter.fromTo(1000, 'J', 'kJ')}`);
console.log(`  1 kWh => J: ${converter.fromTo(1, 'kWh', 'J')}\n`);

// ============================================
// SECTION 7: Adding Custom Units to go()
// ============================================
console.log('─── 7. Custom Units with go() ───');

converter.addCustomUnit('apple', 1.0);
converter.addCustomUnit('orange', 2.0);
converter.addCustomUnit('banana', 0.5);

console.log('Added fruit units:');
console.log(`  10 apples => oranges: ${converter.fromTo(10, 'apple', 'orange')}`);
console.log(`  10 apples => bananas: ${converter.fromTo(10, 'apple', 'banana')}`);
console.log(`  5 oranges => apples: ${converter.fromTo(5, 'orange', 'apple')}\n`);

// ============================================
// SECTION 8: Checking References
// ============================================
console.log('─── 8. Checking References ───');

const pressureUnits = mozicuc.checkReference('PRESSURE', false);
console.log('Pressure units (first 5):');
if (Array.isArray(pressureUnits)) {
    pressureUnits.slice(0, 5).forEach(item => {
        console.log(`  ${item.unit}: ${item.value}`);
    });
}

const tempUnits = mozicuc.checkReference('TEMPERATURE', false);
console.log('\nTemperature units:');
if (Array.isArray(tempUnits)) {
    tempUnits.forEach(item => {
        console.log(`  ${item.unit}: ${item.value}`);
    });
}

console.log('');

// ============================================
// SECTION 9: Finding Units
// ============================================
console.log('─── 9. Finding Units ───');

const units = ['bar', 'psi', 'kg', 'C', 'F', 'J', 'invalidUnit'];
units.forEach(unit => {
    const result = mozicuc.findUnit(unit);
    if (result.found) {
        console.log(`  ${unit}: Found in ${result.reference} (factor: ${result.factor})`);
    } else {
        console.log(`  ${unit}: Not found`);
    }
});

console.log('');

// ============================================
// SECTION 10: Complex Conversions
// ============================================
console.log('─── 10. Complex Conversions ───');

// Density
const density = mozicuc.createCuc(1, 'g/cm3');
console.log(`Density: 1 g/cm3 = ${density.convert('kg/m3')} kg/m3`);

// Power
const power = mozicuc.createCuc(746, 'W');
console.log(`Power: 746 W = ${power.convert('HP').toFixed(4)} HP`);

// Force
const force = mozicuc.createCuc(100, 'N');
console.log(`Force: 100 N = ${force.convert('lbf').toFixed(2)} lbf`);

// Length
const length = mozicuc.createCuc(1000, 'mm');
console.log(`Length: 1000 mm = ${length.convert('m')} m`);

console.log('');

// ============================================
// SECTION 11: Batch Conversions
// ============================================
console.log('─── 11. Batch Conversions ───');

const values = [1, 10, 100, 1000];
console.log('Bar to PSI conversions:');
values.forEach(val => {
    const result = mozicuc.convert(val, 'bar', 'psi');
    console.log(`  ${val} bar = ${result.toFixed(2)} psi`);
});

console.log('\nCelsius to Fahrenheit conversions:');
const temps = [0, 25, 50, 100];
temps.forEach(val => {
    const result = mozicuc.convert(val, 'C', 'F');
    console.log(`  ${val} °C = ${result.toFixed(2)} °F`);
});

console.log('');

// ============================================
// SECTION 12: Using Conversion Block
// ============================================
console.log('─── 12. Conversion Block Patterns ───');

const conversionBlocks = [
    { value: 100, block: 'bar => psi' },
    { value: 273.15, block: 'K => C' },
    { value: 1000, block: 'W => kW' },
    { value: 100, block: 'kg => lb' },
    { value: 1, block: 'm3 => L' }
];

conversionBlocks.forEach(({ value, block }) => {
    const result = converter.to(value, block);
    console.log(`  ${value} ${block}: ${result.toFixed(4)}`);
});

console.log('');

// ============================================
// SECTION 13: Error Handling
// ============================================
console.log('─── 13. Error Handling ───');

try {
    mozicuc.convert(100, 'bar', 'invalidUnit');
} catch (error) {
    console.log(`  ✓ Caught expected error: ${(error as Error).message.substring(0, 50)}...`);
}

try {
    mozicuc.to(100, 'bar > psi'); // Wrong syntax
} catch (error) {
    console.log(`  ✓ Caught expected error: ${(error as Error).message.substring(0, 50)}...`);
}

console.log('');

// ============================================
// Summary
// ============================================
console.log('╔════════════════════════════════════════╗');
console.log('║     All Examples Completed! ✓          ║');
console.log('╚════════════════════════════════════════╝\n');

console.log('Available Functions:');
console.log('  • checkVersion()          - Get package version');
console.log('  • checkReference()        - View available units');
console.log('  • convertFromTo()         - Simple conversion');
console.log('  • to()                    - Conversion with block syntax');
console.log('  • convert()               - Quick conversion alias');
console.log('  • createCuc()             - Create converter object');
console.log('  • go()                    - Initialize with custom units');
console.log('  • getInfo()               - Get package info');
console.log('  • listReferences()        - List all unit types');
console.log('  • findUnit()              - Find unit in references');
console.log('');