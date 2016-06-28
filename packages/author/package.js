'use strict';

var Overlay = require('substance/ui/Overlay');
var Toolbar = require('substance/ui/Toolbar');
var path = require('path');

module.exports = {
  name: 'author',
  configure: function(config) {
    // Now import base packages
    config.import(require('substance/packages/base/BasePackage'));
    config.import(require('substance/packages/persistence/PersistencePackage'));
    // TODO: see substance#712
    config.addComponent('overlay', Overlay);
    // TODO: this should be used as default, too
    config.setToolbarClass(Toolbar);

    config.import(require('../jats/package'));
    config.import(require('./heading/package'));
    config.addStyle(path.join(__dirname, '_author'));

    // support inline wrappers, for all hybrid types that can be
    // block-level but also inline.
    config.import(require('../inline-wrapper/InlineWrapperPackage'));
    // catch all converters
    config.import(require('../unsupported/UnsupportedNodePackage'));
  }
};