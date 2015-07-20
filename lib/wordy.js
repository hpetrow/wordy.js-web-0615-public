'use strict';

function WordProblem(question){
  this.question = question;
}

WordProblem.prototype.answer = function() {
  var ref = {
    'plus': '+',
    'minus': '-',
    'multiplied': '*',
    'divided': '/'
  };
  var nums = this.question.match(/[+-]?\d+/g);
  var opers = this.question.match(/plus|minus|multiplied|divided/g);

  if (nums === null || opers === null) {
    throw new ArgumentError();
  }
  else {
    this.result = eval(nums.shift())

    while(nums.length > 0 && opers.length > 0) {
      this.result = eval(this.result + ' ' + ref[opers.shift()] + ' ' + nums.shift());
    }
  }
  return this.result;
}

function ArgumentError(message){
  this.name = 'ArgumentError';
  this.message = message || 'Invalid argument';
}
ArgumentError.prototype = Object.create(Error.prototype);
ArgumentError.prototype.constructor = ArgumentError;
