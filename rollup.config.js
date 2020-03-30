import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import replace from 'rollup-plugin-replace';
// import alias from 'rollup-plugin-alias';
// import { terser, } from 'rollup-plugin-terser';
import terser from 'rollup-plugin-terser-js';
import pkg from "./package.json";

const name = 'VXA';
const external = [
    "jsonx",
    "path-to-regexp",
    "promisie",
    "react",
    "react-dom",
    "react-hooks-global-state",
    "react-router",
    "react-router-dom",
    "test-matching-route",
];

function getOutput({
    minify = false,
    server = false,
}) {
    const output = server ?
        [{
                file: pkg.main,
                format: "cjs",
                exports: "named",
                name,
                sourcemap: true
            },
            {
                file: pkg.module,
                format: "es",
                exports: "named",
                name,
                sourcemap: true
            }
        ] :
        [{
                file: pkg.browser,
                format: "umd",
                exports: "named",
                name,
                sourcemap: true
            },
            {
                file: pkg.web,
                format: "iife",
                exports: "named",
                name,
                sourcemap: true
            }
        ];
    if (minify) {
        return output.map(item => {
            const itemFileArray = item.file.split('.');
            itemFileArray.splice(itemFileArray.length - 1, 0, 'min');
            item.file = itemFileArray.join('.');
            item.sourcemap = false;
            return item;
        })
    }
    return output;
}

function getPlugins({
    minify = false,
}) {
    const plugins = [
        // external(),
        replace({
            'process.env.NODE_ENV': minify ?
                JSON.stringify('production') : JSON.stringify('development'),
            'global.': '(typeof global!=="undefined" ? global : window).'
        }),
        resolve({
            preferBuiltins: true,
        }),
        builtins({}),
        typescript({}),
        commonjs({
            namedExports: {
                'node_modules/react-is/index.js': ['isValidElementType'],
                'node_modules/react/index.js': [
                    'Children',
                    'Component',
                    'PropTypes',
                    'createContext',
                    'Fragment',
                    'Suspense',
                    'lazy',
                    'createElement',
                    'isValidElement',
                    'cloneElement',
                    'useState',
                    'useEffect',
                    'useContext',
                    'useReducer',
                    'useCallback',
                    'useMemo',
                    'useRef',
                    'useImperativeHandle',
                    'useLayoutEffect',
                    'useDebugValue',
                    '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
                ],

            }
        }), // so Rollup can convert `ms` to an ES module
        globals({
            // react: 'React',
            // 'react-dom': 'ReactDOM'
        }),
    ];
    if (minify) {
        const minifyPlugins = [

        ].concat(plugins,
            [
                terser({
                    sourcemaps: true,
                    compress: true,
                    mangle: true,
                    verbose: true,
                }),
            ]);
        return minifyPlugins;
    }
    return plugins;
}

export default [{
        input: "src/module.ts",
        output: getOutput({
            minify: false,
            server: false,
        }),
        plugins: getPlugins({
            minify: false,
        }),
    },
    {
        input: "src/module.ts",
        output: getOutput({
            minify: false,
            server: true,
        }),
        external,
        plugins: getPlugins({
            minify: false,
        }),
    },
    {
        input: "src/module.ts",
        output: getOutput({
            minify: true,
            server: false,
        }),
        plugins: getPlugins({
            minify: true,
        }),
    },
    {
        input: "src/module.ts",
        output: getOutput({
            minify: true,
            server: true,
        }),
        external,
        plugins: getPlugins({
            minify: true,
        }),
    },
];