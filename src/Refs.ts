import { ConversionDict } from './types';

export class Refs {
    // Pressure Conversions
    private static readonly _pressureConversionsRef: ConversionDict = {
        'bar': 1.0,
        'mbar': 1000.0,
        'ubar': 1000000.0,
        'Pa': 100000.0,
        'hPa': 1000.0,
        'kPa': 100.0,
        'MPa': 0.1,
        'kg/cm2': 1.01972,
        'kg/cm²': 1.01972,
        'kg/cmÂ²': 1.01972,
        'atm': 0.986923,
        'mmHg': 750.062,
        'mmH2O': 10197.162129779,
        'mH2O': 10.197162129779,
        'psi': 14.5038,
        'ftH2O': 33.455256555148,
        'inH2O': 401.865,
        'inHg': 29.53
    };

    // Temperature Conversions
    private static readonly _temperatureConversionsRef: ConversionDict = {
        'C': 0,
        'F': 32,
        'K': -273.15,
        'R': 491.67
    };

    // Density Conversions
    private static readonly _densityConversionsRef: ConversionDict = {
        // mass per volume
        'g/cm3': 1.0,
        'g/cm³': 1.0,
        'g/cmÂ³': 1.0,
        'kg/L': 1.0,
        'g/m3': 1000000.0,
        'g/m³': 1000000.0,
        'g/mÂ³': 1000000.0,
        'kg/dL': 10.0,
        'g/L': 0.001,
        'g/l': 0.001,
        'g/mL': 1.0,
        'g/ml': 1.0,
        'kg/dm3': 1.0,
        'kg/dm³': 1.0,
        'kg/dmÂ³': 1.0,
        't/m3': 1.0,
        't/m³': 1.0,
        't/mÂ³': 1.0,
        'tonne/m3': 1.0,
        'tonne/m³': 1.0,
        'tonne/mÂ³': 1.0,
        'kg/m3': 1000.0,
        'kg/m³': 1000.0,
        'kg/mÂ³': 1000.0,
        'lb/ft3': 62.42796,
        'lb/ft³': 62.42796,
        'lb/ftÂ³': 62.42796,
        'lb/in3': 27.6799,
        'lb/in³': 27.6799,
        'lb/inÂ³': 27.6799,
        'sg': 1.0,
        'oz/gal': 133.526,
        // mole per volume
        'kmol/m3': 1.0,
        'kmol/m³': 1.0,
        'kmol/mÂ³': 1.0,
        'mol/m3': 1000.0,
        'mol/m³': 1000.0,
        'mol/mÂ³': 1000.0,
        'kmol/dm3': 0.001,
        'kmol/dm³': 0.001,
        'kmol/dmÂ³': 0.001,
        'mol/dm3': 1.0,
        'mol/dm³': 1.0,
        'mol/dmÂ³': 1.0,
        'kmol/cm3': 1e-6,
        'kmol/cm³': 1e-6,
        'kmol/cmÂ³': 1e-6,
        'mol/cm3': 0.001,
        'mol/cm³': 0.001,
        'mol/cmÂ³': 0.001,
        'mol/L': 1.0,
        'mol/l': 1.0,
        'M': 1.0,
        'kmol/L': 0.001,
        'kmol/l': 0.001,
        'mol/ft3': 28.3168466,
        'mol/ft³': 28.3168466,
        'mol/ftÂ³': 28.3168466,
        'kmol/ft3': 0.0283168466,
        'kmol/ft³': 0.0283168466,
        'kmol/ftÂ³': 0.0283168466
    };

