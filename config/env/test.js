'use strict';

module.exports = {
  karma: {
    browsers: ['Firefox'], // add more browsers i.e. Firefox, IE...
    preprocessors: {
      'lib/*.js': 'coverage',
      'test/*.html' : ['html2js']
    },
    reporters: ['progress', 'coverage'],
    autoWatch: false,
    singleRun: true
  }
};
