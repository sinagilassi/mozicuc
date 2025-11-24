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
        'g/cm3': 1.0,
        'kg/dm3': 1.0,
        't/m3': 1.0,
        'kg/m3': 1000.0,
        'lb/ft3': 62.42796,
        'lb/in3': 0.0361273,
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
        'kcal/kg': 0.000239006,
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
        'kcal/kg': 0.000239006,
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
        'kJ/kmol.K': 1.0,
    };

    // Volume Conversions
    private static readonly _volumeConversionsRef: ConversionDict = {
        'm3': 1.0,
        'L': 1000.0,
        'cm3': 1000000.0,
        'dm3': 1000.0,
        'ft3': 35.3147,
        'in3': 61023.7,
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

    // Force Conversions
    private static readonly _forceConversionsRef: ConversionDict = {
        'N': 1.0,
        'kN': 0.001,
        'lbf': 0.224809,
        'kgf': 0.101972,
        'dyn': 100000,
        'ozf': 35.274
    };

    // Reference dictionary
    protected readonly _reference: { [key: string]: ConversionDict } = {
        'PRESSURE': Refs._pressureConversionsRef,
        'TEMPERATURE': Refs._temperatureConversionsRef,
        'DENSITY': Refs._densityConversionsRef,
        'ENERGY': Refs._energyConversionsRef,
        'GIBBS_FREE_ENERGY': Refs._gibbsFreeEnergyConversionsRef,
        'ENTHALPY': Refs._enthalpyConversionsRef,
        'HEAT_CAPACITY': Refs._heatCapacityConversionsRef,
        'VOLUME': Refs._volumeConversionsRef,
        'MASS': Refs._massConversionsRef,
        'POWER': Refs._powerConversionsRef,
        'LENGTH': Refs._lengthConversionsRef,
        'FORCE': Refs._forceConversionsRef
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

    get energyConversionsRef(): ConversionDict {
        return Refs._energyConversionsRef;
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

    get volumeConversionsRef(): ConversionDict {
        return Refs._volumeConversionsRef;
    }

    get massConversionsRef(): ConversionDict {
        return Refs._massConversionsRef;
    }

    get powerConversionsRef(): ConversionDict {
        return Refs._powerConversionsRef;
    }

    get lengthConversionsRef(): ConversionDict {
        return Refs._lengthConversionsRef;
    }

    get forceConversionsRef(): ConversionDict {
        return Refs._forceConversionsRef;
    }
}