import { convertFromTo, to, createCuc, checkReference, getReferenceUnits, listReferences, findUnit } from '../src/index';
import { Refs } from '../src/Refs';

describe('TSCUC Basic Tests', () => {
    test('Pressure conversion: bar to psi', () => {
        const result = convertFromTo(100, 'bar', 'psi');
        expect(result).toBeCloseTo(1450.38, 1);
    });

    test('Temperature conversion: F to C', () => {
        const result = to(32, 'F => C');
        expect(result).toBe(0);
    });

    test('Create converter and convert', () => {
        const converter = createCuc(1, 'MPa');
        const result = converter.convert('bar');
        expect(result).toBeCloseTo(10, 1);
    });

    test('Concentration conversion: mol/L to mM', () => {
        const result = convertFromTo(1, 'mol/L', 'mM');
        expect(result).toBeCloseTo(1000, 8);
    });

    test('Energy rate conversion: W to BTU/h', () => {
        const result = convertFromTo(1, 'W', 'BTU/h');
        expect(result).toBeCloseTo(3.41214, 5);
    });

    test('Heat transfer coefficient conversion', () => {
        const result = convertFromTo(1, 'W/m2.K', 'BTU/(hr.ft2.F)');
        expect(result).toBeCloseTo(0.1761101838, 10);
    });

    test('Molecular weight conversion: g/mol to mg/mol', () => {
        const result = convertFromTo(1, 'g/mol', 'mg/mol');
        expect(result).toBeCloseTo(1000, 8);
    });

    test('Area conversion: m2 to ft2', () => {
        const result = convertFromTo(1, 'm2', 'ft2');
        expect(result).toBeCloseTo(10.7639, 4);
    });

    test('Density molar factor correction for ft3 units', () => {
        const result = convertFromTo(1, 'mol/ft3', 'kmol/ft3');
        expect(result).toBeCloseTo(0.001, 12);
    });

    test('New references are available through APIs', () => {
        expect(listReferences()).toContain('CONCENTRATION');
        expect(getReferenceUnits('HEAT_TRANSFER_COEFFICIENT')).toContain('W/m2.K');
        const concentration = checkReference('CONCENTRATION', true) as Record<string, number>;
        expect(concentration['mM']).toBe(1.0);
    });

    test('findUnit detects new categories', () => {
        const found = findUnit('kg/kmol');
        expect(found.found).toBe(true);
        expect(found.reference).toBe('MOLECULAR_WEIGHT');
    });

    test('Legacy compatibility aliases remain available', () => {
        const refs = new Refs() as unknown as { _reference: Record<string, Record<string, number>> };
        expect(refs._reference.DENSITY_MOLAR_UNITS).toBeDefined();
        expect(refs._reference.FLOW_RATE_VOLUME_UNITS).toBeDefined();
    });

    test('Canonical and mojibake aliases map consistently', () => {
        const a = convertFromTo(1, 'm³', 'cm³');
        const b = convertFromTo(1, 'mÂ³', 'cmÂ³');
        expect(a).toBeCloseTo(b, 8);
    });
});
