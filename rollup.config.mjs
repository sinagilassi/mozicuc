import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { readFileSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

export default [
    // SECTION: Main browser-compatible bundle
    {
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
                declaration: true,
                declarationDir: 'dist',
                rootDir: './src',
            }),
        ],
        external: ['js-yaml'], // Mark external dependencies (no fs here for browser compat)
    },
    // SECTION: Node.js specific bundle with fs support
    {
        input: 'src/node.ts',
        output: [
            {
                file: 'dist/app.node.cjs.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'dist/app.node.esm.js',
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            nodeResolve({
                preferBuiltins: true, // Use Node.js built-ins for this entry point
            }),
            commonjs(),
            typescript({
                typescript: require('typescript'),
                declaration: true,
                declarationDir: 'dist',
                rootDir: './src',
            }),
        ],
        external: ['js-yaml', 'fs'], // Mark external dependencies including fs
    }
];