    // Concentration Conversions (base mol/m3)
    private static readonly _concentrationConversionsRef: ConversionDict = {
        'mol/m3': 1.0,
        'mol/m³': 1.0,
        'mol/mÂ³': 1.0,
        'mol/cm3': 1.0e-6,
        'mol/cm³': 1.0e-6,
        'mol/cmÂ³': 1.0e-6,
        'mol/dm3': 0.001,
        'mol/dm³': 0.001,
        'mol/dmÂ³': 0.001,
        'mol/L': 0.001,
        'mol/l': 0.001,
        'mol/mL': 1.0e-6,
        'mol/ml': 1.0e-6,
        'mol/ft3': 0.0283168466,
        'mol/ft³': 0.0283168466,
        'mol/ftÂ³': 0.0283168466,
        'kmol/m3': 0.001,
        'kmol/m³': 0.001,
        'kmol/mÂ³': 0.001,
        'M': 0.001,
        'mM': 1.0,
        'uM': 1000.0,
        'μM': 1000.0,
        'µM': 1000.0,
        'nM': 1.0e6,
        'pM': 1.0e9
    };

    // Energy Conversions
    private static readonly _energyConversionsRef: ConversionDict = {
        'J': 1.0,
        'kJ': 0.001,
        'cal': 0.239006,
        'kcal': 0.000239006,
        'Wh': 0.000277778,
        'kWh': 2.77778e-7,
        'BTU': 0.000947817,
        'ft-lb': 0.737562
    };

    // Energy Rate Conversions
    private static readonly _energyRateConversionsRef: ConversionDict = {
        'W': 1.0,
        'kW': 0.001,
        'MW': 1e-6,
        'GW': 1e-9,
        'HP': 0.00134102,
        'BTU/s': 0.000947817,
        'BTU/min': 0.056869,
        'BTU/h': 3.41214,
        'ft-lb/min': 0.737562,
        'cal/s': 0.239006,
        'kcal/s': 0.000239006,
        'cal/min': 0.00398344,
        'kcal/min': 3.98344e-6
    };

    // Gibbs Free Energy Conversions
    private static readonly _gibbsFreeEnergyConversionsRef: ConversionDict = {
        'J/mol': 1.0,
        'kJ/mol': 0.001,
        'J/kmol': 1000.0,
        'cal/mol': 0.239005736,
        'kcal/mol': 0.0002390057,
        'kcal/kmol': 0.2390057,
        'cal/kmol': 239.0057,
        'J/kg': 1.0,
        'kJ/kg': 0.001,
        'cal/g': 0.000239006,
        'kcal/g': 2.39006e-7,
        'J/g': 0.001,
        'kJ/g': 1.0e-6,
        'cal/kg': 0.239006,
        'kcal/kg': 0.000239006
    };

    // Enthalpy Conversions
    private static readonly _enthalpyConversionsRef: ConversionDict = {
        'J/mol': 1.0,
        'kJ/mol': 0.001,
        'J/kmol': 1000.0,
        'cal/mol': 0.239005736,
        'kcal/mol': 0.0002390057,
        'kcal/kmol': 0.2390057,
        'cal/kmol': 239.0057,
        'J/kg': 1.0,
        'kJ/kg': 0.001,
        'cal/g': 0.000239006,
        'kcal/g': 2.39006e-7,
        'J/g': 0.001,
        'kJ/g': 1.0e-6,
        'cal/kg': 0.239006,
        'kcal/kg': 0.000239006
    };

    // Heat Capacity Conversions
    private static readonly _heatCapacityConversionsRef: ConversionDict = {
        'J/kg.K': 1.0,
        'kJ/kg.K': 0.001,
        'cal/kg.K': 0.239006,
        'kcal/kg.K': 0.000239006,
        'cal/g.K': 0.000239006,
        'J/g.K': 0.001,
        'kJ/g.K': 1.0e-6,
        'BTU/lb.F': 0.000238846,
        'J/mol.K': 1.0,
        'kJ/mol.K': 0.001,
        'cal/mol.K': 0.239005736,
        'kcal/mol.K': 0.0002390057,
        'cal/kmol.K': 239.0057,
        'kcal/kmol.K': 0.2390057,
        'J/kmol.K': 1000.0,
        'kJ/kmol.K': 1.0
    };

