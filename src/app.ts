/**
 * TSCUC - Main Application Functions
 * Provides convenient helper functions for unit conversion
 */

import * as fs from 'fs';
import { CustomUnitConverter } from './CustomUnitConverter';
import { CustomUnitConverterX } from './CustomUnitConverterX';
import { Utils } from './Utils';
import { ReferenceType, ConversionDict } from './types';

// Package metadata
export const VERSION = '1.0.0';
export const AUTHOR = 'Your Name';
export const EMAIL = 'your.email@example.com';
export const DESCRIPTION = 'TypeScript Custom Unit Converter - A flexible unit conversion library';

/**
 * Check the version of the package
 * @returns The version string
 */
export function checkVersion(): string {
    return VERSION;
}

/**
 * Shows reference unit table
 * @param reference - Reference name such as 'pressure', 'temperature', 'custom'
 * @param asObject - If true, return object; otherwise return array for display
 * @returns Reference details
 *
 * @example
 * ```typescript
 * // Pressure units
 * console.log(checkReference('pressure'));
 *
 * // Temperature units
 * console.log(checkReference('temperature'));
 *
 * // Custom units
 * console.log(checkReference('custom'));
 * ```
 */
export function checkReference(
    reference: string,
    asObject: boolean = false
): ConversionDict | Array<{ unit: string; value: number }> {
    try {
        if (typeof reference !== 'string' || reference.length === 0) {
            throw new Error('Reference not provided!');
        }

        const cucC = new CustomUnitConverter(0, '');
        return cucC.checkReference(reference, asObject);
    } catch (error) {
        throw new Error(`Checking references failed! ${error}`);
    }
}

/**
 * Initializes app with/without external YAML file
 * @param referenceFile - Optional path to the YAML reference file
 * @returns CustomUnitConverterX object
 *
 * @example
 * ```typescript
 * // Without custom units
 * const converter = go();
 *
 * // With custom units from YAML file
 * const converter = go('./custom-units.yml');
 * ```
 *
 * @remarks
 * YAML reference file format:
 * ```yaml
 * CUSTOM-UNIT:
 *   HEAT-CAPACITY:
 *     J/mol.K: 1
 *     kJ/mol.K: 0.001
 *     J/kmol.K: 1000
 *   ENERGY:
 *     J/mol: 1
 *     kJ/mol: 0.001
 *     J/kmol: 1000
 *     kcal/mol: 0.000239006
 *     cal/mol: 0.239006
 * ```
 */
export function go(referenceFile?: string): CustomUnitConverterX {
    try {
        const cucxC = new CustomUnitConverterX(0, '');

        if (referenceFile) {
            if (!fs.existsSync(referenceFile)) {
                throw new Error('File not found!');
            }
            cucxC.loadCustomUnit(referenceFile);
        }

        return cucxC;
    } catch (error) {
        throw new Error(`Initializing failed! ${error}`);
    }
}

/**
 * Creates a CustomUnitConverter object
 * @param value - The value to be converted
 * @param unit - The unit of the value
 * @returns CustomUnitConverter object
 *
 * @example
 * ```typescript
 * // Pressure conversion
 * const pressure = createCuc(1, 'MPa');
 * console.log(pressure.convert('Pa'));    // 1000000
 * console.log(pressure.convert('bar'));   // 10
 * console.log(pressure.convert('kPa'));   // 1000
 *
 * // Temperature conversion
 * const temp = createCuc(358, 'K');
 * console.log(temp.convert('C'));  // 84.85
 * console.log(temp.convert('F'));  // 184.73
 * console.log(temp.convert('R'));  // 644.4
 *
 * // Custom units
 * const custom = createCuc(25, 'J/mol.K');
 * custom.addCustomUnit('J/mol.K', 1);
 * custom.addCustomUnit('kJ/mol.K', 0.001);
 * console.log(custom.convert('kJ/mol.K'));  // 0.025
 * ```
 */
export function createCuc(value: number, unit: string): CustomUnitConverter {
    return new CustomUnitConverter(value, unit);
}

