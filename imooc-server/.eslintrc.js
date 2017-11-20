// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    "node":true,
    "es6":true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'eslint:recommended',
  // add your custom rules here
  'rules': {
    "semi": 0,
    "quotes": "off",
    "no-console":"off",
    "no-unused-vars":"off",
    "no-unreachable":"off",
    "no-redeclare":"warn"
  }
}