    // Heat Transfer Coefficient Conversions
    private static readonly _heatTransferCoefficientRef: ConversionDict = {
        'W/m2.K': 1.0,
        'W/m².K': 1.0,
        'W/mÂ².K': 1.0,
        'W/m2K': 1.0,
        'W/m²K': 1.0,
        'W/mÂ²K': 1.0,
        'kW/m2.K': 0.001,
        'kW/m².K': 0.001,
        'kW/mÂ².K': 0.001,
        'W/cm2.K': 1.0e-4,
        'W/cm².K': 1.0e-4,
        'W/cmÂ².K': 1.0e-4,
        'W/mm2.K': 1.0e-6,
        'W/mm².K': 1.0e-6,
        'W/mmÂ².K': 1.0e-6,
        'W/ft2.K': 0.092903,
        'W/ft².K': 0.092903,
        'W/ftÂ².K': 0.092903,
        'BTU/(hr.ft2.F)': 0.1761101838,
        'BTU/(hr.ft².F)': 0.1761101838,
        'BTU/(hr.ftÂ².F)': 0.1761101838,
        'BTU/hr.ft2.F': 0.1761101838,
        'kcal/(hr.m2.K)': 0.859845,
        'kcal/(hr.m².K)': 0.859845,
        'kcal/(hr.mÂ².K)': 0.859845
    };

    // Volume Conversions
    private static readonly _volumeConversionsRef: ConversionDict = {
        'm3': 1.0,
        'm³': 1.0,
        'mÂ³': 1.0,
        'L': 1000.0,
        'cm3': 1000000.0,
        'cm³': 1000000.0,
        'cmÂ³': 1000000.0,
        'dm3': 1000.0,
        'dm³': 1000.0,
        'dmÂ³': 1000.0,
        'ft3': 35.3147,
        'ft³': 35.3147,
        'ftÂ³': 35.3147,
        'in3': 61023.7,
        'in³': 61023.7,
        'inÂ³': 61023.7,
        'gal(US)': 264.172,
        'gal(UK)': 219.969
    };

    // Mass Conversions
    private static readonly _massConversionsRef: ConversionDict = {
        'kg': 1.0,
        'g': 1000.0,
        'mg': 1000000.0,
        'lb': 2.20462,
        'oz': 35.274,
        't': 0.001,
        'st': 0.157473
    };

    // Molecular Weight Conversions (base g/mol)
    private static readonly _molecularWeightConversionsRef: ConversionDict = {
        'g/mol': 1.0,
        'kg/kmol': 1.0,
        'lb/lbmol': 1.0,
        'kg/mol': 0.001,
        'mg/mol': 1000.0,
        'g/kmol': 1000.0,
        'lb/mol': 0.00220462
    };

    // Power Conversions
    private static readonly _powerConversionsRef: ConversionDict = {
        'W': 1.0,
        'kW': 0.001,
        'MW': 1e-6,
        'GW': 1e-9,
        'HP': 0.00134102,
        'BTU/h': 3.41214,
        'ft-lb/min': 0.737562
    };

    // Length Conversions
    private static readonly _lengthConversionsRef: ConversionDict = {
        'm': 1.0,
        'cm': 100.0,
        'mm': 1000.0,
        'km': 0.001,
        'ft': 3.28084,
        'in': 39.3701,
        'yd': 1.09361,
        'mi': 0.000621371
    };

    // Area Conversions
    private static readonly _areaConversionsRef: ConversionDict = {
        'm2': 1.0,
        'm²': 1.0,
        'mÂ²': 1.0,
        'cm2': 10000.0,
        'cm²': 10000.0,
        'cmÂ²': 10000.0,
        'mm2': 1.0e6,
        'mm²': 1.0e6,
        'mmÂ²': 1.0e6,
        'km2': 1.0e-6,
        'km²': 1.0e-6,
        'kmÂ²': 1.0e-6,
        'dm2': 100.0,
        'dm²': 100.0,
        'dmÂ²': 100.0,
        'ft2': 10.7639,
        'ft²': 10.7639,
        'ftÂ²': 10.7639,
        'in2': 1550.0031,
        'in²': 1550.0031,
        'inÂ²': 1550.0031,
        'yd2': 1.19599,
        'yd²': 1.19599,
        'ydÂ²': 1.19599,
        'ha': 1.0e-4,
        'hectare': 1.0e-4,
        'acre': 2.47105e-4
    };

