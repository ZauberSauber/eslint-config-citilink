module.exports = {
    'globals': {
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
    },
    'env': {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'import',
        'jsx-a11y',
        'react'
    ],
    'rules': {
        'array-callback-return': 'error',
        'default-case': ['error', {commentPattern: '^no default$'}],
        'dot-location': ['warn', 'property'],
        'eqeqeq': ['error', 'always'],
        'new-parens': 'error',
        'object-curly-spacing': ['error', 'always'],
        'no-array-constructor': 'warn',
        'no-caller': 'error',
        'no-cond-assign': ['warn', 'except-parens'],
        'no-const-assign': 'error',
        'no-control-regex': 'warn',
        'no-delete-var': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-label': 'warn',
        'no-fallthrough': 'warn',
        'no-func-assign': 'error',
        'no-implied-eval': 'error',
        'no-invalid-regexp': 'error',
        'no-iterator': 'warn',
        'no-label-var': 'warn',
        'no-labels': ['warn', {allowLoop: true, allowSwitch: false}],
        'no-lone-blocks': 'warn',
        'no-loop-func': 'warn',
        'no-extra-parens': ['error', 'all', {
            nestedBinaryExpressions: false,
            ignoreJSX: 'all',
        }],
        'semi': 'error',
        'no-multi-str': 'warn',
        'no-native-reassign': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'warn',
        'no-octal': 'warn',
        'no-octal-escape': 'warn',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-script-url': 'error',
        'no-self-assign': ['error', {props: true}],
        'no-self-compare': 'error',
        'no-sequences': 'warn',
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-undef': 'error',
        'no-restricted-globals': ['error'],
        'no-unexpected-multiline': 'warn',
        'no-unreachable': 'error',
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true
            }
        ],
        'no-unused-labels': 'warn',
        'no-use-before-define': [
            'error',
            {
                functions: false
            }
        ],
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'warn',
        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false
            }
        ],
        'strict': ['warn', 'never'],
        'quotes': ['error', 'single'],
        'no-var': 'error',
        'no-with': 'error',
        'no-whitespace-before-property': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'unicode-bom': ['warn', 'never'],
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'getter-return': 'error',
        'import/first': 'error',
        'import/no-amd': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'no-restricted-properties': [
            'error',
            {
                object: 'require',
                property: 'ensure',
                message:
                    'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
            },
            {
                object: 'System',
                property: 'import',
                message:
                    'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
            },
        ],
        'react/forbid-foreign-prop-types': ['warn', {allowInPropTypes: true}],
        'react/jsx-no-comment-textnodes': 'warn',
        'react/jsx-no-duplicate-props': ['warn', {ignoreCase: true}],
        'react/jsx-no-target-blank': 'warn',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': [
            'warn',
            {
                allowAllCaps: true,
                ignore: [],
            },
        ],
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/no-danger-with-children': 'warn',
        'react/no-direct-mutation-state': 'warn',
        'react/no-is-mounted': 'warn',
        'react/no-typos': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/require-render-return': 'error',
        'react/style-prop-object': 'warn',
        'jsx-a11y/accessible-emoji': 'warn',
        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/anchor-has-content': 'warn',
        'jsx-a11y/anchor-is-valid': [
            'warn',
            {
                aspects: ['noHref', 'invalidHref'],
            },
        ],
        'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
        'jsx-a11y/aria-props': 'warn',
        'jsx-a11y/aria-proptypes': 'warn',
        'jsx-a11y/aria-role': 'warn',
        'jsx-a11y/aria-unsupported-elements': 'warn',
        'jsx-a11y/heading-has-content': 'warn',
        'jsx-a11y/iframe-has-title': 'warn',
        'jsx-a11y/img-redundant-alt': 'warn',
        'jsx-a11y/no-access-key': 'warn',
        'jsx-a11y/no-distracting-elements': 'warn',
        'jsx-a11y/no-redundant-roles': 'warn',
        'jsx-a11y/role-has-required-aria-props': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',
        'jsx-a11y/scope': 'warn',
    }
};
