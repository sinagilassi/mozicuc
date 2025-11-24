import { convertFromTo, to, createCuc } from '../src/index';

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
});