    // Force Conversions
    private static readonly _forceConversionsRef: ConversionDict = {
        'N': 1.0,
        'kN': 0.001,
        'lbf': 0.224809,
        'kgf': 0.101972,
        'dyn': 100000,
        'ozf': 35.274
    };

    // Viscosity Conversions
    private static readonly _viscosityConversionsRef: ConversionDict = {
        'P': 1.0,
        'cP': 100.0,
        'Pa.s': 0.1,
        'mPa.s': 100.0,
        'g/cm.s': 1.0,
        'N.s/m2': 0.1,
        'N.s/m²': 0.1,
        'N.s/mÂ²': 0.1,
        'μP': 1e6,
        'µP': 1e6,
        'Î¼P': 1e6,
        'lb/ft.s': 0.671968,
        'lb/ft.h': 241.908
    };

    // Flow Rate Conversions
    private static readonly _flowRateConversionsRef: ConversionDict = {
        // molar basis
        'mol/s': 1.0,
        'mmol/s': 1000.0,
        'kmol/s': 0.001,
        'mol/min': 60.0,
        'kmol/min': 0.06,
        'mol/h': 3600.0,
        'mol/hr': 3600.0,
        'kmol/h': 3.6,
        'kmol/hr': 3.6,
        'kmol/day': 86400.0,
        // mass basis
        'kg/s': 1.0,
        'g/s': 1000.0,
        'kg/min': 60.0,
        'g/min': 60000.0,
        'kg/h': 3600.0,
        'kg/hr': 3600.0,
        'g/h': 3600000.0,
        'g/hr': 3600000.0,
        'tonne/s': 0.001,
        'lb/s': 453.592,
        'lbm/s': 453.592,
        'slug/s': 14.5939,
        'lbm/min': 27215.4,
        'slug/min': 875.632,
        'lbm/h': 1632924.0,
        'lbm/hr': 1632924.0,
        'slug/h': 52537.9,
        'slug/hr': 52537.9,
        'tonne/day': 86.4,
        'lbm/day': 39.4624e6,
        'slug/day': 1260912.0,
        'tonne/h': 3.6,
        'tonne/hr': 3.6,
        // volume basis
        'm3/s': 1.0,
        'm³/s': 1.0,
        'mÂ³/s': 1.0,
        'L/s': 1000.0,
        'l/s': 1000.0,
        'cm3/s': 1e6,
        'cm³/s': 1e6,
        'cmÂ³/s': 1e6,
        'mL/s': 1e6,
        'm3/min': 60.0,
        'm³/min': 60.0,
        'mÂ³/min': 60.0,
        'L/min': 60000.0,
        'l/min': 60000.0,
        'mL/min': 6e7,
        'm3/h': 3600.0,
        'm³/h': 3600.0,
        'mÂ³/h': 3600.0,
        'm3/hr': 3600.0,
        'm³/hr': 3600.0,
        'mÂ³/hr': 3600.0,
        'L/h': 3600000.0,
        'L/hr': 3600000.0,
        'l/h': 3600000.0,
        'l/hr': 3600000.0,
        'mL/h': 3.6e9,
        'ft3/s': 35.3147,
        'ft³/s': 35.3147,
        'ftÂ³/s': 35.3147,
        'ft3/min': 2118.88,
        'ft³/min': 2118.88,
        'ftÂ³/min': 2118.88,
        'ft3/h': 127132.8,
        'ft³/h': 127132.8,
        'ftÂ³/h': 127132.8,
        'ft3/hr': 127132.8,
        'ft³/hr': 127132.8,
        'ftÂ³/hr': 127132.8,
        'gal/s': 264.172,
        'gal/min': 15850.3,
        'bbl/day': 1.84013e-6,
        'barrel/day': 1.84013e-6
    };

