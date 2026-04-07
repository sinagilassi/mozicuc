// Type definitions

export interface ConversionDict {
    [key: string]: number;
}

export interface CustomConversions {
    [category: string]: ConversionDict;
}

export type ReferenceType =
    | 'PRESSURE'
    | 'TEMPERATURE'
    | 'DENSITY'
    | 'CONCENTRATION'
    | 'ENERGY'
    | 'ENERGY_RATE'
    | 'GIBBS_FREE_ENERGY'
    | 'ENTHALPY'
    | 'HEAT_CAPACITY'
    | 'HEAT_TRANSFER_COEFFICIENT'
    | 'VOLUME'
    | 'MASS'
    | 'MOLECULAR_WEIGHT'
    | 'POWER'
    | 'LENGTH'
    | 'AREA'
    | 'FORCE'
    | 'VISCOSITY'
    | 'FLOW_RATE'
    | 'CUSTOM';

export interface ConversionBlock {
    fromUnit: string;
    operator: string;
    toUnit: string;
}

export interface CustomUnitFile {
    'CUSTOM-UNIT': CustomConversions;
}
