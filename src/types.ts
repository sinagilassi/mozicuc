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
    | 'ENERGY'
    | 'GIBBS_FREE_ENERGY'
    | 'ENTHALPY'
    | 'HEAT_CAPACITY'
    | 'VOLUME'
    | 'MASS'
    | 'POWER'
    | 'LENGTH'
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