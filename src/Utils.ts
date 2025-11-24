import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { ConversionBlock, CustomUnitFile } from './types';

export class Utils {
    /**
     * Parses conversion string
     * @param inputStr - conversion string (e.g., "bar => psi")
     * @returns Conversion block with fromUnit, operator, and toUnit
     */
    protected parseConversionBlock(inputStr: string): ConversionBlock {
        try {
            const trimmedStr = inputStr.trim();
            const pattern = /^(.*?)\s*=>\s*(.*)$/;
            const match = trimmedStr.match(pattern);

            if (match) {
                return {
                    fromUnit: match[1].trim(),
                    operator: '=>',
                    toUnit: match[2].trim()
                };
            } else {
                throw new Error("Input string does not contain '=>'");
            }
        } catch (error) {
            throw new Error(`Parsing conversion failed! ${error}`);
        }
    }

    /**
     * Loads custom conversion unit from YAML file
     * @param filePath - YAML file path
     * @returns Custom conversion unit object
     */
    protected _loadCustomConversionUnit(filePath: string): CustomUnitFile {
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
            throw new Error(`Loading custom conversion unit failed! ${error}`);
        }
    }
}