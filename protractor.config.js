exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      browserName: "chrome"
      },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60 * 1000
      },
    specs: ['./src/spec.js']
  }