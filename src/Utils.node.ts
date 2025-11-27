/**
 * TSCUC - Node.js Specific Utils
 * File I/O utilities that are Node.js only
 */

import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { ConversionBlock, CustomUnitFile } from './types';
import { Utils } from './Utils';

export class UtilsNode extends Utils {
    /**
     * Loads custom conversion unit from YAML file (Node.js only)
     * @param filePath - YAML file path
     * @returns Custom conversion unit object
     */
    loadCustomConversionUnitFromFile(filePath: string): CustomUnitFile {
        try {
            if (!fs.existsSync(filePath)) {
                throw new Error('File not found');
            }

            if (!filePath.endsWith('.yml') && !filePath.endsWith('.yaml')) {
                throw new Error('File format not supported');
            }

            const fileContents = fs.readFileSync(filePath, 'utf8');
            const customUnit = yaml.load(fileContents) as CustomUnitFile;

            return customUnit;
        } catch (error) {
            throw new Error(`Loading custom conversion unit from file failed! ${error}`);
        }
    }
}
