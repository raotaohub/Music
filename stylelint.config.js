module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': null,
    'declaration-empty-line-before': null,
    // TODO: 改善scss/dollar-variable-pattern和scss/at-function-pattern的匹配
    'scss/dollar-variable-pattern': /^[a-z]+([A-Z]{1}[a-z]+)+$|^[a-z]+(-\w+)+|[a-z]+|[A-Z]/, // 1、匹配小驼峰 2、匹配小字母中划线 3、匹配小字母组合
    'scss/at-function-pattern': /^[a-z]+([A-Z]{1}[a-z]+)+$|^[a-z]+(-\w+)+|[a-z]+/, // 1、匹配小驼峰 2、匹配小字母中划线 3、匹配小字母组合
    'order/order': [
      'custom-properties', // eg: --property: 10px;
      'dollar-variables', // eg: $variable
      'at-variables', // eg: @someVar
      'declarations', // css属性，display: flex
      'rules',
    ],
  },
};
