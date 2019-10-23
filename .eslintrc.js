module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'generator-star-spacing': 'off',
        'no-tabs': 'off'
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    }
}
