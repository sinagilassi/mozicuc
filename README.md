# Mozi Custom Unit Converter (MoziCUC)

[![npm version](https://badge.fury.io/js/mozicuc.svg)](https://www.npmjs.com/package/mozicuc)
[![npm downloads](https://img.shields.io/npm/dm/mozicuc?color=brightgreen)](https://www.npmjs.com/package/mozicuc)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A flexible and comprehensive unit conversion library for TypeScript/JavaScript applications that works in **both browser and Node.js environments**. Convert between various units of measurement including pressure, temperature, density, energy, and more. Support for custom units via YAML configuration.

**Key Advantage**: The library is optimized for both environments with separate entry points:

- 🌐 **Browser**: Lightweight bundle without file I/O dependencies
- 🖥️ **Node.js**: Full file system support for loading custom units from YAML files

## 🌟 Features

- 🔄 **Multiple Unit Types**: Pressure, Temperature, Density, Energy, Gibbs Free Energy, Enthalpy, Heat Capacity, Volume, Mass, Power, Length, Force
- 🎯 **Type-Safe**: Full TypeScript support with type definitions
- 🔧 **Customizable**: Add custom units dynamically or via YAML files
- 📦 **Lightweight**: Minimal dependencies (only `js-yaml` for custom unit loading)
- 🚀 **Easy to Use**: Simple, intuitive API with multiple usage patterns
- 💪 **Robust**: Comprehensive error handling
- 🌐 **Dual Environment Support**: Works seamlessly in browser AND Node.js
- ⚡ **Optimized Bundles**: Separate lightweight browser bundle and full-featured Node.js bundle

## 📦 Installation

```bash
npm install mozicuc
```

## 🚀 Quick Start

### Environment-Specific Imports

This library supports **both browser and Node.js** with environment-specific entry points:

#### 🌐 Browser (Default Import)

```typescript
// Browser-compatible - No file I/O
import { convertFromTo, to, convert, go, goFromContent } from 'mozicuc';

// Use YAML content as string (works everywhere)
const yamlContent = `
CUSTOM-UNIT:
  FUEL-EFFICIENCY:
    mpg: 1.0
    kml: 0.425144
`;
const converter = goFromContent(yamlContent);
```

#### 🖥️ Node.js (Node.js Entry Point)

```typescript
// Node.js-specific - Includes file I/O
import { goFromFile, goFromContent } from 'mozicuc/node';

// Load custom units from YAML file (Node.js only)
const converter = goFromFile('./custom-units.yml');

// Or use content-based loading (works in both)
import { goFromContent } from 'mozicuc';
const converter = goFromContent(yamlContent);
```

### Method 1: Simple Conversion

```typescript
import { convertFromTo, to, convert } from 'mozicuc';

// Direct conversion
const psi = convertFromTo(100, 'bar', 'psi');
console.log(psi); // 1450.38

// Using conversion block syntax
const celsius = to(212, 'F => C');
console.log(celsius); // 100

// Quick alias
const kg = convert(10, 'lb', 'kg');
console.log(kg); // 4.53592
```

### Method 2: Using Converter Object

```typescript
import { createCuc } from 'mozicuc';

// Create converter
const converter = createCuc(100, 'bar');

// Convert to different units
console.log(converter.convert('psi'));   // 1450.38
console.log(converter.convert('Pa'));    // 10000000
console.log(converter.convert('atm'));   // 98.6923
```

### Method 3: Using go() Function (Browser & Node.js)

```typescript
import { go } from 'mozicuc';

// Initialize with default built-in units (works everywhere)
const converter = go();

// Flexible conversions
console.log(converter.convert(100, 'bar', 'psi'));  // 1450.38
console.log(converter.convert(32, 'F', 'C'));       // 0
```

### Method 4: Custom Units from YAML Content (Browser & Node.js)

```typescript
import { goFromContent } from 'mozicuc';

const yamlContent = `
CUSTOM-UNIT:
  FUEL-EFFICIENCY:
    mpg: 1.0
    kml: 0.425144
`;

const converter = goFromContent(yamlContent);
console.log(converter.convert(30, 'mpg', 'kml'));  // 12.15 km/L
```

### Method 5: Custom Units from YAML File (Node.js Only)

```typescript
import { goFromFile } from 'mozicuc/node';

// Load from file (Node.js only - use goFromContent for browser)
const converter = goFromFile('./custom-units.yml');
console.log(converter.convert(30, 'mpg', 'kml'));  // 12.15 km/L
```

## 📖 Complete API Reference

### Quick Functions

#### `convertFromTo(value, fromUnit, toUnit, reference?, referenceFile?)`

Convert a value from one unit to another.

```typescript
convertFromTo(1, 'MPa', 'Pa');      // 1000000
convertFromTo(100, 'C', 'F');       // 212
convertFromTo(10, 'kg', 'lb');      // 22.0462
```

#### `to(value, conversionBlock, reference?, referenceFile?)`

Convert using "fromUnit => toUnit" syntax.

```typescript
to(100, 'bar => psi');      // 1450.38
to(0, 'C => K');            // 273.15
to(1000, 'W => HP');        // 1.34102
```

#### `convert(value, fromUnit, toUnit)`

Quick conversion alias.

```typescript
convert(100, 'bar', 'psi');   // 1450.38
```

### Object-Oriented Approach

#### `createCuc(value, unit)`

Creates a CustomUnitConverter object.

```typescript
const pressure = createCuc(100, 'bar');
pressure.convert('psi');    // 1450.38
pressure.convert('Pa');     // 10000000
pressure.convert('atm');    // 98.6923
```

#### `go()`

Initialize a CustomUnitConverter object with default built-in units.

```typescript
// Works in browser and Node.js
const converter = go();

converter.convert(100, 'bar', 'psi');    // 1450.38
converter.convert(32, 'F', 'C');         // 0
```

#### `goFromContent(yamlContent)` (Browser & Node.js Compatible)

Initialize with custom units from YAML content string. **Recommended for browser applications**.

```typescript
// Works everywhere
import { goFromContent } from 'mozicuc';

const yamlContent = `
CUSTOM-UNIT:
  FUEL-EFFICIENCY:
    mpg: 1.0
    kml: 0.425144
`;

const converter = goFromContent(yamlContent);
console.log(converter.convert(30, 'mpg', 'kml'));
```

#### `goFromFile(referenceFile)` (Node.js Only)

Initialize with custom units from a YAML file. **Node.js environments only**.

```typescript
// Node.js only - use separate import
import { goFromFile } from 'mozicuc/node';

const converter = goFromFile('./custom-units.yml');
console.log(converter.convert(30, 'mpg', 'kml'));
```

### Utility Functions

#### `checkVersion()`

Get package version.

```typescript
console.log(checkVersion());  // "1.0.0"
```

#### `checkReference(reference, asObject?)`

View available units for a reference type.

```typescript
const pressureUnits = checkReference('PRESSURE');
const tempUnits = checkReference('TEMPERATURE', true);
```

#### `listReferences()`

List all available unit types.

```typescript
console.log(listReferences());
// ['PRESSURE', 'TEMPERATURE', 'DENSITY', ...]
```

#### `findUnit(unit)`

Find which reference a unit belongs to.

```typescript
const result = findUnit('bar');
console.log(result);
// { found: true, reference: 'PRESSURE', factor: 1.0 }
```

#### `getInfo()`

Get package information.

```typescript
const info = getInfo();
console.log(info.version, info.description);
```

## 📊 Supported Units

### Pressure

`bar`, `mbar`, `ubar`, `Pa`, `hPa`, `kPa`, `MPa`, `kg/cm2`, `atm`, `mmHg`, `mmH2O`, `mH2O`, `psi`, `ftH2O`, `inH2O`, `inHg`

### Temperature

`C` (Celsius), `F` (Fahrenheit), `K` (Kelvin), `R` (Rankine)

### Density

`g/cm3`, `kg/dm3`, `t/m3`, `kg/m3`, `lb/ft3`, `lb/in3`

### Energy

`J`, `kJ`, `cal`, `kcal`, `Wh`, `kWh`, `BTU`, `ft-lb`

### Gibbs Free Energy & Enthalpy

`J/mol`, `kJ/mol`, `J/kmol`, `cal/mol`, `kcal/mol`, `kcal/kmol`, `cal/kmol`, `J/kg`, `kJ/kg`, `cal/g`, `kcal/g`, `J/g`, `kJ/g`, `cal/kg`, `kcal/kg`

### Heat Capacity

`J/kg.K`, `kJ/kg.K`, `cal/kg.K`, `kcal/kg.K`, `cal/g.K`, `J/g.K`, `kJ/g.K`, `BTU/lb.F`, `J/mol.K`, `kJ/mol.K`, `cal/mol.K`, `kcal/mol.K`, `cal/kmol.K`, `kcal/kmol.K`, `J/kmol.K`, `kJ/kmol.K`

### Volume

`m3`, `L`, `cm3`, `dm3`, `ft3`, `in3`, `gal(US)`, `gal(UK)`

### Mass

`kg`, `g`, `mg`, `lb`, `oz`, `t`, `st`

### Power

`W`, `kW`, `MW`, `GW`, `HP`, `BTU/h`, `ft-lb/min`

### Length

`m`, `cm`, `mm`, `km`, `ft`, `in`, `yd`, `mi`

### Force

`N`, `kN`, `lbf`, `kgf`, `dyn`, `ozf`

## 🎨 Advanced Usage

### Custom Units - Dynamic (Browser & Node.js)

```typescript
import { go } from 'mozicuc';

const converter = go();

// Add custom units
converter.addCustomUnit('apple', 1.0);
converter.addCustomUnit('orange', 2.0);
converter.addCustomUnit('banana', 0.5);

// Convert between custom units
console.log(converter.convert(10, 'apple', 'orange'));   // 5
console.log(converter.convert(10, 'apple', 'banana'));   // 20
```

### Custom Units - YAML Content (Browser & Node.js)

```typescript
import { goFromContent } from 'mozicuc';

const yamlContent = `
CUSTOM-UNIT:
  FUEL-EFFICIENCY:
    mpg: 1.0
    kml: 0.425144
    l100km: 235.215
  HEAT-CAPACITY:
    J/mol.K: 1
    kJ/mol.K: 0.001
    J/kmol.K: 1000
`;

const converter = goFromContent(yamlContent);

// Convert fuel efficiency
console.log(converter.convert(30, 'mpg', 'kml'));         // 12.75 km/L
console.log(converter.convert(30, 'mpg', 'l100km'));      // 7.84 L/100km
```

### Custom Units - YAML File (Node.js Only)

Create `custom-units.yml`:

```yaml
CUSTOM-UNIT:
  FUEL-EFFICIENCY:
    mpg: 1.0
    kml: 0.425144
    l100km: 235.215
  HEAT-CAPACITY:
    J/mol.K: 1
    kJ/mol.K: 0.001
    J/kmol.K: 1000
  CUSTOM-PRESSURE:
    mybar: 1.0
    mypsi: 14.5038
```

Load and use (Node.js only):

```typescript
import { goFromFile } from 'mozicuc/node';

const converter = goFromFile('./custom-units.yml');

// Convert fuel efficiency
const kml = converter.convert(30, 'mpg', 'kml');
console.log(`30 mpg = ${kml} km/L`);

// Convert custom pressure
const mypsi = converter.convert(100, 'mybar', 'mypsi');
console.log(`100 mybar = ${mypsi} mypsi`);
```

**Note**: For browser applications, use `goFromContent()` with YAML strings instead.

### Batch Conversions

```typescript
import { convert } from 'mozicuc';

const pressures = [1, 10, 100, 1000];
const psiValues = pressures.map(p => convert(p, 'bar', 'psi'));
console.log(psiValues);
// [14.5038, 145.038, 1450.38, 14503.8]

const temps = [0, 25, 50, 100];
const fahrenheit = temps.map(t => convert(t, 'C', 'F'));
console.log(fahrenheit);
// [32, 77, 122, 212]
```

### Checking Available Units

```typescript
import { checkReference, listReferences } from 'mozicuc';

// List all reference types
console.log(listReferences());

// Get all pressure units
const pressureUnits = checkReference('PRESSURE');
console.log(pressureUnits);

// Get temperature units as object
const tempUnits = checkReference('TEMPERATURE', true);
console.log(tempUnits);
```

## 📱 Environment-Specific Guidelines

### For Browser Applications

```typescript
// ✅ Use default import
import { convertFromTo, goFromContent } from 'mozicuc';

// ✅ Load custom units from YAML strings
const yamlContent = `...`;
const converter = goFromContent(yamlContent);

// ❌ Don't use file I/O (not available in browser)
// import { goFromFile } from 'mozicuc/node';  // Won't work in browser
```

### For Node.js Applications

```typescript
// ✅ Use Node.js entry point for file I/O
import { goFromFile, goFromContent } from 'mozicuc/node';

// ✅ Load from YAML files
const converter = goFromFile('./custom-units.yml');

// ✅ Or use content-based loading
const converter = goFromContent(yamlContent);

// ✅ Or use default import for basic conversions
import { convertFromTo } from 'mozicuc';
```

### For Isomorphic/Universal Code

```typescript
// ✅ Use only browser-compatible APIs
import { go, goFromContent, convertFromTo } from 'mozicuc';

// This works in both browser and Node.js
const converter = goFromContent(yamlContent);

// Avoid Node.js-specific imports for universal code
// import { goFromFile } from 'mozicuc/node';  // Not browser-compatible
```

## 💡 Real-World Examples

### Browser: Temperature Converter App

```typescript
import { goFromContent } from 'mozicuc';

// Web app with custom temperature scales
const yamlContent = `
CUSTOM-UNIT:
  EXPERIMENTAL-TEMPS:
    myScale: 1.0
    otherScale: 0.5
`;

const converter = goFromContent(yamlContent);

// Convert user input
function convertTemperature(value: number, from: string, to: string): string {
  return converter.convert(value, from, to).toFixed(2);
}

// Display in UI
console.log(convertTemperature(100, 'C', 'F'));  // "212.00"
```

### Node.js: File-Based Batch Converter

```typescript
import { goFromFile } from 'mozicuc/node';
import * as fs from 'fs';

// Load company-wide unit definitions
const converter = goFromFile('./company-standards.yml');

// Process CSV data
const data = fs.readFileSync('measurements.csv', 'utf-8');
const rows = data.split('\n').slice(1);

rows.forEach(row => {
  const [value, fromUnit, toUnit] = row.split(',');
  const result = converter.convert(parseFloat(value), fromUnit, toUnit);
  console.log(`${value} ${fromUnit} = ${result} ${toUnit}`);
});
```

## 🔧 TypeScript Support

Full TypeScript support with comprehensive type definitions:

```typescript
import {
  CustomUnitConverter,
  ReferenceType,
  ConversionDict,
  convertFromTo,
  to
} from 'mozicuc';

// Typed converter
const converter: CustomUnitConverter = createCuc(100, 'bar');
const result: number = converter.convert('psi');

// Typed reference
const ref: ReferenceType = 'PRESSURE';
const value: number = convertFromTo(100, 'bar', 'psi', ref);

// Typed conversion dictionary
const units: ConversionDict = checkReference('PRESSURE', true) as ConversionDict;
```

## 🧪 Testing

```bash
npm test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits

TypeScript conversion of [PyCUC](https://github.com/sinagilassi/PyCUC) (Python Custom Unit Converter)

## 📞 Support

- 🐛 Issues: [GitHub Issues](https://github.com/sinagilassi/mozicuc/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/sinagilassi/mozicuc/discussions)

## 🗺️ Roadmap

- [ ] Add more unit types (area, speed, acceleration)
- [ ] Support for unit arithmetic (e.g., kg*m/s²)
- [ ] Web-based converter tool
- [ ] CLI tool for terminal usage
- [ ] React/Vue component library

## ⭐ Star History

If you find this project useful, please consider giving it a star on GitHub!

## 👨‍💻 Authors

[@sinagilassi](https://www.github.com/sinagilassi)

---

Made with ❤️ by the mozicuc team
