import { Utils } from './Utils';
import { Refs } from './Refs';
import { ConversionDict, CustomConversions, ReferenceType } from './types';

export class CustomUnitConverter extends Utils {
    private value: number;
    private unit: string;
    private referenceFile: string;

    // Conversion dictionaries
    private _pressureConversions: ConversionDict = {};
    private _temperatureConversions: ConversionDict = {};
    private _densityConversions: ConversionDict = {};
    private _energyConversions: ConversionDict = {};
    private _gibbsFreeEnergyConversions: ConversionDict = {};
    private _enthalpyConversions: ConversionDict = {};
    private _heatCapacityConversions: ConversionDict = {};
    private _volumeConversions: ConversionDict = {};
    private _massConversions: ConversionDict = {};
    private _powerConversions: ConversionDict = {};
    private _lengthConversions: ConversionDict = {};
    private _forceConversions: ConversionDict = {};
    private _customConversions: ConversionDict = {};
    private _customConversionsFull: CustomConversions = { 'CUSTOM': {} };

    private refs: Refs;
    protected _reference: { [key: string]: ConversionDict };

    constructor(value: number, unit: string, referenceFile: string = '') {
        super();
        this.value = value;
        this.unit = unit.trim();
        this.referenceFile = referenceFile;

        // Initialize Refs
        this.refs = new Refs();
        this._reference = (this.refs as any)._reference;

        // Initialize conversion dictionaries
        this._pressureConversions = this.refs.pressureConversionsRef;
        this._temperatureConversions = this.refs.temperatureConversionsRef;
        this._densityConversions = this.refs.densityConversionsRef;
        this._energyConversions = this.refs.energyConversionsRef;
        this._gibbsFreeEnergyConversions = this.refs.gibbsFreeEnergyConversionsRef;
        this._enthalpyConversions = this.refs.enthalpyConversionsRef;
        this._heatCapacityConversions = this.refs.heatCapacityConversionsRef;
        this._volumeConversions = this.refs.volumeConversionsRef;
        this._massConversions = this.refs.massConversionsRef;
        this._powerConversions = this.refs.powerConversionsRef;
        this._lengthConversions = this.refs.lengthConversionsRef;
        this._forceConversions = this.refs.forceConversionsRef;
    }

