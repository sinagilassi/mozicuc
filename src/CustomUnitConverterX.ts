import { Utils } from './Utils';
import { Refs } from './Refs';
import { ConversionDict, CustomConversions, ReferenceType } from './types';

export class CustomUnitConverterX extends Utils {
    private value: number;
    private unit: string;
    private referenceFile?: string;

    private _pressureConversions: ConversionDict = {};
    private _temperatureConversions: ConversionDict = {};
    private _customConversions: ConversionDict = {};
    private _customConversionsFull: CustomConversions = { 'CUSTOM': {} };

    private refs: Refs;

    constructor(value: number, unit: string, referenceFile?: string) {
        super();
        this.value = value;
        this.unit = unit.trim();
        this.referenceFile = referenceFile;

        this.refs = new Refs();
        this._pressureConversions = this.refs.pressureConversionsRef;
        this._temperatureConversions = this.refs.temperatureConversionsRef;
    }

    /**
     * Checks if the reference is valid
     */
    checkReference(reference: string, asObject: boolean = false): ConversionDict | Array<{ unit: string, value: number }> {
        try {
            let ref = reference.trim().toUpperCase();
            let subReference: string | null = null;

            if (ref.includes('::')) {
                const parts = ref.split('::');
                ref = parts[1];
                subReference = ref;
            }

            const refs: { [key: string]: ConversionDict } = {
                'PRESSURE': this._pressureConversions,
                'TEMPERATURE': this._temperatureConversions,
                'CUSTOM': this._customConversionsFull['CUSTOM']
            };

            const customKeys = Object.keys(this._customConversionsFull);
            const allKeys = [...new Set([...Object.keys(refs), ...customKeys])];

            if (!allKeys.includes(ref)) {
                throw new Error('Reference not found');
            }

            let res: ConversionDict;
            if (subReference) {
                res = this._customConversionsFull[subReference];
            } else {
                res = refs[ref];
            }

            if (asObject) {
                return res;
            } else {
                return Object.entries(res).map(([unit, value]) => ({ unit, value }));
            }
        } catch (error) {
            throw new Error(`Checking ${reference} failed! ${error}`);
        }
    }

    /**
     * Finds the conversion reference type
     */
    findReference(fromUnit: string, toUnit: string): ReferenceType {
        try {
            if (fromUnit in this._pressureConversions && toUnit in this._pressureConversions) {
                return 'PRESSURE';
            } else if (fromUnit in this._temperatureConversions && toUnit in this._temperatureConversions) {
                return 'TEMPERATURE';
            } else if (fromUnit in this._customConversions && toUnit in this._customConversions) {
                return 'CUSTOM';
            } else {
                for (const [key, value] of Object.entries(this._customConversionsFull)) {
                    if (fromUnit in value && toUnit in value) {
                        return 'CUSTOM';
                    }
                }
            }

            throw new Error('Conversion units not found');
        } catch (error) {
            throw new Error(`Finding reference failed! ${error}`);
        }
    }

    /**
     * Checks conversion block
     */
    checkConversionBlock(conversionBlock: string) {
        try {
            return this.parseConversionBlock(conversionBlock);
        } catch (error) {
            throw new Error(`Checking conversion block failed! ${error}`);
        }
    }

    /**
     * Converts through a unit conversion block
     * @param value - value to convert
     * @param unitConversionBlock - conversion block (e.g., "bar => psi")
     * @param reference - optional reference type
     */
    to(value: number, unitConversionBlock: string, reference?: ReferenceType): number {
        try {
            const { fromUnit, toUnit } = this.checkConversionBlock(unitConversionBlock);
            return this.convert(value, fromUnit, toUnit, reference);
        } catch (error) {
            throw new Error(`Conversion failed! ${error}`);
        }
    }

    /**
     * Converts from one unit to another
     * @param value - value to convert
     * @param fromUnit - source unit
     * @param toUnit - target unit
     * @param reference - optional reference type
     */
    fromTo(value: number, fromUnit: string, toUnit: string, reference?: ReferenceType): number {
        try {
            return this.convert(value, fromUnit, toUnit, reference);
        } catch (error) {
            throw new Error(`Conversion failed! ${error}`);
        }
    }

