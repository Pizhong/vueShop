module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/prettier', // 替换为安装的 `prettier`
    ],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        quotes: ['error', 'single'], // 启用单引号
    },
};
