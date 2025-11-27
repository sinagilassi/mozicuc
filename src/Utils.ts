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
     * Loads custom conversion unit from YAML file (Node.js only)
     * @param filePath - YAML file path
     * @returns Custom conversion unit object
     *
     * @remarks
     * This method requires fs module and is intended for Node.js only.
     * For browser environments, use _loadCustomConversionUnitFromContent() with YAML string
     * or import UtilsNode from Utils.node.ts
     */
    protected _loadCustomConversionUnit(filePath: string): CustomUnitFile {
        throw new Error('File I/O is not available in browser environment. Use _loadCustomConversionUnitFromContent() with YAML string instead.');
    }

    /**
     * Loads custom conversion unit from YAML content string
     * Works in both Node.js and browser environments
     * @param yamlContent - YAML content as string
     * @returns Custom conversion unit object
     *
     * @example
     * ```typescript
     * const yamlContent = `
     * CUSTOM-UNIT:
     *   HEAT-CAPACITY:
     *     J/mol.K: 1
     * `;
     * const customUnit = this._loadCustomConversionUnitFromContent(yamlContent);
     * ```
     */
    protected _loadCustomConversionUnitFromContent(yamlContent: string): CustomUnitFile {
        try {
            if (!yamlContent || yamlContent.trim().length === 0) {
                throw new Error('YAML content is empty');
            }

            const customUnit = yaml.load(yamlContent) as CustomUnitFile;
            return customUnit;
        } catch (error) {
            throw new Error(`Loading custom conversion unit from content failed! ${error}`);
        }
    }
}