    /**
     * Checks if the reference is valid
     * @param reference - reference name
     * @param asObject - if true, return object; else return array for table display
     * @returns Reference details
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
                'CUSTOM': this._customConversionsFull['CUSTOM'],
                'DENSITY': this._densityConversions,
                'ENERGY': this._energyConversions,
                'GIBBS_FREE_ENERGY': this._gibbsFreeEnergyConversions,
                'ENTHALPY': this._enthalpyConversions,
                'HEAT_CAPACITY': this._heatCapacityConversions,
                'VOLUME': this._volumeConversions,
                'MASS': this._massConversions,
                'POWER': this._powerConversions,
                'LENGTH': this._lengthConversions,
                'FORCE': this._forceConversions
            };

            const customKeys = Object.keys(this._customConversionsFull);
            const allKeys = [...new Set([...Object.keys(refs), ...customKeys])];

            if (!allKeys.includes(ref)) {
                throw new Error('Reference not found');
            }

            let res: ConversionDict;
            if (subReference) {
                res = this._customConversionsFull[subReference];
            } else if (ref === 'CUSTOM') {
                res = this._customConversionsFull['CUSTOM'];
            } else {
                res = refs[ref];
            }

            if (asObject) {
                return res;
            } else {
                return Object.entries(res).map(([unit, value]) => ({ unit, value }));
            }
        } catch (error) {
            throw new Error(`Checking reference failed! ${error}`);
        }
    }

    /**
     * Finds the conversion reference type
     * @param fromUnit - from unit
     * @param toUnit - to unit
     * @returns Reference type
     */
    findReference(fromUnit: string, toUnit: string): ReferenceType {
        try {
            if (fromUnit in this._pressureConversions && toUnit in this._pressureConversions) {
                return 'PRESSURE';
            } else if (fromUnit in this._temperatureConversions && toUnit in this._temperatureConversions) {
                return 'TEMPERATURE';
            } else if (fromUnit in this._densityConversions && toUnit in this._densityConversions) {
                return 'DENSITY';
            } else if (fromUnit in this._energyConversions && toUnit in this._energyConversions) {
                return 'ENERGY';
            } else if (fromUnit in this._gibbsFreeEnergyConversions && toUnit in this._gibbsFreeEnergyConversions) {
                return 'GIBBS_FREE_ENERGY';
            } else if (fromUnit in this._enthalpyConversions && toUnit in this._enthalpyConversions) {
                return 'ENTHALPY';
            } else if (fromUnit in this._heatCapacityConversions && toUnit in this._heatCapacityConversions) {
                return 'HEAT_CAPACITY';
            } else if (fromUnit in this._volumeConversions && toUnit in this._volumeConversions) {
                return 'VOLUME';
            } else if (fromUnit in this._massConversions && toUnit in this._massConversions) {
                return 'MASS';
            } else if (fromUnit in this._powerConversions && toUnit in this._powerConversions) {
                return 'POWER';
            } else if (fromUnit in this._lengthConversions && toUnit in this._lengthConversions) {
                return 'LENGTH';
            } else if (fromUnit in this._forceConversions && toUnit in this._forceConversions) {
                return 'FORCE';
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
     * @param conversionBlock - conversion block (e.g., "bar => psi")
     * @returns Parsed conversion block
     */
    checkConversionBlock(conversionBlock: string) {
        try {
            return this.parseConversionBlock(conversionBlock);
        } catch (error) {
            throw new Error(`Checking conversion block failed! ${error}`);
        }
    }

    /**
     * Converts the value to the target unit
     * @param toUnit - target unit
     * @param reference - optional reference type
     * @returns Converted value
     */
    convert(toUnit: string, reference?: ReferenceType): number {
        try {
            const ref = reference ? reference.toUpperCase() : this.findReference(this.unit, toUnit);

            const refMethods: { [key: string]: (unit: string) => number } = {
                'PRESSURE': (u) => this.convertPressure(u),
                'TEMPERATURE': (u) => this.convertTemperature(u),
                'DENSITY': (u) => this.convertX(u, 'DENSITY'),
                'ENERGY': (u) => this.convertX(u, 'ENERGY'),
                'GIBBS_FREE_ENERGY': (u) => this.convertX(u, 'GIBBS_FREE_ENERGY'),
                'ENTHALPY': (u) => this.convertX(u, 'ENTHALPY'),
                'HEAT_CAPACITY': (u) => this.convertX(u, 'HEAT_CAPACITY'),
                'VOLUME': (u) => this.convertX(u, 'VOLUME'),
                'MASS': (u) => this.convertX(u, 'MASS'),
                'POWER': (u) => this.convertX(u, 'POWER'),
                'LENGTH': (u) => this.convertX(u, 'LENGTH'),
                'FORCE': (u) => this.convertX(u, 'FORCE'),
                'CUSTOM': (u) => this.convertCustom(u)
            };

            if (!(ref in refMethods)) {
                throw new Error('Reference not found');
            }

            return refMethods[ref](toUnit);
        } catch (error) {
            throw new Error(`Setting conversion function failed! ${error}`);
        }
    }

    /**
     * Generic conversion method
     */
    private convertX(toUnit: string, referenceName: string): number {
        try {
            const fromFactor = this._reference[referenceName][this.unit];
            const toFactor = this._reference[referenceName][toUnit];
            return this.value / fromFactor * toFactor;
        } catch (error) {
            throw new Error(`Conversion failed! ${error}`);
        }
    }

    /**
     * Converts pressure
     */
    private convertPressure(toUnit: string): number {
        try {
            const fromFactor = this._pressureConversions[this.unit];
            const toFactor = this._pressureConversions[toUnit];
            return this.value / fromFactor * toFactor;
        } catch (error) {
            throw new Error(`Pressure conversion failed! ${error}`);
        }
    }

    /**
     * Converts temperature
     */
    private convertTemperature(toUnit: string): number {
        try {
            let value = this.value;

            // Convert to Celsius first
            if (this.unit === 'F') {
                value = (value - this._temperatureConversions[this.unit]) * 5 / 9;
            } else if (this.unit === 'K') {
                value = value + this._temperatureConversions[this.unit];
            } else if (this.unit === 'R') {
                value = (value - this._temperatureConversions[this.unit]) * 5 / 9;
            }

            // Convert from Celsius to target unit
            if (toUnit === 'F') {
                return value * 9 / 5 + this._temperatureConversions[toUnit];
            } else if (toUnit === 'K') {
                return value - this._temperatureConversions[toUnit];
            } else if (toUnit === 'R') {
                return value * 9 / 5 + this._temperatureConversions[toUnit];
            } else {
                return value;
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
    private convertCustom(toUnit: string): number {
        try {
            for (const [key, customUnitDict] of Object.entries(this._customConversionsFull)) {
                if (this.unit in customUnitDict && toUnit in customUnitDict) {
                    const fromVal = customUnitDict[this.unit];
                    const toVal = customUnitDict[toUnit];
                    return this.value / fromVal * toVal;
                }
            }

            throw new Error('Custom conversion units not found');
        } catch (error) {
            throw new Error(`Conversion failed! ${error}`);
        }
    }
}