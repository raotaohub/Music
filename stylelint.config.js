module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines'],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      'custom-properties', // eg: --property: 10px;
      'dollar-variables', // eg: $variable
      'at-variables', // eg: @someVar
      'declarations', // css属性，display: flex
      'rules',
    ],
  },
};
