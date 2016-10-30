const conditionalStyles = require('./styles')

var getStyles = function (target, styles, condition) {
  return Object.assign({},
    styles,
    condition && conditionalStyles[target].true,
    !condition && conditionalStyles[target].false
  )
}

module.exports = getStyles
