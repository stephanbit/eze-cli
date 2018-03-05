var chalk = require('chalk');

var Log = function() {
  var sig = '[' + chalk.green('eze') + ']';
  var args = Array.prototype.slice.call(arguments);
  args.unshift(sig);
  console.log.apply(console, args);
  return this;
};

module.exports = Log;
