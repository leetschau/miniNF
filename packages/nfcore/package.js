Package.describe({
  name: 'leo:nfcore',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  // meteor base packages
  api.use("standard-minifiers");
  api.use("mobile-experience");
  api.use("meteor-base");
  api.use("mongo");
  api.use("ecmascript");
  api.use("es5-shim");
  api.use("blaze-html-templates");
  api.use("session");
  api.use("jquery");
  api.use("tracker");

  // meteor add-on packages
  api.use("underscore");
  api.use("logging");
  api.use("reload");
  api.use("random");
  api.use("ejson");
  api.use("check");
  api.use("less");
  api.use("http");
  api.use("reactive-var");
  api.use("email");
  api.use("browser-policy");
  api.use("service-configuration");
  api.use("amplify@1.0.0");

  // meteor authentication packages
  api.use("oauth-encryption");
  api.use("accounts-base");
  api.use("accounts-password");

  // community packages
  api.use("aldeed:simple-schema@1.3.3");
  api.use("aldeed:collection2@2.5.0");
  // this makes nfcore itself can use variable "SimpleSchema" in the source code
  api.imply("aldeed:simple-schema@1.3.3");
  // this makes any packages using nfcore can use "SimpleSchema"
  api.imply("aldeed:collection2@2.5.0");
  api.use("alanning:roles@1.2.13");
  api.imply("alanning:roles@1.2.13");

  api.addFiles('nfcore.js');
  api.addFiles('common/globals.js');
  api.addFiles('common/schemas/accounts.js');
  api.addFiles('common/schemas/questions.js');
  api.addFiles('common/collections/collections.js');
  api.export(["NFCore"]);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('sanjo:jasmine@0.19.0');
  api.use('anti:fake');
  api.use('underscore');
  api.use("dburles:factory@0.3.10");
  api.use('velocity:html-reporter@0.9.0');
  api.use('velocity:console-reporter@0.1.3');
  api.use('leo:nfcore');
  api.addFiles('tests/accounts.js', 'server');
  api.addFiles('tests/questions.js', 'server');
});
