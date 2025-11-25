import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { readFileSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
        {
            file: packageJson['umd:main'],
            format: 'umd',
            name: 'Mozicuc', // Required for UMD
            sourcemap: true,
            globals: {
                'js-yaml': 'jsyaml' // Define global variable name for external dependency
            }
        },
    ],
    plugins: [
        nodeResolve({
            preferBuiltins: false,
        }),
        commonjs(),
        typescript({
            typescript: require('typescript'),
        }),
    ],
    external: ['js-yaml'], // Mark external dependencies
};