    // Reference dictionary
    protected readonly _reference: { [key: string]: ConversionDict } = {
        'PRESSURE': Refs._pressureConversionsRef,
        'TEMPERATURE': Refs._temperatureConversionsRef,
        'DENSITY': Refs._densityConversionsRef,
        'CONCENTRATION': Refs._concentrationConversionsRef,
        'ENERGY': Refs._energyConversionsRef,
        'ENERGY_RATE': Refs._energyRateConversionsRef,
        'GIBBS_FREE_ENERGY': Refs._gibbsFreeEnergyConversionsRef,
        'ENTHALPY': Refs._enthalpyConversionsRef,
        'HEAT_CAPACITY': Refs._heatCapacityConversionsRef,
        'HEAT_TRANSFER_COEFFICIENT': Refs._heatTransferCoefficientRef,
        'VOLUME': Refs._volumeConversionsRef,
        'MASS': Refs._massConversionsRef,
        'MOLECULAR_WEIGHT': Refs._molecularWeightConversionsRef,
        'POWER': Refs._powerConversionsRef,
        'LENGTH': Refs._lengthConversionsRef,
        'AREA': Refs._areaConversionsRef,
        'FORCE': Refs._forceConversionsRef,
        'VISCOSITY': Refs._viscosityConversionsRef,
        'FLOW_RATE': Refs._flowRateConversionsRef,

        // Deprecated compatibility aliases
        'DENSITY_MOLAR_UNITS': Refs._getMolarUnits(Refs._densityConversionsRef),
        'DENSITY_MASS_UNITS': Refs._getMassUnits(Refs._densityConversionsRef),
        'GIBBS_FREE_ENERGY_MOLAR_UNITS': Refs._getMolarUnits(Refs._gibbsFreeEnergyConversionsRef),
        'GIBBS_FREE_ENERGY_MASS_UNITS': Refs._getMassUnits(Refs._gibbsFreeEnergyConversionsRef),
        'ENTHALPY_MOLAR_UNITS': Refs._getMolarUnits(Refs._enthalpyConversionsRef),
        'ENTHALPY_MASS_UNITS': Refs._getMassUnits(Refs._enthalpyConversionsRef),
        'HEAT_CAPACITY_MOLAR_UNITS': Refs._getMolarUnits(Refs._heatCapacityConversionsRef),
        'HEAT_CAPACITY_MASS_UNITS': Refs._getMassUnits(Refs._heatCapacityConversionsRef),
        'FLOW_RATE_MOLAR_UNITS': Refs._getMolarUnits(Refs._flowRateConversionsRef),
        'FLOW_RATE_MASS_UNITS': Refs._getMassUnits(Refs._flowRateConversionsRef),
        'FLOW_RATE_VOLUME_UNITS': Refs._getVolumeUnits(Refs._flowRateConversionsRef)
    };

    get pressureConversionsRef(): ConversionDict {
        return Refs._pressureConversionsRef;
    }

    get temperatureConversionsRef(): ConversionDict {
        return Refs._temperatureConversionsRef;
    }

    get densityConversionsRef(): ConversionDict {
        return Refs._densityConversionsRef;
    }

    get concentrationConversionsRef(): ConversionDict {
        return Refs._concentrationConversionsRef;
    }

    get energyConversionsRef(): ConversionDict {
        return Refs._energyConversionsRef;
    }

    get energyRateConversionsRef(): ConversionDict {
        return Refs._energyRateConversionsRef;
    }

    get gibbsFreeEnergyConversionsRef(): ConversionDict {
        return Refs._gibbsFreeEnergyConversionsRef;
    }

    get enthalpyConversionsRef(): ConversionDict {
        return Refs._enthalpyConversionsRef;
    }

