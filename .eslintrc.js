module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        indent: ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': ['warning', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
    },

    settings: {
        react: {
            pragma: 'React',
            version: '18.0',
        },
    },
};
