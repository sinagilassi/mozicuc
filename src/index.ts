/**
 * TSCUC - TypeScript Custom Unit Converter
 * A flexible and comprehensive unit conversion library
 *
 * For Node.js file I/O functions (goFromFile), use:
 * import { goFromFile } from 'mozicuc/node';
 */

// Classes
export { CustomUnitConverter } from './CustomUnitConverter';
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

// App Functions (Cross-platform: Browser + Node.js)
export {
    AUTHOR,
    EMAIL,
    DESCRIPTION,
    checkVersion,
    checkReference,
    getReferenceUnits,
    go,
    goFromContent,
    createCuc,
    convertFromTo,
    to,
    convert,
    getInfo,
    listReferences,
    findUnit
} from './app';