    get heatCapacityConversionsRef(): ConversionDict {
        return Refs._heatCapacityConversionsRef;
    }

    get heatTransferCoefficientRef(): ConversionDict {
        return Refs._heatTransferCoefficientRef;
    }

    get volumeConversionsRef(): ConversionDict {
        return Refs._volumeConversionsRef;
    }

    get massConversionsRef(): ConversionDict {
        return Refs._massConversionsRef;
    }

    get molecularWeightConversionsRef(): ConversionDict {
        return Refs._molecularWeightConversionsRef;
    }

    get powerConversionsRef(): ConversionDict {
        return Refs._powerConversionsRef;
    }

    get lengthConversionsRef(): ConversionDict {
        return Refs._lengthConversionsRef;
    }

    get areaConversionsRef(): ConversionDict {
        return Refs._areaConversionsRef;
    }

    get forceConversionsRef(): ConversionDict {
        return Refs._forceConversionsRef;
    }

    get viscosityConversionsRef(): ConversionDict {
        return Refs._viscosityConversionsRef;
    }

    get flowRateConversionsRef(): ConversionDict {
        return Refs._flowRateConversionsRef;
    }

    static _getMolarUnits(
        data: ConversionDict | ConversionDict[] | Array<{ unit: string; value: number }>
    ): ConversionDict {
        const molarUnits: ConversionDict = {};
        const molarSuffixes = ['mol', 'kmol', 'M'];
        const dataArray = Array.isArray(data) ? data : [data];

        const mergedData: ConversionDict = {};
        for (const dict of dataArray) {
            if ('unit' in dict && 'value' in dict) {
                mergedData[dict.unit] = dict.value;
            } else {
                Object.assign(mergedData, dict);
            }
        }

        for (const unit of Object.keys(mergedData)) {
            for (const suffix of molarSuffixes) {
                if (unit.includes(suffix)) {
                    molarUnits[unit] = mergedData[unit];
                    break;
                }
            }
        }

        return molarUnits;
    }

    static _getMassUnits(
        data: ConversionDict | ConversionDict[] | Array<{ unit: string; value: number }>
    ): ConversionDict {
        const massUnits: ConversionDict = {};
        const massSuffixes = ['g', 'kg', 'lb', 'tonne', 'ton', 'slug', 'oz', 'st'];
        const dataArray = Array.isArray(data) ? data : [data];

        const mergedData: ConversionDict = {};
        for (const dict of dataArray) {
            if ('unit' in dict && 'value' in dict) {
                mergedData[dict.unit] = dict.value;
            } else {
                Object.assign(mergedData, dict);
            }
        }

        for (const unit of Object.keys(mergedData)) {
            for (const suffix of massSuffixes) {
                if (unit.includes(suffix)) {
                    massUnits[unit] = mergedData[unit];
                    break;
                }
            }
        }

        return massUnits;
    }

    static _getVolumeUnits(
        data: ConversionDict | ConversionDict[] | Array<{ unit: string; value: number }>
    ): ConversionDict {
        const volumeUnits: ConversionDict = {};
        const volumeSuffixes = [
            'm3', 'm³', 'mÂ³', 'L', 'l', 'cm3', 'cm³', 'cmÂ³',
            'dm3', 'dm³', 'dmÂ³', 'ft3', 'ft³', 'ftÂ³', 'in3',
            'in³', 'inÂ³', 'gal', 'bbl', 'barrel'
        ];
        const dataArray = Array.isArray(data) ? data : [data];

        const mergedData: ConversionDict = {};
        for (const dict of dataArray) {
            if ('unit' in dict && 'value' in dict) {
                mergedData[dict.unit] = dict.value;
            } else {
                Object.assign(mergedData, dict);
            }
        }

        for (const unit of Object.keys(mergedData)) {
            for (const suffix of volumeSuffixes) {
                if (unit.includes(suffix)) {
                    volumeUnits[unit] = mergedData[unit];
                    break;
                }
            }
        }

        return volumeUnits;
    }
}
