import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { readFileSync } from 'fs';
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
            typescript({
                tsconfig: './tsconfig.json',
                declaration: true,
                declarationDir: 'dist',
                rootDir: './src',
            }),
            nodeResolve({
                preferBuiltins: false,
                extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
            }),
            commonjs(),
        ],
        external: ['js-yaml'], // Mark external dependencies (no fs here for browser compat)
    },
    // SECTION: Node.js specific bundle with fs support
    {
        input: 'src/node.ts',
        output: [
            {
                file: 'dist/app.node.cjs',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'dist/app.node.mjs',
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
                declaration: true,
                declarationDir: 'dist',
                rootDir: './src',
            }),
            nodeResolve({
                preferBuiltins: true, // Use Node.js built-ins for this entry point
                extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
            }),
            commonjs(),
        ],
        external: ['js-yaml', 'fs'], // Mark external dependencies including fs
    }
];
