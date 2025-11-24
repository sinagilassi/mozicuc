# MOZICUC - MOZI Custom Unit Converter

[![npm version](https://badge.fury.io/js/mozicuc.svg)](https://www.npmjs.com/package/mozicuc)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A flexible and comprehensive unit conversion library for TypeScript/JavaScript applications. Convert between various units of measurement including pressure, temperature, density, energy, and more. Support for custom units via YAML configuration.

## 🌟 Features

- 🔄 **Multiple Unit Types**: Pressure, Temperature, Density, Energy, Gibbs Free Energy, Enthalpy, Heat Capacity, Volume, Mass, Power, Length, Force
- 🎯 **Type-Safe**: Full TypeScript support with type definitions
- 🔧 **Customizable**: Add custom units dynamically or via YAML files
- 📦 **Lightweight**: Minimal dependencies (only `js-yaml` for custom unit loading)
- 🚀 **Easy to Use**: Simple, intuitive API with multiple usage patterns
- 💪 **Robust**: Comprehensive error handling

## 📦 Installation

```bash
npm install mozicuc
```

## 🚀 Quick Start

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

### Method 3: Using go() Function

```typescript
import { go } from 'mozicuc';

// Initialize converter
const converter = go();

// Flexible conversions
console.log(converter.fromTo(100, 'bar', 'psi'));  // 1450.38
console.log(converter.to(32, 'F => C'));            // 0
console.log(converter.fromTo(1, 'm3', 'L'));        // 1000
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

#### `go(referenceFile?)`

Initialize a CustomUnitConverterX object.

```typescript
// Without custom units
const converter = go();

// With custom units from YAML
const converter = go('./custom-units.yml');

// Usage
converter.fromTo(100, 'bar', 'psi');
converter.to(32, 'F => C');
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

### Custom Units - Dynamic

```typescript
import { go } from 'mozicuc';

const converter = go();

// Add custom units
converter.addCustomUnit('apple', 1.0);
converter.addCustomUnit('orange', 2.0);
converter.addCustomUnit('banana', 0.5);

// Convert between custom units
console.log(converter.fromTo(10, 'apple', 'orange'));   // 5
console.log(converter.fromTo(10, 'apple', 'banana'));   // 20
```

### Custom Units - YAML File

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

Load and use:

```typescript
import { go } from 'mozicuc';

const converter = go('./custom-units.yml');

// Convert fuel efficiency
const kml = converter.fromTo(30, 'mpg', 'kml');
console.log(`30 mpg = ${kml} km/L`);

// Convert custom pressure
const mypsi = converter.fromTo(100, 'mybar', 'mypsi');
console.log(`100 mybar = ${mypsi} mypsi`);
```

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

## 💡 Real-World Examples

### Engineering Calculations

```typescript
import { convert, createCuc } from 'mozicuc';

// Pressure vessel design
const workingPressure = convert(150, 'psi', 'MPa');  // 1.034 MPa

// Heat transfer
const heatCapacity = createCuc(4.18, 'kJ/kg.K');
const cpBTU = heatCapacity.convert('BTU/lb.F');      // 0.998 BTU/lb.F

// Flow rate
const volumeFlow = convert(100, 'gal(US)', 'L');     // 378.54 L
```

### Scientific Conversions

```typescript
import { to, convertFromTo } from 'mozicuc';

// Energy calculations
const energy = to(1000, 'cal => J');                 // 4184 J
const enthalpy = convertFromTo(50, 'kJ/mol', 'J/mol'); // 50000 J/mol

// Temperature conversions for research
const roomTemp = to(25, 'C => K');                   // 298.15 K
const meltingPoint = to(0, 'C => F');                // 32 F
```

### Web Applications

```typescript
import { go } from 'mozicuc';

// User preference conversion
function displayValue(value: number, userUnit: string) {
  const converter = go();

  // Convert from metric to user preference
  const converted = converter.fromTo(value, 'm', userUnit);
  return `${converted.toFixed(2)} ${userUnit}`;
}

console.log(displayValue(1000, 'ft'));  // "3280.84 ft"
console.log(displayValue(1000, 'mi'));  // "0.62 mi"
```

## 🔧 TypeScript Support

Full TypeScript support with comprehensive type definitions:

```typescript
import {
  CustomUnitConverter,
  CustomUnitConverterX,
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

- 📧 Email: sina.gilassi[at]gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/mozicuc/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/mozicuc/discussions)

## 🗺️ Roadmap

- [ ] Add more unit types (area, speed, acceleration)
- [ ] Support for unit arithmetic (e.g., kg*m/s²)
- [ ] Web-based converter tool
- [ ] CLI tool for terminal usage
- [ ] React/Vue component library

## ⭐ Star History

If you find this project useful, please consider giving it a star on GitHub!

---

Made with ❤️ by the mozicuc team