    /**
     * Main conversion method
     */
    convert(value: number, fromUnit: string, toUnit: string, reference?: ReferenceType): number {
        try {
            const ref = reference ? reference.toUpperCase() : this.findReference(fromUnit, toUnit);

            const refMethods: { [key: string]: (v: number, f: string, t: string) => number } = {
                'PRESSURE': (v, f, t) => this.convertPressure(v, f, t),
                'TEMPERATURE': (v, f, t) => this.convertTemperature(v, f, t),
                'CUSTOM': (v, f, t) => this.convertCustom(v, f, t)
            };

            if (!(ref in refMethods)) {
                throw new Error('Reference not found');
            }

            return refMethods[ref](value, fromUnit, toUnit);
        } catch (error) {
            throw new Error(`Setting conversion function failed! ${error}`);
        }
    }

    /**
     * Converts pressure
     */
    private convertPressure(value: number, fromUnit: string, toUnit: string): number {
        try {
            return value / this._pressureConversions[fromUnit] * this._pressureConversions[toUnit];
        } catch (error) {
            throw new Error(`Pressure conversion failed! ${error}`);
        }
    }

    /**
     * Converts temperature
     */
    private convertTemperature(value: number, fromUnit: string, toUnit: string): number {
        try {
            let tempValue = value;

            // Convert to Celsius first
            if (fromUnit === 'F') {
                tempValue = (tempValue - this._temperatureConversions[fromUnit]) * 5 / 9;
            } else if (fromUnit === 'K') {
                tempValue = tempValue + this._temperatureConversions[fromUnit];
            } else if (fromUnit === 'R') {
                tempValue = (tempValue - this._temperatureConversions[fromUnit]) * 5 / 9;
            }

            // Convert from Celsius to target unit
            if (toUnit === 'F') {
                return tempValue * 9 / 5 + this._temperatureConversions[toUnit];
            } else if (toUnit === 'K') {
                return tempValue - this._temperatureConversions[toUnit];
            } else if (toUnit === 'R') {
                return tempValue * 9 / 5 + this._temperatureConversions[toUnit];
            } else {
                return tempValue;
            }
        } catch (error) {
            throw new Error(`Temperature conversion failed! ${error}`);
        }
    }

    /**
     * Adds a custom unit
     */
    addCustomUnit(unit: string, conversionFactor: number): boolean {
        try {
            this._customConversions[unit] = conversionFactor;
            return true;
        } catch (error) {
            throw new Error(`Adding new unit failed! ${error}`);
        }
    }

    /**
     * Loads custom units from YAML file
     */
    loadCustomUnit(filePath: string): CustomConversions {
        try {
            this.referenceFile = filePath;
            const customUnit = this._loadCustomConversionUnit(filePath);

            if (Object.keys(customUnit).length === 0) {
                throw new Error('Custom unit file is empty');
            }

            if (!('CUSTOM-UNIT' in customUnit)) {
                throw new Error("Key 'CUSTOM-UNIT' not found");
            }

            for (const [key, value] of Object.entries(customUnit['CUSTOM-UNIT'])) {
                this._customConversionsFull[key.trim()] = value;
            }

            return this._customConversionsFull;
        } catch (error) {
            throw new Error(`Loading custom unit failed! ${error}`);
        }
    }

    /**
     * Converts using custom units
     */
    private convertCustom(value: number, fromUnit: string, toUnit: string): number {
        try {
            for (const [key, customUnitDict] of Object.entries(this._customConversionsFull)) {
                if (fromUnit in customUnitDict && toUnit in customUnitDict) {
                    return value / customUnitDict[fromUnit] * customUnitDict[toUnit];
                }
            }

            throw new Error('Custom conversion units not found');
        } catch (error) {
            throw new Error(`Conversion failed! ${error}`);
        }
    }
}