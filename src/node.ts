/**
 * TSCUC - Node.js Entry Point
 * Node.js specific functions for file I/O operations
 *
 * Usage:
 * import { goFromFile } from 'mozicuc/node';
 *
 * For browser environments, use the main export:
 * import { goFromContent } from 'mozicuc';
 */

export { goFromFile, goFromContent } from './app.node';
export { UtilsNode } from './Utils.node';
export { CustomUnitConverter } from './CustomUnitConverter';
export { Utils } from './Utils';
export { Refs } from './Refs';

export type {
    ConversionDict,
    CustomConversions,
    ReferenceType,
    ConversionBlock,
    CustomUnitFile
} from './types';
