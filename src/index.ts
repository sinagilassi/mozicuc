/**
 * TSCUC - TypeScript Custom Unit Converter
 * A flexible and comprehensive unit conversion library
 */

// Classes
export { CustomUnitConverter } from './CustomUnitConverter';
export { CustomUnitConverterX } from './CustomUnitConverterX';
export { Refs } from './Refs';
export { Utils } from './Utils';

// Types
export type {
    ConversionDict,
    CustomConversions,
    ReferenceType,
    ConversionBlock,
    CustomUnitFile
} from './types';

// App Functions
export {
    VERSION,
    AUTHOR,
    EMAIL,
    DESCRIPTION,
    checkVersion,
    checkReference,
    go,
    createCuc,
    convertFromTo,
    to,
    convert,
    getInfo,
    listReferences,
    findUnit
} from './app';