/**
 * Convert a value from one unit to another
 * @param value - The value to be converted
 * @param fromUnit - The source unit
 * @param toUnit - The target unit
 * @param reference - Optional reference type (PRESSURE, TEMPERATURE, etc.)
 * @param referenceFile - Optional path to reference file
 * @returns The converted value
 *
 * @example
 * ```typescript
 * // Pressure conversion
 * console.log(convertFromTo(1, 'MPa', 'Pa'));     // 1000000
 * console.log(convertFromTo(100, 'bar', 'psi'));  // 1450.38
 *
 * // Temperature conversion
 * console.log(convertFromTo(358, 'K', 'C'));  // 84.85
 * console.log(convertFromTo(25, 'C', 'K'));   // 298.15
 *
 * // Mass conversion
 * console.log(convertFromTo(10, 'kg', 'lb'));  // 22.0462
 *
 * // Length conversion
 * console.log(convertFromTo(100, 'm', 'ft'));  // 328.084
 * ```
 */
export function convertFromTo(
    value: number,
    fromUnit: string,
    toUnit: string,
    reference?: ReferenceType,
    referenceFile?: string
): number {
    try {
        const converter = new CustomUnitConverter(value, fromUnit);
        return converter.convert(toUnit, reference);
    } catch (error) {
        throw new Error(`Conversion failed! ${error}`);
    }
}

/**
 * Convert a value using a unit conversion block
 * @param value - The value to be converted
 * @param unitConversionBlock - Conversion block format: "fromUnit => toUnit"
 * @param reference - Optional reference type
 * @param referenceFile - Optional path to reference file
 * @returns The converted value
 *
 * @example
 * ```typescript
 * // Pressure conversion
 * console.log(to(1, 'MPa => Pa'));     // 1000000
 * console.log(to(100, 'bar => psi'));  // 1450.38
 *
 * // Temperature conversion
 * console.log(to(358, 'K => C'));  // 84.85
 * console.log(to(25, 'C => K'));   // 298.15
 *
 * // Length conversion
 * console.log(to(5, 'mi => km'));  // 8.04672
 *
 * // Power conversion
 * console.log(to(1000, 'W => HP'));  // 1.34102
 * ```
 */
export function to(
    value: number,
    unitConversionBlock: string,
    reference?: ReferenceType,
    referenceFile?: string
): number {
    try {
        const utils = new Utils();
        const { fromUnit, toUnit } = (utils as any).parseConversionBlock(unitConversionBlock);

        return convertFromTo(value, fromUnit, toUnit, reference, referenceFile);
    } catch (error) {
        throw new Error(`Conversion failed! ${error}`);
    }
}

/**
 * Quick conversion function - alias for convertFromTo
 * @param value - Value to convert
 * @param fromUnit - Source unit
 * @param toUnit - Target unit
 * @returns Converted value
 */
export function convert(value: number, fromUnit: string, toUnit: string): number {
    return convertFromTo(value, fromUnit, toUnit);
}

/**
 * Get package information
 * @returns Package metadata
 */
export function getInfo(): {
    version: string;
    author: string;
    email: string;
    description: string;
} {
    return {
        version: VERSION,
        author: AUTHOR,
        email: EMAIL,
        description: DESCRIPTION
    };
}

/**
 * List all available unit types
 * @returns Array of available reference types
 */
export function listReferences(): string[] {
    return [
        'PRESSURE',
        'TEMPERATURE',
        'DENSITY',
        'ENERGY',
        'GIBBS_FREE_ENERGY',
        'ENTHALPY',
        'HEAT_CAPACITY',
        'VOLUME',
        'MASS',
        'POWER',
        'LENGTH',
        'FORCE',
        'CUSTOM'
    ];
}

/**
 * Check if a unit exists in any reference
 * @param unit - Unit to check
 * @returns Object with found status and reference type
 */
export function findUnit(unit: string): {
    found: boolean;
    reference?: string;
    factor?: number;
} {
    try {
        const converter = new CustomUnitConverter(1, unit);
        const references = listReferences();

        for (const ref of references) {
            try {
                const refData = converter.checkReference(ref, true) as ConversionDict;
                if (unit in refData) {
                    return {
                        found: true,
                        reference: ref,
                        factor: refData[unit]
                    };
                }
            } catch {
                continue;
            }
        }

        return { found: false };
    } catch (error) {
        return { found: false };
    }
}