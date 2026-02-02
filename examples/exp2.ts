/**
 * Complete mozicuc Usage Examples
 * Demonstrates all features and functions
 */

import * as mozicuc from '../src/index';

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

const to = mozicuc.to;

const conversionBlocks = [
    { value: 100, block: 'bar => psi' },
    { value: 273.15, block: 'K => C' },
    { value: 1000, block: 'W => kW' },
    { value: 100, block: 'kg => lb' },
    { value: 1, block: 'm3 => L' }
];

conversionBlocks.forEach(({ value, block }) => {
    const result = to(value, block);
    console.log(`  ${value} ${block}: ${result.toFixed(4)}`);
});

console.log('');

// ============================================
// Summary
// ============================================
console.log('╔════════════════════════════════════════╗');
console.log('║     All Examples Completed!            ║');
console.log('╚════════════════════════════════════════╝\n');

console.log('Available Functions:');
console.log('  • checkVersion()          - Get package version');
console.log('  • checkReference()        - View available units');
console.log('  • convertFromTo()         - Simple conversion');
console.log('  • to()                    - Conversion with block syntax');
console.log('  • convert()               - Quick conversion alias');
console.log('  • getInfo()               - Get package info');
console.log('  • listReferences()        - List all unit types');
console.log('  • findUnit()              - Find unit in references');
console.log('');