const conditionalStyles = require('./styles')

module.exports = function (target, styles, condition) {
  return Object.assign({},
    styles,
    condition && conditionalStyles[target].true,
    !condition && conditionalStyles[target].false
  )
}
