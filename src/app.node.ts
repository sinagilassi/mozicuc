/**
 * TSCUC - Node.js Specific Functions
 * Functions that require Node.js fs module for file I/O operations
 * These are exported separately to allow browser builds to exclude this code
 */

import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { CustomUnitConverter } from './CustomUnitConverter';
import { CustomUnitFile } from './types';

/**
 * Initializes app with external YAML file (Node.js only)
 * @param referenceFile - Path to the YAML reference file
 * @returns CustomUnitConverter object
 *
 * @example
 * ```typescript
 * // With custom units from YAML file
 * const converter = goFromFile('./custom-units.yml');
 * ```
 *
 * @remarks
 * This function is Node.js only and requires fs module.
 * For browser environments, use the main `go()` function without file loading.
 *
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
export function goFromFile(referenceFile: string): CustomUnitConverter {
    try {
        if (!fs.existsSync(referenceFile)) {
            throw new Error('File not found!');
        }

        const cucxC = new CustomUnitConverter(0, '');
        cucxC.loadCustomUnit(referenceFile);

        return cucxC;
    } catch (error) {
        throw new Error(`Initializing from file failed! ${error}`);
    }
}

/**
 * Loads custom conversion units from YAML content string
 * Works in both Node.js and browser environments
 * @param yamlContent - YAML content as string
 * @returns CustomUnitConverter object with loaded custom units
 *
 * @example
 * ```typescript
 * const yamlContent = `
 * CUSTOM-UNIT:
 *   HEAT-CAPACITY:
 *     J/mol.K: 1
 *     kJ/mol.K: 0.001
 * `;
 * const converter = goFromContent(yamlContent);
 * ```
 */
export function goFromContent(yamlContent: string): CustomUnitConverter {
    try {
        const cucxC = new CustomUnitConverter(0, '');
        cucxC.loadCustomUnitFromContent(yamlContent);

        return cucxC;
    } catch (error) {
        throw new Error(`Initializing from content failed! ${error}`);
    }
}
