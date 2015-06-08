(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("data", ["exports", "babel-runtime/helpers/create-class", "babel-runtime/helpers/class-call-check", "babel-runtime/core-js/object/define-property", "babel-runtime/core-js/object/create"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("babel-runtime/helpers/create-class"), require("babel-runtime/helpers/class-call-check"), require("babel-runtime/core-js/object/define-property"), require("babel-runtime/core-js/object/create"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._createClass, global._classCallCheck, global._Object$defineProperty, global._Object$create);
    global.data = mod.exports;
  }
})(this, function (exports, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeCoreJsObjectDefineProperty, _babelRuntimeCoreJsObjectCreate) {
  "use strict";

  (0, _babelRuntimeCoreJsObjectDefineProperty["default"])(exports, "__esModule", {
    value: true
  });

  var Data = (function () {
    /**
     *
     * @param {Uint8Array} content
     */

    function Data(content) {
      (0, _babelRuntimeHelpersClassCallCheck["default"])(this, Data);

      this._content = content;
      this._metadata = (0, _babelRuntimeCoreJsObjectCreate["default"])(null);
    }

    (0, _babelRuntimeHelpersCreateClass["default"])(Data, [{
      key: "content",
      get: function () {
        return this._content;
      },
      set: function (value) {
        this._content = value;
      }
    }, {
      key: "metadata",
      get: function () {
        return this._metadata;
      }
    }]);
    return Data;
  })();

  exports.Data = Data;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("errors", ["exports", "babel-runtime/helpers/inherits", "babel-runtime/helpers/get", "babel-runtime/helpers/class-call-check", "babel-runtime/core-js/object/define-property"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("babel-runtime/helpers/inherits"), require("babel-runtime/helpers/get"), require("babel-runtime/helpers/class-call-check"), require("babel-runtime/core-js/object/define-property"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._inherits, global._get, global._classCallCheck, global._Object$defineProperty);
    global.errors = mod.exports;
  }
})(this, function (exports, _babelRuntimeHelpersInherits, _babelRuntimeHelpersGet, _babelRuntimeHelpersClassCallCheck, _babelRuntimeCoreJsObjectDefineProperty) {
  "use strict";

  (0, _babelRuntimeCoreJsObjectDefineProperty["default"])(exports, "__esModule", {
    value: true
  });

  var RustieAbstractClassError = (function (_Error) {
    function RustieAbstractClassError(message, id) {
      (0, _babelRuntimeHelpersClassCallCheck["default"])(this, RustieAbstractClassError);

      (0, _babelRuntimeHelpersGet["default"])(Object.getPrototypeOf(RustieAbstractClassError.prototype), "constructor", this).call(this, message, id);
    }

    (0, _babelRuntimeHelpersInherits["default"])(RustieAbstractClassError, _Error);
    return RustieAbstractClassError;
  })(Error);

  exports.RustieAbstractClassError = RustieAbstractClassError;
});
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('index', ['exports', 'babel-runtime/core-js/object/define-property', './errors', './rustie', './plugin', './dal/reader', './dal/writer', './data'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('babel-runtime/core-js/object/define-property'), require('./errors'), require('./rustie'), require('./plugin'), require('./dal/reader'), require('./dal/writer'), require('./data'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._Object$defineProperty, global.errors, global.rustie, global.plugin, global.reader, global.writer, global.data);
    global.index = mod.exports;
  }
})(this, function (exports, _babelRuntimeCoreJsObjectDefineProperty, _errors, _rustie, _plugin, _dalReader, _dalWriter, _data) {
  'use strict';

  (0, _babelRuntimeCoreJsObjectDefineProperty['default'])(exports, '__esModule', {
    value: true
  });
  exports.Rustie = _rustie.Rustie;
  exports.RustieAbstractClassError = _errors.RustieAbstractClassError;
  exports.Data = _data.Data;
  exports.Plugin = _plugin.Plugin;
  exports.Reader = _dalReader.Reader;
  exports.Writer = _dalWriter.Writer;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("pipeline", ["exports", "babel-runtime/helpers/create-class", "babel-runtime/helpers/class-call-check", "babel-runtime/core-js/object/define-property", "babel-runtime/regenerator", "babel-runtime/core-js/object/assign", "babel-runtime/core-js/object/create", "babel-runtime/core-js/get-iterator"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("babel-runtime/helpers/create-class"), require("babel-runtime/helpers/class-call-check"), require("babel-runtime/core-js/object/define-property"), require("babel-runtime/regenerator"), require("babel-runtime/core-js/object/assign"), require("babel-runtime/core-js/object/create"), require("babel-runtime/core-js/get-iterator"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._createClass, global._classCallCheck, global._Object$defineProperty, global._regeneratorRuntime, global._Object$assign, global._Object$create, global._getIterator);
    global.pipeline = mod.exports;
  }
})(this, function (exports, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeCoreJsObjectDefineProperty, _babelRuntimeRegenerator, _babelRuntimeCoreJsObjectAssign, _babelRuntimeCoreJsObjectCreate, _babelRuntimeCoreJsGetIterator) {
  "use strict";

  (0, _babelRuntimeCoreJsObjectDefineProperty["default"])(exports, "__esModule", {
    value: true
  });

  var Pipeline = (function () {
    function Pipeline() {
      (0, _babelRuntimeHelpersClassCallCheck["default"])(this, Pipeline);

      this._processors = [];
    }

    (0, _babelRuntimeHelpersCreateClass["default"])(Pipeline, [{
      key: "addProcessors",
      value: function addProcessors() {
        var _processors;

        for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
          plugins[_key] = arguments[_key];
        }

        (_processors = this._processors).push.apply(_processors, plugins);
      }
    }, {
      key: "process",
      value: function process(files) {
        var list, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, processor;

        return _babelRuntimeRegenerator["default"].async(function process$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              list = (0, _babelRuntimeCoreJsObjectAssign["default"])((0, _babelRuntimeCoreJsObjectCreate["default"])(null), files);
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              context$2$0.prev = 4;
              _iterator = (0, _babelRuntimeCoreJsGetIterator["default"])(this._processors);

            case 6:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                context$2$0.next = 14;
                break;
              }

              processor = _step.value;
              context$2$0.next = 10;
              return processor.process(list);

            case 10:
              list = context$2$0.sent;

            case 11:
              _iteratorNormalCompletion = true;
              context$2$0.next = 6;
              break;

            case 14:
              context$2$0.next = 20;
              break;

            case 16:
              context$2$0.prev = 16;
              context$2$0.t0 = context$2$0["catch"](4);
              _didIteratorError = true;
              _iteratorError = context$2$0.t0;

            case 20:
              context$2$0.prev = 20;
              context$2$0.prev = 21;

              if (!_iteratorNormalCompletion && _iterator["return"]) {
                _iterator["return"]();
              }

            case 23:
              context$2$0.prev = 23;

              if (!_didIteratorError) {
                context$2$0.next = 26;
                break;
              }

              throw _iteratorError;

            case 26:
              return context$2$0.finish(23);

            case 27:
              return context$2$0.finish(20);

            case 28:
              return context$2$0.abrupt("return", list);

            case 29:
            case "end":
              return context$2$0.stop();
          }
        }, null, this, [[4, 16, 20, 28], [21,, 23, 27]]);
      }
    }]);
    return Pipeline;
  })();

  exports.Pipeline = Pipeline;
});
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('plugin', ['exports', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/core-js/object/define-property', 'babel-runtime/regenerator', './errors'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('babel-runtime/helpers/create-class'), require('babel-runtime/helpers/class-call-check'), require('babel-runtime/core-js/object/define-property'), require('babel-runtime/regenerator'), require('./errors'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._createClass, global._classCallCheck, global._Object$defineProperty, global._regeneratorRuntime, global.errors);
    global.plugin = mod.exports;
  }
})(this, function (exports, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeCoreJsObjectDefineProperty, _babelRuntimeRegenerator, _errors) {
  'use strict';

  (0, _babelRuntimeCoreJsObjectDefineProperty['default'])(exports, '__esModule', {
    value: true
  });

  var Plugin = (function () {
    function Plugin() {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, Plugin);

      if (this.constructor === Plugin) {
        throw new _errors.RustieAbstractClassError('cannot instantiate class Plugin. Plugin is an abstract class');
      }
    }

    (0, _babelRuntimeHelpersCreateClass['default'])(Plugin, [{
      key: 'process',

      //noinspection JSMethodCanBeStatic
      value: function process(files) {
        return _babelRuntimeRegenerator['default'].async(function process$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              return context$2$0.abrupt('return', files);

            case 1:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this);
      }
    }]);
    return Plugin;
  })();

  exports.Plugin = Plugin;
});
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('rustie', ['exports', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/core-js/object/define-property', 'babel-runtime/regenerator', './pipeline'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('babel-runtime/helpers/create-class'), require('babel-runtime/helpers/class-call-check'), require('babel-runtime/core-js/object/define-property'), require('babel-runtime/regenerator'), require('./pipeline'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._createClass, global._classCallCheck, global._Object$defineProperty, global._regeneratorRuntime, global.pipeline);
    global.rustie = mod.exports;
  }
})(this, function (exports, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeCoreJsObjectDefineProperty, _babelRuntimeRegenerator, _pipeline2) {
  'use strict';

  (0, _babelRuntimeCoreJsObjectDefineProperty['default'])(exports, '__esModule', {
    value: true
  });

  var Rustie = (function () {
    function Rustie(reader, writer) {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, Rustie);

      this._reader = reader;
      this._writer = writer;
      this._pipeline = new _pipeline2.Pipeline();
    }

    (0, _babelRuntimeHelpersCreateClass['default'])(Rustie, [{
      key: 'addPlugins',
      value: function addPlugins() {
        var _pipeline;

        for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
          plugins[_key] = arguments[_key];
        }

        (_pipeline = this._pipeline).addProcessors.apply(_pipeline, plugins);
      }
    }, {
      key: 'build',
      value: function build(from, to) {
        var files, processed;
        return _babelRuntimeRegenerator['default'].async(function build$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              context$2$0.next = 2;
              return this._reader.read(from);

            case 2:
              files = context$2$0.sent;
              context$2$0.next = 5;
              return this._pipeline.process(files);

            case 5:
              processed = context$2$0.sent;
              context$2$0.next = 8;
              return this._writer.write(to, processed);

            case 8:
              return context$2$0.abrupt('return', context$2$0.sent);

            case 9:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this);
      }
    }]);
    return Rustie;
  })();

  exports.Rustie = Rustie;
});
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('dal/reader', ['exports', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/core-js/object/define-property', 'babel-runtime/regenerator', 'babel-runtime/core-js/object/create', '../errors'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('babel-runtime/helpers/create-class'), require('babel-runtime/helpers/class-call-check'), require('babel-runtime/core-js/object/define-property'), require('babel-runtime/regenerator'), require('babel-runtime/core-js/object/create'), require('../errors'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._createClass, global._classCallCheck, global._Object$defineProperty, global._regeneratorRuntime, global._Object$create, global.errors);
    global.dalReader = mod.exports;
  }
})(this, function (exports, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeCoreJsObjectDefineProperty, _babelRuntimeRegenerator, _babelRuntimeCoreJsObjectCreate, _errors) {
  'use strict';

  (0, _babelRuntimeCoreJsObjectDefineProperty['default'])(exports, '__esModule', {
    value: true
  });

  var Reader = (function () {
    function Reader() {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, Reader);

      if (this.constructor === Reader) {
        throw new _errors.RustieAbstractClassError('cannot instantiate class Reader. Reader is an abstract class');
      }
    }

    (0, _babelRuntimeHelpersCreateClass['default'])(Reader, [{
      key: 'read',

      //noinspection JSMethodCanBeStatic
      value: function read() {
        return _babelRuntimeRegenerator['default'].async(function read$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              return context$2$0.abrupt('return', (0, _babelRuntimeCoreJsObjectCreate['default'])(null));

            case 1:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this);
      }
    }]);
    return Reader;
  })();

  exports.Reader = Reader;
});

/*from*/
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('dal/writer', ['exports', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/core-js/object/define-property', 'babel-runtime/regenerator', '../errors'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('babel-runtime/helpers/create-class'), require('babel-runtime/helpers/class-call-check'), require('babel-runtime/core-js/object/define-property'), require('babel-runtime/regenerator'), require('../errors'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._createClass, global._classCallCheck, global._Object$defineProperty, global._regeneratorRuntime, global.errors);
    global.dalWriter = mod.exports;
  }
})(this, function (exports, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeCoreJsObjectDefineProperty, _babelRuntimeRegenerator, _errors) {
  'use strict';

  (0, _babelRuntimeCoreJsObjectDefineProperty['default'])(exports, '__esModule', {
    value: true
  });

  var Writer = (function () {
    function Writer() {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, Writer);

      if (this.constructor === Writer) {
        throw new _errors.RustieAbstractClassError('cannot instantiate class Writer. Writer is an abstract class');
      }
    }

    (0, _babelRuntimeHelpersCreateClass['default'])(Writer, [{
      key: 'write',

      //noinspection JSMethodCanBeStatic
      value: function write() {
        return _babelRuntimeRegenerator['default'].async(function write$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              return context$2$0.abrupt('return', true);

            case 1:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this);
      }
    }]);
    return Writer;
  })();

  exports.Writer = Writer;
});

/*to, files*/
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('dal/empty/null-reader', ['exports', 'babel-runtime/helpers/inherits', 'babel-runtime/helpers/get', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/core-js/object/define-property', 'babel-runtime/regenerator', '../../index'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('babel-runtime/helpers/inherits'), require('babel-runtime/helpers/get'), require('babel-runtime/helpers/create-class'), require('babel-runtime/helpers/class-call-check'), require('babel-runtime/core-js/object/define-property'), require('babel-runtime/regenerator'), require('../../index'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._inherits, global._get, global._createClass, global._classCallCheck, global._Object$defineProperty, global._regeneratorRuntime, global.index);
    global.dalEmptyNullReader = mod.exports;
  }
})(this, function (exports, _babelRuntimeHelpersInherits, _babelRuntimeHelpersGet, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeCoreJsObjectDefineProperty, _babelRuntimeRegenerator, _index) {
  'use strict';

  (0, _babelRuntimeCoreJsObjectDefineProperty['default'])(exports, '__esModule', {
    value: true
  });

  var NullReader = (function (_Reader) {
    function NullReader() {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, NullReader);

      if (_Reader != null) {
        _Reader.apply(this, arguments);
      }
    }

    (0, _babelRuntimeHelpersInherits['default'])(NullReader, _Reader);
    (0, _babelRuntimeHelpersCreateClass['default'])(NullReader, [{
      key: 'read',

      //noinspection JSMethodCanBeStatic
      value: function read() {
        return _babelRuntimeRegenerator['default'].async(function read$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              return context$2$0.abrupt('return', (0, _babelRuntimeHelpersGet['default'])(Object.getPrototypeOf(NullReader.prototype), 'read', this).call(this));

            case 1:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this);
      }
    }]);
    return NullReader;
  })(_index.Reader);

  exports.NullReader = NullReader;
});

/*from*/
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('dal/empty/null-writer', ['exports', 'babel-runtime/helpers/inherits', 'babel-runtime/helpers/get', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/core-js/object/define-property', 'babel-runtime/regenerator', '../../index'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('babel-runtime/helpers/inherits'), require('babel-runtime/helpers/get'), require('babel-runtime/helpers/create-class'), require('babel-runtime/helpers/class-call-check'), require('babel-runtime/core-js/object/define-property'), require('babel-runtime/regenerator'), require('../../index'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._inherits, global._get, global._createClass, global._classCallCheck, global._Object$defineProperty, global._regeneratorRuntime, global.index);
    global.dalEmptyNullWriter = mod.exports;
  }
})(this, function (exports, _babelRuntimeHelpersInherits, _babelRuntimeHelpersGet, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeCoreJsObjectDefineProperty, _babelRuntimeRegenerator, _index) {
  'use strict';

  (0, _babelRuntimeCoreJsObjectDefineProperty['default'])(exports, '__esModule', {
    value: true
  });

  var NullWriter = (function (_Writer) {
    function NullWriter() {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, NullWriter);

      if (_Writer != null) {
        _Writer.apply(this, arguments);
      }
    }

    (0, _babelRuntimeHelpersInherits['default'])(NullWriter, _Writer);
    (0, _babelRuntimeHelpersCreateClass['default'])(NullWriter, [{
      key: 'write',

      //noinspection JSMethodCanBeStatic
      value: function write() {
        return _babelRuntimeRegenerator['default'].async(function write$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              return context$2$0.abrupt('return', (0, _babelRuntimeHelpersGet['default'])(Object.getPrototypeOf(NullWriter.prototype), 'write', this).call(this));

            case 1:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this);
      }
    }]);
    return NullWriter;
  })(_index.Writer);

  exports.NullWriter = NullWriter;
});

/*to, files*/
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('plugins/front-matter/index', ['exports', 'babel-runtime/helpers/inherits', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/core-js/object/define-property', 'babel-runtime/regenerator', 'babel-runtime/core-js/object/keys', 'babel-runtime/core-js/object/create', '../../index', './js-yaml', 'babel-runtime/helpers/interop-require-default'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('babel-runtime/helpers/inherits'), require('babel-runtime/helpers/create-class'), require('babel-runtime/helpers/class-call-check'), require('babel-runtime/core-js/object/define-property'), require('babel-runtime/regenerator'), require('babel-runtime/core-js/object/keys'), require('babel-runtime/core-js/object/create'), require('../../index'), require('./js-yaml'), require('babel-runtime/helpers/interop-require-default'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._inherits, global._createClass, global._classCallCheck, global._Object$defineProperty, global._regeneratorRuntime, global._Object$keys, global._Object$create, global.index, global.jsyaml, global._interopRequireDefault);
    global.pluginsFrontMatterIndex = mod.exports;
  }
})(this, function (exports, _babelRuntimeHelpersInherits, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeCoreJsObjectDefineProperty, _babelRuntimeRegenerator, _babelRuntimeCoreJsObjectKeys, _babelRuntimeCoreJsObjectCreate, _index, _jsYaml, _babelRuntimeHelpersInteropRequireDefault) {
  'use strict';

  (0, _babelRuntimeCoreJsObjectDefineProperty['default'])(exports, '__esModule', {
    value: true
  });

  var _jsyaml = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_jsYaml);

  function uint8ToString(u8a) {
    var CHUNK_SIZE = 32768;
    var c = [];
    for (var i = 0, j = u8a.length; i < j; i += CHUNK_SIZE) {
      c.push(String.fromCharCode.apply(null, u8a.subarray(i, i + CHUNK_SIZE)));
    }
    return c.join('');
  }

  function stringToUint8(str) {
    var result = new Uint8Array(str.length);
    for (var i = 0, j = str.length; i < j; ++i) {
      result[i] = str.charCodeAt(i);
    }
    return result;
  }

  function getPosition(str, m, i) {
    return str.split(m, i).join(m).length;
  }

  var FrontMatter = (function (_Plugin) {
    function FrontMatter() {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, FrontMatter);

      if (_Plugin != null) {
        _Plugin.apply(this, arguments);
      }
    }

    (0, _babelRuntimeHelpersInherits['default'])(FrontMatter, _Plugin);
    (0, _babelRuntimeHelpersCreateClass['default'])(FrontMatter, [{
      key: 'process',
      value: function process(files) {
        var delimiter, yamlSnippet;
        return _babelRuntimeRegenerator['default'].async(function process$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              delimiter = '---', yamlSnippet = undefined;

              (0, _babelRuntimeCoreJsObjectKeys['default'])(files).forEach(function (path) {
                var frontmatter = (0, _babelRuntimeCoreJsObjectCreate['default'])(null);
                var file = files[path];
                var contentString = uint8ToString(file.content);
                var lastDelimiter = getPosition(contentString, delimiter, 2);
                if (lastDelimiter) {
                  yamlSnippet = contentString.substring(delimiter.length, lastDelimiter);
                  frontmatter = _jsyaml['default'].load(yamlSnippet);
                  contentString = contentString.substring(lastDelimiter + delimiter.length).trim();
                }
                file.content = stringToUint8(contentString);
                file.metadata.frontmatter = frontmatter;
              });
              return context$2$0.abrupt('return', files);

            case 3:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this);
      }
    }]);
    return FrontMatter;
  })(_index.Plugin);

  exports.FrontMatter = FrontMatter;
});
(function(global, factory){if(typeof define === "function" && define.amd){define("plugins/front-matter/js-yaml", ["exports", "babel-runtime/core-js/object/keys"], factory);}else if(typeof exports !== "undefined"){factory(exports, require("babel-runtime/core-js/object/keys"));}else {var mod={exports:{}};factory(mod.exports, global._Object$keys);global.pluginsFrontMatterJsYaml = mod.exports;}})(this, function(exports, _babelRuntimeCoreJsObjectKeys){"use strict";(function(f){if(typeof exports === "object" && typeof module !== "undefined"){module.exports = f();}else if(typeof define === "function" && define.amd){define([], f);}else {var g;if(typeof window !== "undefined"){g = window;}else if(typeof global !== "undefined"){g = global;}else if(typeof self !== "undefined"){g = self;}else {g = this;}g.jsyaml = f();}})(function(){var define, module, exports;return (function e(t, n, r){function s(o, u){if(!n[o]){if(!t[o]){var a=typeof require == "function" && require;if(!u && a)return a(o, !0);if(i)return i(o, !0);var f=new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);}var l=n[o] = {exports:{}};t[o][0].call(l.exports, function(e){var n=t[o][1][e];return s(n?n:e);}, l, l.exports, e, t, n, r);}return n[o].exports;}var i=typeof require == "function" && require;for(var o=0; o < r.length; o++) s(r[o]);return s;})({1:[function(require, module, exports){"use strict";var loader=require("./js-yaml/loader");var dumper=require("./js-yaml/dumper");function deprecated(name){return function(){throw new Error("Function " + name + " is deprecated and cannot be used.");};}module.exports.Type = require("./js-yaml/type");module.exports.Schema = require("./js-yaml/schema");module.exports.FAILSAFE_SCHEMA = require("./js-yaml/schema/failsafe");module.exports.JSON_SCHEMA = require("./js-yaml/schema/json");module.exports.CORE_SCHEMA = require("./js-yaml/schema/core");module.exports.DEFAULT_SAFE_SCHEMA = require("./js-yaml/schema/default_safe");module.exports.DEFAULT_FULL_SCHEMA = require("./js-yaml/schema/default_full");module.exports.load = loader.load;module.exports.loadAll = loader.loadAll;module.exports.safeLoad = loader.safeLoad;module.exports.safeLoadAll = loader.safeLoadAll;module.exports.dump = dumper.dump;module.exports.safeDump = dumper.safeDump;module.exports.YAMLException = require("./js-yaml/exception");module.exports.MINIMAL_SCHEMA = require("./js-yaml/schema/failsafe");module.exports.SAFE_SCHEMA = require("./js-yaml/schema/default_safe");module.exports.DEFAULT_SCHEMA = require("./js-yaml/schema/default_full");module.exports.scan = deprecated("scan");module.exports.parse = deprecated("parse");module.exports.compose = deprecated("compose");module.exports.addConstructor = deprecated("addConstructor");}, {"./js-yaml/dumper":3, "./js-yaml/exception":4, "./js-yaml/loader":5, "./js-yaml/schema":7, "./js-yaml/schema/core":8, "./js-yaml/schema/default_full":9, "./js-yaml/schema/default_safe":10, "./js-yaml/schema/failsafe":11, "./js-yaml/schema/json":12, "./js-yaml/type":13}], 2:[function(require, module, exports){"use strict";function isNothing(subject){return typeof subject === "undefined" || null === subject;}function isObject(subject){return typeof subject === "object" && null !== subject;}function toArray(sequence){if(Array.isArray(sequence)){return sequence;}else if(isNothing(sequence)){return [];}return [sequence];}function extend(target, source){var index, length, key, sourceKeys;if(source){sourceKeys = (0, _babelRuntimeCoreJsObjectKeys["default"])(source);for(index = 0, length = sourceKeys.length; index < length; index += 1) {key = sourceKeys[index];target[key] = source[key];}}return target;}function repeat(string, count){var result="", cycle;for(cycle = 0; cycle < count; cycle += 1) {result += string;}return result;}function isNegativeZero(number){return 0 === number && Number.NEGATIVE_INFINITY === 1 / number;}module.exports.isNothing = isNothing;module.exports.isObject = isObject;module.exports.toArray = toArray;module.exports.repeat = repeat;module.exports.isNegativeZero = isNegativeZero;module.exports.extend = extend;}, {}], 3:[function(require, module, exports){"use strict";var common=require("./common");var YAMLException=require("./exception");var DEFAULT_FULL_SCHEMA=require("./schema/default_full");var DEFAULT_SAFE_SCHEMA=require("./schema/default_safe");var _toString=Object.prototype.toString;var _hasOwnProperty=Object.prototype.hasOwnProperty;var CHAR_TAB=9;var CHAR_LINE_FEED=10;var CHAR_CARRIAGE_RETURN=13;var CHAR_SPACE=32;var CHAR_EXCLAMATION=33;var CHAR_DOUBLE_QUOTE=34;var CHAR_SHARP=35;var CHAR_PERCENT=37;var CHAR_AMPERSAND=38;var CHAR_SINGLE_QUOTE=39;var CHAR_ASTERISK=42;var CHAR_COMMA=44;var CHAR_MINUS=45;var CHAR_COLON=58;var CHAR_GREATER_THAN=62;var CHAR_QUESTION=63;var CHAR_COMMERCIAL_AT=64;var CHAR_LEFT_SQUARE_BRACKET=91;var CHAR_RIGHT_SQUARE_BRACKET=93;var CHAR_GRAVE_ACCENT=96;var CHAR_LEFT_CURLY_BRACKET=123;var CHAR_VERTICAL_LINE=124;var CHAR_RIGHT_CURLY_BRACKET=125;var ESCAPE_SEQUENCES={};ESCAPE_SEQUENCES[0] = "\\0";ESCAPE_SEQUENCES[7] = "\\a";ESCAPE_SEQUENCES[8] = "\\b";ESCAPE_SEQUENCES[9] = "\\t";ESCAPE_SEQUENCES[10] = "\\n";ESCAPE_SEQUENCES[11] = "\\v";ESCAPE_SEQUENCES[12] = "\\f";ESCAPE_SEQUENCES[13] = "\\r";ESCAPE_SEQUENCES[27] = "\\e";ESCAPE_SEQUENCES[34] = "\\\"";ESCAPE_SEQUENCES[92] = "\\\\";ESCAPE_SEQUENCES[133] = "\\N";ESCAPE_SEQUENCES[160] = "\\_";ESCAPE_SEQUENCES[8232] = "\\L";ESCAPE_SEQUENCES[8233] = "\\P";var DEPRECATED_BOOLEANS_SYNTAX=["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"];function compileStyleMap(schema, map){var result, keys, index, length, tag, style, type;if(null === map){return {};}result = {};keys = (0, _babelRuntimeCoreJsObjectKeys["default"])(map);for(index = 0, length = keys.length; index < length; index += 1) {tag = keys[index];style = String(map[tag]);if("!!" === tag.slice(0, 2)){tag = "tag:yaml.org,2002:" + tag.slice(2);}type = schema.compiledTypeMap[tag];if(type && _hasOwnProperty.call(type.styleAliases, style)){style = type.styleAliases[style];}result[tag] = style;}return result;}function encodeHex(character){var string, handle, length;string = character.toString(16).toUpperCase();if(character <= 255){handle = "x";length = 2;}else if(character <= 65535){handle = "u";length = 4;}else if(character <= 4294967295){handle = "U";length = 8;}else {throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");}return "\\" + handle + common.repeat("0", length - string.length) + string;}function State(options){this.schema = options["schema"] || DEFAULT_FULL_SCHEMA;this.indent = Math.max(1, options["indent"] || 2);this.skipInvalid = options["skipInvalid"] || false;this.flowLevel = common.isNothing(options["flowLevel"])?-1:options["flowLevel"];this.styleMap = compileStyleMap(this.schema, options["styles"] || null);this.sortKeys = options["sortKeys"] || false;this.implicitTypes = this.schema.compiledImplicit;this.explicitTypes = this.schema.compiledExplicit;this.tag = null;this.result = "";this.duplicates = [];this.usedDuplicates = null;}function indentString(string, spaces){var ind=common.repeat(" ", spaces), position=0, next=-1, result="", line, length=string.length;while(position < length) {next = string.indexOf("\n", position);if(next === -1){line = string.slice(position);position = length;}else {line = string.slice(position, next + 1);position = next + 1;}if(line.length && line !== "\n"){result += ind;}result += line;}return result;}function generateNextLine(state, level){return "\n" + common.repeat(" ", state.indent * level);}function testImplicitResolving(state, str){var index, length, type;for(index = 0, length = state.implicitTypes.length; index < length; index += 1) {type = state.implicitTypes[index];if(type.resolve(str)){return true;}}return false;}function StringBuilder(source){this.source = source;this.result = "";this.checkpoint = 0;}StringBuilder.prototype.takeUpTo = function(position){var er;if(position < this.checkpoint){er = new Error("position should be > checkpoint");er.position = position;er.checkpoint = this.checkpoint;throw er;}this.result += this.source.slice(this.checkpoint, position);this.checkpoint = position;return this;};StringBuilder.prototype.escapeChar = function(){var character, esc;character = this.source.charCodeAt(this.checkpoint);esc = ESCAPE_SEQUENCES[character] || encodeHex(character);this.result += esc;this.checkpoint += 1;return this;};StringBuilder.prototype.finish = function(){if(this.source.length > this.checkpoint){this.takeUpTo(this.source.length);}};function writeScalar(state, object, level){var simple, first, spaceWrap, folded, literal, single, double, sawLineFeed, linePosition, longestLine, indent, max, character, position, escapeSeq, hexEsc, previous, lineLength, modifier, trailingLineBreaks, result;if(0 === object.length){state.dump = "''";return;}if(-1 !== DEPRECATED_BOOLEANS_SYNTAX.indexOf(object)){state.dump = "'" + object + "'";return;}simple = true;first = object.length?object.charCodeAt(0):0;spaceWrap = CHAR_SPACE === first || CHAR_SPACE === object.charCodeAt(object.length - 1);if(CHAR_MINUS === first || CHAR_QUESTION === first || CHAR_COMMERCIAL_AT === first || CHAR_GRAVE_ACCENT === first){simple = false;}if(spaceWrap){simple = false;folded = false;literal = false;}else {folded = true;literal = true;}single = true;double = new StringBuilder(object);sawLineFeed = false;linePosition = 0;longestLine = 0;indent = state.indent * level;max = 80;if(indent < 40){max -= indent;}else {max = 40;}for(position = 0; position < object.length; position++) {character = object.charCodeAt(position);if(simple){if(!simpleChar(character)){simple = false;}else {continue;}}if(single && character === CHAR_SINGLE_QUOTE){single = false;}escapeSeq = ESCAPE_SEQUENCES[character];hexEsc = needsHexEscape(character);if(!escapeSeq && !hexEsc){continue;}if(character !== CHAR_LINE_FEED && character !== CHAR_DOUBLE_QUOTE && character !== CHAR_SINGLE_QUOTE){folded = false;literal = false;}else if(character === CHAR_LINE_FEED){sawLineFeed = true;single = false;if(position > 0){previous = object.charCodeAt(position - 1);if(previous === CHAR_SPACE){literal = false;folded = false;}}if(folded){lineLength = position - linePosition;linePosition = position;if(lineLength > longestLine){longestLine = lineLength;}}}if(character !== CHAR_DOUBLE_QUOTE){single = false;}double.takeUpTo(position);double.escapeChar();}if(simple && testImplicitResolving(state, object)){simple = false;}modifier = "";if(folded || literal){trailingLineBreaks = 0;if(object.charCodeAt(object.length - 1) === CHAR_LINE_FEED){trailingLineBreaks += 1;if(object.charCodeAt(object.length - 2) === CHAR_LINE_FEED){trailingLineBreaks += 1;}}if(trailingLineBreaks === 0){modifier = "-";}else if(trailingLineBreaks === 2){modifier = "+";}}if(literal && longestLine < max){folded = false;}if(!sawLineFeed){literal = false;}if(simple){state.dump = object;}else if(single){state.dump = "'" + object + "'";}else if(folded){result = fold(object, max);state.dump = ">" + modifier + "\n" + indentString(result, indent);}else if(literal){if(!modifier){object = object.replace(/\n$/, "");}state.dump = "|" + modifier + "\n" + indentString(object, indent);}else if(double){double.finish();state.dump = "\"" + double.result + "\"";}else {throw new Error("Failed to dump scalar value");}return;}function fold(object, max){var result="", position=0, length=object.length, trailing=/\n+$/.exec(object), newLine;if(trailing){length = trailing.index + 1;}while(position < length) {newLine = object.indexOf("\n", position);if(newLine > length || newLine === -1){if(result){result += "\n\n";}result += foldLine(object.slice(position, length), max);position = length;}else {if(result){result += "\n\n";}result += foldLine(object.slice(position, newLine), max);position = newLine + 1;}}if(trailing && trailing[0] !== "\n"){result += trailing[0];}return result;}function foldLine(line, max){if(line === ""){return line;}var foldRe=/[^\s] [^\s]/g, result="", prevMatch=0, foldStart=0, match=foldRe.exec(line), index, foldEnd, folded;while(match) {index = match.index;if(index - foldStart > max){if(prevMatch !== foldStart){foldEnd = prevMatch;}else {foldEnd = index;}if(result){result += "\n";}folded = line.slice(foldStart, foldEnd);result += folded;foldStart = foldEnd + 1;}prevMatch = index + 1;match = foldRe.exec(line);}if(result){result += "\n";}if(foldStart !== prevMatch && line.length - foldStart > max){result += line.slice(foldStart, prevMatch) + "\n" + line.slice(prevMatch + 1);}else {result += line.slice(foldStart);}return result;}function simpleChar(character){return CHAR_TAB !== character && CHAR_LINE_FEED !== character && CHAR_CARRIAGE_RETURN !== character && CHAR_COMMA !== character && CHAR_LEFT_SQUARE_BRACKET !== character && CHAR_RIGHT_SQUARE_BRACKET !== character && CHAR_LEFT_CURLY_BRACKET !== character && CHAR_RIGHT_CURLY_BRACKET !== character && CHAR_SHARP !== character && CHAR_AMPERSAND !== character && CHAR_ASTERISK !== character && CHAR_EXCLAMATION !== character && CHAR_VERTICAL_LINE !== character && CHAR_GREATER_THAN !== character && CHAR_SINGLE_QUOTE !== character && CHAR_DOUBLE_QUOTE !== character && CHAR_PERCENT !== character && CHAR_COLON !== character && !ESCAPE_SEQUENCES[character] && !needsHexEscape(character);}function needsHexEscape(character){return !(32 <= character && character <= 126 || 133 === character || 160 <= character && character <= 55295 || 57344 <= character && character <= 65533 || 65536 <= character && character <= 1114111);}function writeFlowSequence(state, level, object){var _result="", _tag=state.tag, index, length;for(index = 0, length = object.length; index < length; index += 1) {if(writeNode(state, level, object[index], false, false)){if(0 !== index){_result += ", ";}_result += state.dump;}}state.tag = _tag;state.dump = "[" + _result + "]";}function writeBlockSequence(state, level, object, compact){var _result="", _tag=state.tag, index, length;for(index = 0, length = object.length; index < length; index += 1) {if(writeNode(state, level + 1, object[index], true, true)){if(!compact || 0 !== index){_result += generateNextLine(state, level);}_result += "- " + state.dump;}}state.tag = _tag;state.dump = _result || "[]";}function writeFlowMapping(state, level, object){var _result="", _tag=state.tag, objectKeyList=(0, _babelRuntimeCoreJsObjectKeys["default"])(object), index, length, objectKey, objectValue, pairBuffer;for(index = 0, length = objectKeyList.length; index < length; index += 1) {pairBuffer = "";if(0 !== index){pairBuffer += ", ";}objectKey = objectKeyList[index];objectValue = object[objectKey];if(!writeNode(state, level, objectKey, false, false)){continue;}if(state.dump.length > 1024){pairBuffer += "? ";}pairBuffer += state.dump + ": ";if(!writeNode(state, level, objectValue, false, false)){continue;}pairBuffer += state.dump;_result += pairBuffer;}state.tag = _tag;state.dump = "{" + _result + "}";}function writeBlockMapping(state, level, object, compact){var _result="", _tag=state.tag, objectKeyList=(0, _babelRuntimeCoreJsObjectKeys["default"])(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;if(state.sortKeys === true){objectKeyList.sort();}else if(typeof state.sortKeys === "function"){objectKeyList.sort(state.sortKeys);}else if(state.sortKeys){throw new YAMLException("sortKeys must be a boolean or a function");}for(index = 0, length = objectKeyList.length; index < length; index += 1) {pairBuffer = "";if(!compact || 0 !== index){pairBuffer += generateNextLine(state, level);}objectKey = objectKeyList[index];objectValue = object[objectKey];if(!writeNode(state, level + 1, objectKey, true, true)){continue;}explicitPair = null !== state.tag && "?" !== state.tag || state.dump && state.dump.length > 1024;if(explicitPair){if(state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)){pairBuffer += "?";}else {pairBuffer += "? ";}}pairBuffer += state.dump;if(explicitPair){pairBuffer += generateNextLine(state, level);}if(!writeNode(state, level + 1, objectValue, true, explicitPair)){continue;}if(state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)){pairBuffer += ":";}else {pairBuffer += ": ";}pairBuffer += state.dump;_result += pairBuffer;}state.tag = _tag;state.dump = _result || "{}";}function detectType(state, object, explicit){var _result, typeList, index, length, type, style;typeList = explicit?state.explicitTypes:state.implicitTypes;for(index = 0, length = typeList.length; index < length; index += 1) {type = typeList[index];if((type.instanceOf || type.predicate) && (!type.instanceOf || "object" === typeof object && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))){state.tag = explicit?type.tag:"?";if(type.represent){style = state.styleMap[type.tag] || type.defaultStyle;if("[object Function]" === _toString.call(type.represent)){_result = type.represent(object, style);}else if(_hasOwnProperty.call(type.represent, style)){_result = type.represent[style](object, style);}else {throw new YAMLException("!<" + type.tag + "> tag resolver accepts not \"" + style + "\" style");}state.dump = _result;}return true;}}return false;}function writeNode(state, level, object, block, compact){state.tag = null;state.dump = object;if(!detectType(state, object, false)){detectType(state, object, true);}var type=_toString.call(state.dump);if(block){block = 0 > state.flowLevel || state.flowLevel > level;}if(null !== state.tag && "?" !== state.tag || 2 !== state.indent && level > 0){compact = false;}var objectOrArray="[object Object]" === type || "[object Array]" === type, duplicateIndex, duplicate;if(objectOrArray){duplicateIndex = state.duplicates.indexOf(object);duplicate = duplicateIndex !== -1;}if(duplicate && state.usedDuplicates[duplicateIndex]){state.dump = "*ref_" + duplicateIndex;}else {if(objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]){state.usedDuplicates[duplicateIndex] = true;}if("[object Object]" === type){if(block && 0 !== (0, _babelRuntimeCoreJsObjectKeys["default"])(state.dump).length){writeBlockMapping(state, level, state.dump, compact);if(duplicate){state.dump = "&ref_" + duplicateIndex + (0 === level?"\n":"") + state.dump;}}else {writeFlowMapping(state, level, state.dump);if(duplicate){state.dump = "&ref_" + duplicateIndex + " " + state.dump;}}}else if("[object Array]" === type){if(block && 0 !== state.dump.length){writeBlockSequence(state, level, state.dump, compact);if(duplicate){state.dump = "&ref_" + duplicateIndex + (0 === level?"\n":"") + state.dump;}}else {writeFlowSequence(state, level, state.dump);if(duplicate){state.dump = "&ref_" + duplicateIndex + " " + state.dump;}}}else if("[object String]" === type){if("?" !== state.tag){writeScalar(state, state.dump, level);}}else {if(state.skipInvalid){return false;}throw new YAMLException("unacceptable kind of an object to dump " + type);}if(null !== state.tag && "?" !== state.tag){state.dump = "!<" + state.tag + "> " + state.dump;}}return true;}function getDuplicateReferences(object, state){var objects=[], duplicatesIndexes=[], index, length;inspectNode(object, objects, duplicatesIndexes);for(index = 0, length = duplicatesIndexes.length; index < length; index += 1) {state.duplicates.push(objects[duplicatesIndexes[index]]);}state.usedDuplicates = new Array(length);}function inspectNode(object, objects, duplicatesIndexes){var type=_toString.call(object), objectKeyList, index, length;if(null !== object && "object" === typeof object){index = objects.indexOf(object);if(-1 !== index){if(-1 === duplicatesIndexes.indexOf(index)){duplicatesIndexes.push(index);}}else {objects.push(object);if(Array.isArray(object)){for(index = 0, length = object.length; index < length; index += 1) {inspectNode(object[index], objects, duplicatesIndexes);}}else {objectKeyList = (0, _babelRuntimeCoreJsObjectKeys["default"])(object);for(index = 0, length = objectKeyList.length; index < length; index += 1) {inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);}}}}}function dump(input, options){options = options || {};var state=new State(options);getDuplicateReferences(input, state);if(writeNode(state, 0, input, true, true)){return state.dump + "\n";}return "";}function safeDump(input, options){return dump(input, common.extend({schema:DEFAULT_SAFE_SCHEMA}, options));}module.exports.dump = dump;module.exports.safeDump = safeDump;}, {"./common":2, "./exception":4, "./schema/default_full":9, "./schema/default_safe":10}], 4:[function(require, module, exports){"use strict";function YAMLException(reason, mark){this.name = "YAMLException";this.reason = reason;this.mark = mark;this.message = this.toString(false);}YAMLException.prototype.toString = function toString(compact){var result;result = "JS-YAML: " + (this.reason || "(unknown reason)");if(!compact && this.mark){result += " " + this.mark.toString();}return result;};module.exports = YAMLException;}, {}], 5:[function(require, module, exports){"use strict";var common=require("./common");var YAMLException=require("./exception");var Mark=require("./mark");var DEFAULT_SAFE_SCHEMA=require("./schema/default_safe");var DEFAULT_FULL_SCHEMA=require("./schema/default_full");var _hasOwnProperty=Object.prototype.hasOwnProperty;var CONTEXT_FLOW_IN=1;var CONTEXT_FLOW_OUT=2;var CONTEXT_BLOCK_IN=3;var CONTEXT_BLOCK_OUT=4;var CHOMPING_CLIP=1;var CHOMPING_STRIP=2;var CHOMPING_KEEP=3;var PATTERN_NON_PRINTABLE=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;var PATTERN_NON_ASCII_LINE_BREAKS=/[\x85\u2028\u2029]/;var PATTERN_FLOW_INDICATORS=/[,\[\]\{\}]/;var PATTERN_TAG_HANDLE=/^(?:!|!!|![a-z\-]+!)$/i;var PATTERN_TAG_URI=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function is_EOL(c){return c === 10 || c === 13;}function is_WHITE_SPACE(c){return c === 9 || c === 32;}function is_WS_OR_EOL(c){return c === 9 || c === 32 || c === 10 || c === 13;}function is_FLOW_INDICATOR(c){return 44 === c || 91 === c || 93 === c || 123 === c || 125 === c;}function fromHexCode(c){var lc;if(48 <= c && c <= 57){return c - 48;}lc = c | 32;if(97 <= lc && lc <= 102){return lc - 97 + 10;}return -1;}function escapedHexLen(c){if(c === 120){return 2;}if(c === 117){return 4;}if(c === 85){return 8;}return 0;}function fromDecimalCode(c){if(48 <= c && c <= 57){return c - 48;}return -1;}function simpleEscapeSequence(c){return c === 48?"\u0000":c === 97?"\u0007":c === 98?"\b":c === 116?"\t":c === 9?"\t":c === 110?"\n":c === 118?"\u000b":c === 102?"\f":c === 114?"\r":c === 101?"\u001b":c === 32?" ":c === 34?"\"":c === 47?"/":c === 92?"\\":c === 78?"":c === 95?" ":c === 76?"\u2028":c === 80?"\u2029":"";}function charFromCodepoint(c){if(c <= 65535){return String.fromCharCode(c);}return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);}var simpleEscapeCheck=new Array(256);var simpleEscapeMap=new Array(256);for(var i=0; i < 256; i++) {simpleEscapeCheck[i] = simpleEscapeSequence(i)?1:0;simpleEscapeMap[i] = simpleEscapeSequence(i);}function State(input, options){this.input = input;this.filename = options["filename"] || null;this.schema = options["schema"] || DEFAULT_FULL_SCHEMA;this.onWarning = options["onWarning"] || null;this.legacy = options["legacy"] || false;this.implicitTypes = this.schema.compiledImplicit;this.typeMap = this.schema.compiledTypeMap;this.length = input.length;this.position = 0;this.line = 0;this.lineStart = 0;this.lineIndent = 0;this.documents = [];}function generateError(state, message){return new YAMLException(message, new Mark(state.filename, state.input, state.position, state.line, state.position - state.lineStart));}function throwError(state, message){throw generateError(state, message);}function throwWarning(state, message){var error=generateError(state, message);if(state.onWarning){state.onWarning.call(null, error);}else {throw error;}}var directiveHandlers={YAML:function handleYamlDirective(state, name, args){var match, major, minor;if(null !== state.version){throwError(state, "duplication of %YAML directive");}if(1 !== args.length){throwError(state, "YAML directive accepts exactly one argument");}match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);if(null === match){throwError(state, "ill-formed argument of the YAML directive");}major = parseInt(match[1], 10);minor = parseInt(match[2], 10);if(1 !== major){throwError(state, "unacceptable YAML version of the document");}state.version = args[0];state.checkLineBreaks = minor < 2;if(1 !== minor && 2 !== minor){throwWarning(state, "unsupported YAML version of the document");}}, TAG:function handleTagDirective(state, name, args){var handle, prefix;if(2 !== args.length){throwError(state, "TAG directive accepts exactly two arguments");}handle = args[0];prefix = args[1];if(!PATTERN_TAG_HANDLE.test(handle)){throwError(state, "ill-formed tag handle (first argument) of the TAG directive");}if(_hasOwnProperty.call(state.tagMap, handle)){throwError(state, "there is a previously declared suffix for \"" + handle + "\" tag handle");}if(!PATTERN_TAG_URI.test(prefix)){throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");}state.tagMap[handle] = prefix;}};function captureSegment(state, start, end, checkJson){var _position, _length, _character, _result;if(start < end){_result = state.input.slice(start, end);if(checkJson){for(_position = 0, _length = _result.length; _position < _length; _position += 1) {_character = _result.charCodeAt(_position);if(!(9 === _character || 32 <= _character && _character <= 1114111)){throwError(state, "expected valid JSON character");}}}state.result += _result;}}function mergeMappings(state, destination, source){var sourceKeys, key, index, quantity;if(!common.isObject(source)){throwError(state, "cannot merge mappings; the provided source object is unacceptable");}sourceKeys = (0, _babelRuntimeCoreJsObjectKeys["default"])(source);for(index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {key = sourceKeys[index];if(!_hasOwnProperty.call(destination, key)){destination[key] = source[key];}}}function storeMappingPair(state, _result, keyTag, keyNode, valueNode){var index, quantity;keyNode = String(keyNode);if(null === _result){_result = {};}if("tag:yaml.org,2002:merge" === keyTag){if(Array.isArray(valueNode)){for(index = 0, quantity = valueNode.length; index < quantity; index += 1) {mergeMappings(state, _result, valueNode[index]);}}else {mergeMappings(state, _result, valueNode);}}else {_result[keyNode] = valueNode;}return _result;}function readLineBreak(state){var ch;ch = state.input.charCodeAt(state.position);if(10 === ch){state.position++;}else if(13 === ch){state.position++;if(10 === state.input.charCodeAt(state.position)){state.position++;}}else {throwError(state, "a line break is expected");}state.line += 1;state.lineStart = state.position;}function skipSeparationSpace(state, allowComments, checkIndent){var lineBreaks=0, ch=state.input.charCodeAt(state.position);while(0 !== ch) {while(is_WHITE_SPACE(ch)) {ch = state.input.charCodeAt(++state.position);}if(allowComments && 35 === ch){do {ch = state.input.charCodeAt(++state.position);}while(ch !== 10 && ch !== 13 && 0 !== ch);}if(is_EOL(ch)){readLineBreak(state);ch = state.input.charCodeAt(state.position);lineBreaks++;state.lineIndent = 0;while(32 === ch) {state.lineIndent++;ch = state.input.charCodeAt(++state.position);}}else {break;}}if(-1 !== checkIndent && 0 !== lineBreaks && state.lineIndent < checkIndent){throwWarning(state, "deficient indentation");}return lineBreaks;}function testDocumentSeparator(state){var _position=state.position, ch;ch = state.input.charCodeAt(_position);if((45 === ch || 46 === ch) && state.input.charCodeAt(_position + 1) === ch && state.input.charCodeAt(_position + 2) === ch){_position += 3;ch = state.input.charCodeAt(_position);if(ch === 0 || is_WS_OR_EOL(ch)){return true;}}return false;}function writeFoldedLines(state, count){if(1 === count){state.result += " ";}else if(count > 1){state.result += common.repeat("\n", count - 1);}}function readPlainScalar(state, nodeIndent, withinFlowCollection){var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind=state.kind, _result=state.result, ch;ch = state.input.charCodeAt(state.position);if(is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || 35 === ch || 38 === ch || 42 === ch || 33 === ch || 124 === ch || 62 === ch || 39 === ch || 34 === ch || 37 === ch || 64 === ch || 96 === ch){return false;}if(63 === ch || 45 === ch){following = state.input.charCodeAt(state.position + 1);if(is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)){return false;}}state.kind = "scalar";state.result = "";captureStart = captureEnd = state.position;hasPendingContent = false;while(0 !== ch) {if(58 === ch){following = state.input.charCodeAt(state.position + 1);if(is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)){break;}}else if(35 === ch){preceding = state.input.charCodeAt(state.position - 1);if(is_WS_OR_EOL(preceding)){break;}}else if(state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)){break;}else if(is_EOL(ch)){_line = state.line;_lineStart = state.lineStart;_lineIndent = state.lineIndent;skipSeparationSpace(state, false, -1);if(state.lineIndent >= nodeIndent){hasPendingContent = true;ch = state.input.charCodeAt(state.position);continue;}else {state.position = captureEnd;state.line = _line;state.lineStart = _lineStart;state.lineIndent = _lineIndent;break;}}if(hasPendingContent){captureSegment(state, captureStart, captureEnd, false);writeFoldedLines(state, state.line - _line);captureStart = captureEnd = state.position;hasPendingContent = false;}if(!is_WHITE_SPACE(ch)){captureEnd = state.position + 1;}ch = state.input.charCodeAt(++state.position);}captureSegment(state, captureStart, captureEnd, false);if(state.result){return true;}state.kind = _kind;state.result = _result;return false;}function readSingleQuotedScalar(state, nodeIndent){var ch, captureStart, captureEnd;ch = state.input.charCodeAt(state.position);if(39 !== ch){return false;}state.kind = "scalar";state.result = "";state.position++;captureStart = captureEnd = state.position;while(0 !== (ch = state.input.charCodeAt(state.position))) {if(39 === ch){captureSegment(state, captureStart, state.position, true);ch = state.input.charCodeAt(++state.position);if(39 === ch){captureStart = captureEnd = state.position;state.position++;}else {return true;}}else if(is_EOL(ch)){captureSegment(state, captureStart, captureEnd, true);writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));captureStart = captureEnd = state.position;}else if(state.position === state.lineStart && testDocumentSeparator(state)){throwError(state, "unexpected end of the document within a single quoted scalar");}else {state.position++;captureEnd = state.position;}}throwError(state, "unexpected end of the stream within a single quoted scalar");}function readDoubleQuotedScalar(state, nodeIndent){var captureStart, captureEnd, hexLength, hexResult, tmp, tmpEsc, ch;ch = state.input.charCodeAt(state.position);if(34 !== ch){return false;}state.kind = "scalar";state.result = "";state.position++;captureStart = captureEnd = state.position;while(0 !== (ch = state.input.charCodeAt(state.position))) {if(34 === ch){captureSegment(state, captureStart, state.position, true);state.position++;return true;}else if(92 === ch){captureSegment(state, captureStart, state.position, true);ch = state.input.charCodeAt(++state.position);if(is_EOL(ch)){skipSeparationSpace(state, false, nodeIndent);}else if(ch < 256 && simpleEscapeCheck[ch]){state.result += simpleEscapeMap[ch];state.position++;}else if((tmp = escapedHexLen(ch)) > 0){hexLength = tmp;hexResult = 0;for(; hexLength > 0; hexLength--) {ch = state.input.charCodeAt(++state.position);if((tmp = fromHexCode(ch)) >= 0){hexResult = (hexResult << 4) + tmp;}else {throwError(state, "expected hexadecimal character");}}state.result += charFromCodepoint(hexResult);state.position++;}else {throwError(state, "unknown escape sequence");}captureStart = captureEnd = state.position;}else if(is_EOL(ch)){captureSegment(state, captureStart, captureEnd, true);writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));captureStart = captureEnd = state.position;}else if(state.position === state.lineStart && testDocumentSeparator(state)){throwError(state, "unexpected end of the document within a double quoted scalar");}else {state.position++;captureEnd = state.position;}}throwError(state, "unexpected end of the stream within a double quoted scalar");}function readFlowCollection(state, nodeIndent){var readNext=true, _line, _tag=state.tag, _result, _anchor=state.anchor, following, terminator, isPair, isExplicitPair, isMapping, keyNode, keyTag, valueNode, ch;ch = state.input.charCodeAt(state.position);if(ch === 91){terminator = 93;isMapping = false;_result = [];}else if(ch === 123){terminator = 125;isMapping = true;_result = {};}else {return false;}if(null !== state.anchor){state.anchorMap[state.anchor] = _result;}ch = state.input.charCodeAt(++state.position);while(0 !== ch) {skipSeparationSpace(state, true, nodeIndent);ch = state.input.charCodeAt(state.position);if(ch === terminator){state.position++;state.tag = _tag;state.anchor = _anchor;state.kind = isMapping?"mapping":"sequence";state.result = _result;return true;}else if(!readNext){throwError(state, "missed comma between flow collection entries");}keyTag = keyNode = valueNode = null;isPair = isExplicitPair = false;if(63 === ch){following = state.input.charCodeAt(state.position + 1);if(is_WS_OR_EOL(following)){isPair = isExplicitPair = true;state.position++;skipSeparationSpace(state, true, nodeIndent);}}_line = state.line;composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);keyTag = state.tag;keyNode = state.result;skipSeparationSpace(state, true, nodeIndent);ch = state.input.charCodeAt(state.position);if((isExplicitPair || state.line === _line) && 58 === ch){isPair = true;ch = state.input.charCodeAt(++state.position);skipSeparationSpace(state, true, nodeIndent);composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);valueNode = state.result;}if(isMapping){storeMappingPair(state, _result, keyTag, keyNode, valueNode);}else if(isPair){_result.push(storeMappingPair(state, null, keyTag, keyNode, valueNode));}else {_result.push(keyNode);}skipSeparationSpace(state, true, nodeIndent);ch = state.input.charCodeAt(state.position);if(44 === ch){readNext = true;ch = state.input.charCodeAt(++state.position);}else {readNext = false;}}throwError(state, "unexpected end of the stream within a flow collection");}function readBlockScalar(state, nodeIndent){var captureStart, folding, chomping=CHOMPING_CLIP, detectedIndent=false, textIndent=nodeIndent, emptyLines=0, atMoreIndented=false, tmp, ch;ch = state.input.charCodeAt(state.position);if(ch === 124){folding = false;}else if(ch === 62){folding = true;}else {return false;}state.kind = "scalar";state.result = "";while(0 !== ch) {ch = state.input.charCodeAt(++state.position);if(43 === ch || 45 === ch){if(CHOMPING_CLIP === chomping){chomping = 43 === ch?CHOMPING_KEEP:CHOMPING_STRIP;}else {throwError(state, "repeat of a chomping mode identifier");}}else if((tmp = fromDecimalCode(ch)) >= 0){if(tmp === 0){throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");}else if(!detectedIndent){textIndent = nodeIndent + tmp - 1;detectedIndent = true;}else {throwError(state, "repeat of an indentation width identifier");}}else {break;}}if(is_WHITE_SPACE(ch)){do {ch = state.input.charCodeAt(++state.position);}while(is_WHITE_SPACE(ch));if(35 === ch){do {ch = state.input.charCodeAt(++state.position);}while(!is_EOL(ch) && 0 !== ch);}}while(0 !== ch) {readLineBreak(state);state.lineIndent = 0;ch = state.input.charCodeAt(state.position);while((!detectedIndent || state.lineIndent < textIndent) && 32 === ch) {state.lineIndent++;ch = state.input.charCodeAt(++state.position);}if(!detectedIndent && state.lineIndent > textIndent){textIndent = state.lineIndent;}if(is_EOL(ch)){emptyLines++;continue;}if(state.lineIndent < textIndent){if(chomping === CHOMPING_KEEP){state.result += common.repeat("\n", emptyLines);}else if(chomping === CHOMPING_CLIP){if(detectedIndent){state.result += "\n";}}break;}if(folding){if(is_WHITE_SPACE(ch)){atMoreIndented = true;state.result += common.repeat("\n", emptyLines + 1);}else if(atMoreIndented){atMoreIndented = false;state.result += common.repeat("\n", emptyLines + 1);}else if(0 === emptyLines){if(detectedIndent){state.result += " ";}}else {state.result += common.repeat("\n", emptyLines);}}else if(detectedIndent){state.result += common.repeat("\n", emptyLines + 1);}else {}detectedIndent = true;emptyLines = 0;captureStart = state.position;while(!is_EOL(ch) && 0 !== ch) {ch = state.input.charCodeAt(++state.position);}captureSegment(state, captureStart, state.position, false);}return true;}function readBlockSequence(state, nodeIndent){var _line, _tag=state.tag, _anchor=state.anchor, _result=[], following, detected=false, ch;if(null !== state.anchor){state.anchorMap[state.anchor] = _result;}ch = state.input.charCodeAt(state.position);while(0 !== ch) {if(45 !== ch){break;}following = state.input.charCodeAt(state.position + 1);if(!is_WS_OR_EOL(following)){break;}detected = true;state.position++;if(skipSeparationSpace(state, true, -1)){if(state.lineIndent <= nodeIndent){_result.push(null);ch = state.input.charCodeAt(state.position);continue;}}_line = state.line;composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);_result.push(state.result);skipSeparationSpace(state, true, -1);ch = state.input.charCodeAt(state.position);if((state.line === _line || state.lineIndent > nodeIndent) && 0 !== ch){throwError(state, "bad indentation of a sequence entry");}else if(state.lineIndent < nodeIndent){break;}}if(detected){state.tag = _tag;state.anchor = _anchor;state.kind = "sequence";state.result = _result;return true;}return false;}function readBlockMapping(state, nodeIndent, flowIndent){var following, allowCompact, _line, _tag=state.tag, _anchor=state.anchor, _result={}, keyTag=null, keyNode=null, valueNode=null, atExplicitKey=false, detected=false, ch;if(null !== state.anchor){state.anchorMap[state.anchor] = _result;}ch = state.input.charCodeAt(state.position);while(0 !== ch) {following = state.input.charCodeAt(state.position + 1);_line = state.line;if((63 === ch || 58 === ch) && is_WS_OR_EOL(following)){if(63 === ch){if(atExplicitKey){storeMappingPair(state, _result, keyTag, keyNode, null);keyTag = keyNode = valueNode = null;}detected = true;atExplicitKey = true;allowCompact = true;}else if(atExplicitKey){atExplicitKey = false;allowCompact = true;}else {throwError(state, "incomplete explicit mapping pair; a key node is missed");}state.position += 1;ch = following;}else if(composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)){if(state.line === _line){ch = state.input.charCodeAt(state.position);while(is_WHITE_SPACE(ch)) {ch = state.input.charCodeAt(++state.position);}if(58 === ch){ch = state.input.charCodeAt(++state.position);if(!is_WS_OR_EOL(ch)){throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");}if(atExplicitKey){storeMappingPair(state, _result, keyTag, keyNode, null);keyTag = keyNode = valueNode = null;}detected = true;atExplicitKey = false;allowCompact = false;keyTag = state.tag;keyNode = state.result;}else if(detected){throwError(state, "can not read an implicit mapping pair; a colon is missed");}else {state.tag = _tag;state.anchor = _anchor;return true;}}else if(detected){throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");}else {state.tag = _tag;state.anchor = _anchor;return true;}}else {break;}if(state.line === _line || state.lineIndent > nodeIndent){if(composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)){if(atExplicitKey){keyNode = state.result;}else {valueNode = state.result;}}if(!atExplicitKey){storeMappingPair(state, _result, keyTag, keyNode, valueNode);keyTag = keyNode = valueNode = null;}skipSeparationSpace(state, true, -1);ch = state.input.charCodeAt(state.position);}if(state.lineIndent > nodeIndent && 0 !== ch){throwError(state, "bad indentation of a mapping entry");}else if(state.lineIndent < nodeIndent){break;}}if(atExplicitKey){storeMappingPair(state, _result, keyTag, keyNode, null);}if(detected){state.tag = _tag;state.anchor = _anchor;state.kind = "mapping";state.result = _result;}return detected;}function readTagProperty(state){var _position, isVerbatim=false, isNamed=false, tagHandle, tagName, ch;ch = state.input.charCodeAt(state.position);if(33 !== ch){return false;}if(null !== state.tag){throwError(state, "duplication of a tag property");}ch = state.input.charCodeAt(++state.position);if(60 === ch){isVerbatim = true;ch = state.input.charCodeAt(++state.position);}else if(33 === ch){isNamed = true;tagHandle = "!!";ch = state.input.charCodeAt(++state.position);}else {tagHandle = "!";}_position = state.position;if(isVerbatim){do {ch = state.input.charCodeAt(++state.position);}while(0 !== ch && 62 !== ch);if(state.position < state.length){tagName = state.input.slice(_position, state.position);ch = state.input.charCodeAt(++state.position);}else {throwError(state, "unexpected end of the stream within a verbatim tag");}}else {while(0 !== ch && !is_WS_OR_EOL(ch)) {if(33 === ch){if(!isNamed){tagHandle = state.input.slice(_position - 1, state.position + 1);if(!PATTERN_TAG_HANDLE.test(tagHandle)){throwError(state, "named tag handle cannot contain such characters");}isNamed = true;_position = state.position + 1;}else {throwError(state, "tag suffix cannot contain exclamation marks");}}ch = state.input.charCodeAt(++state.position);}tagName = state.input.slice(_position, state.position);if(PATTERN_FLOW_INDICATORS.test(tagName)){throwError(state, "tag suffix cannot contain flow indicator characters");}}if(tagName && !PATTERN_TAG_URI.test(tagName)){throwError(state, "tag name cannot contain such characters: " + tagName);}if(isVerbatim){state.tag = tagName;}else if(_hasOwnProperty.call(state.tagMap, tagHandle)){state.tag = state.tagMap[tagHandle] + tagName;}else if("!" === tagHandle){state.tag = "!" + tagName;}else if("!!" === tagHandle){state.tag = "tag:yaml.org,2002:" + tagName;}else {throwError(state, "undeclared tag handle \"" + tagHandle + "\"");}return true;}function readAnchorProperty(state){var _position, ch;ch = state.input.charCodeAt(state.position);if(38 !== ch){return false;}if(null !== state.anchor){throwError(state, "duplication of an anchor property");}ch = state.input.charCodeAt(++state.position);_position = state.position;while(0 !== ch && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {ch = state.input.charCodeAt(++state.position);}if(state.position === _position){throwError(state, "name of an anchor node must contain at least one character");}state.anchor = state.input.slice(_position, state.position);return true;}function readAlias(state){var _position, alias, len=state.length, input=state.input, ch;ch = state.input.charCodeAt(state.position);if(42 !== ch){return false;}ch = state.input.charCodeAt(++state.position);_position = state.position;while(0 !== ch && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {ch = state.input.charCodeAt(++state.position);}if(state.position === _position){throwError(state, "name of an alias node must contain at least one character");}alias = state.input.slice(_position, state.position);if(!state.anchorMap.hasOwnProperty(alias)){throwError(state, "unidentified alias \"" + alias + "\"");}state.result = state.anchorMap[alias];skipSeparationSpace(state, true, -1);return true;}function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact){var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus=1, atNewLine=false, hasContent=false, typeIndex, typeQuantity, type, flowIndent, blockIndent, _result;state.tag = null;state.anchor = null;state.kind = null;state.result = null;allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;if(allowToSeek){if(skipSeparationSpace(state, true, -1)){atNewLine = true;if(state.lineIndent > parentIndent){indentStatus = 1;}else if(state.lineIndent === parentIndent){indentStatus = 0;}else if(state.lineIndent < parentIndent){indentStatus = -1;}}}if(1 === indentStatus){while(readTagProperty(state) || readAnchorProperty(state)) {if(skipSeparationSpace(state, true, -1)){atNewLine = true;allowBlockCollections = allowBlockStyles;if(state.lineIndent > parentIndent){indentStatus = 1;}else if(state.lineIndent === parentIndent){indentStatus = 0;}else if(state.lineIndent < parentIndent){indentStatus = -1;}}else {allowBlockCollections = false;}}}if(allowBlockCollections){allowBlockCollections = atNewLine || allowCompact;}if(1 === indentStatus || CONTEXT_BLOCK_OUT === nodeContext){if(CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext){flowIndent = parentIndent;}else {flowIndent = parentIndent + 1;}blockIndent = state.position - state.lineStart;if(1 === indentStatus){if(allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)){hasContent = true;}else {if(allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)){hasContent = true;}else if(readAlias(state)){hasContent = true;if(null !== state.tag || null !== state.anchor){throwError(state, "alias node should not have any properties");}}else if(readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)){hasContent = true;if(null === state.tag){state.tag = "?";}}if(null !== state.anchor){state.anchorMap[state.anchor] = state.result;}}}else if(0 === indentStatus){hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);}}if(null !== state.tag && "!" !== state.tag){if("?" === state.tag){for(typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {type = state.implicitTypes[typeIndex];if(type.resolve(state.result)){state.result = type.construct(state.result);state.tag = type.tag;if(null !== state.anchor){state.anchorMap[state.anchor] = state.result;}break;}}}else if(_hasOwnProperty.call(state.typeMap, state.tag)){type = state.typeMap[state.tag];if(null !== state.result && type.kind !== state.kind){throwError(state, "unacceptable node kind for !<" + state.tag + "> tag; it should be \"" + type.kind + "\", not \"" + state.kind + "\"");}if(!type.resolve(state.result)){throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");}else {state.result = type.construct(state.result);if(null !== state.anchor){state.anchorMap[state.anchor] = state.result;}}}else {throwWarning(state, "unknown tag !<" + state.tag + ">");}}return null !== state.tag || null !== state.anchor || hasContent;}function readDocument(state){var documentStart=state.position, _position, directiveName, directiveArgs, hasDirectives=false, ch;state.version = null;state.checkLineBreaks = state.legacy;state.tagMap = {};state.anchorMap = {};while(0 !== (ch = state.input.charCodeAt(state.position))) {skipSeparationSpace(state, true, -1);ch = state.input.charCodeAt(state.position);if(state.lineIndent > 0 || 37 !== ch){break;}hasDirectives = true;ch = state.input.charCodeAt(++state.position);_position = state.position;while(0 !== ch && !is_WS_OR_EOL(ch)) {ch = state.input.charCodeAt(++state.position);}directiveName = state.input.slice(_position, state.position);directiveArgs = [];if(directiveName.length < 1){throwError(state, "directive name must not be less than one character in length");}while(0 !== ch) {while(is_WHITE_SPACE(ch)) {ch = state.input.charCodeAt(++state.position);}if(35 === ch){do {ch = state.input.charCodeAt(++state.position);}while(0 !== ch && !is_EOL(ch));break;}if(is_EOL(ch)){break;}_position = state.position;while(0 !== ch && !is_WS_OR_EOL(ch)) {ch = state.input.charCodeAt(++state.position);}directiveArgs.push(state.input.slice(_position, state.position));}if(0 !== ch){readLineBreak(state);}if(_hasOwnProperty.call(directiveHandlers, directiveName)){directiveHandlers[directiveName](state, directiveName, directiveArgs);}else {throwWarning(state, "unknown document directive \"" + directiveName + "\"");}}skipSeparationSpace(state, true, -1);if(0 === state.lineIndent && 45 === state.input.charCodeAt(state.position) && 45 === state.input.charCodeAt(state.position + 1) && 45 === state.input.charCodeAt(state.position + 2)){state.position += 3;skipSeparationSpace(state, true, -1);}else if(hasDirectives){throwError(state, "directives end mark is expected");}composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);skipSeparationSpace(state, true, -1);if(state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))){throwWarning(state, "non-ASCII line breaks are interpreted as content");}state.documents.push(state.result);if(state.position === state.lineStart && testDocumentSeparator(state)){if(46 === state.input.charCodeAt(state.position)){state.position += 3;skipSeparationSpace(state, true, -1);}return;}if(state.position < state.length - 1){throwError(state, "end of the stream or a document separator is expected");}else {return;}}function loadDocuments(input, options){input = String(input);options = options || {};if(input.length !== 0){if(10 !== input.charCodeAt(input.length - 1) && 13 !== input.charCodeAt(input.length - 1)){input += "\n";}if(input.charCodeAt(0) === 65279){input = input.slice(1);}}var state=new State(input, options);if(PATTERN_NON_PRINTABLE.test(state.input)){throwError(state, "the stream contains non-printable characters");}state.input += "\u0000";while(32 === state.input.charCodeAt(state.position)) {state.lineIndent += 1;state.position += 1;}while(state.position < state.length - 1) {readDocument(state);}return state.documents;}function loadAll(input, iterator, options){var documents=loadDocuments(input, options), index, length;for(index = 0, length = documents.length; index < length; index += 1) {iterator(documents[index]);}}function load(input, options){var documents=loadDocuments(input, options), index, length;if(0 === documents.length){return undefined;}else if(1 === documents.length){return documents[0];}throw new YAMLException("expected a single document in the stream, but found more");}function safeLoadAll(input, output, options){loadAll(input, output, common.extend({schema:DEFAULT_SAFE_SCHEMA}, options));}function safeLoad(input, options){return load(input, common.extend({schema:DEFAULT_SAFE_SCHEMA}, options));}module.exports.loadAll = loadAll;module.exports.load = load;module.exports.safeLoadAll = safeLoadAll;module.exports.safeLoad = safeLoad;}, {"./common":2, "./exception":4, "./mark":6, "./schema/default_full":9, "./schema/default_safe":10}], 6:[function(require, module, exports){"use strict";var common=require("./common");function Mark(name, buffer, position, line, column){this.name = name;this.buffer = buffer;this.position = position;this.line = line;this.column = column;}Mark.prototype.getSnippet = function getSnippet(indent, maxLength){var head, start, tail, end, snippet;if(!this.buffer){return null;}indent = indent || 4;maxLength = maxLength || 75;head = "";start = this.position;while(start > 0 && -1 === "\u0000\r\n\u2028\u2029".indexOf(this.buffer.charAt(start - 1))) {start -= 1;if(this.position - start > maxLength / 2 - 1){head = " ... ";start += 5;break;}}tail = "";end = this.position;while(end < this.buffer.length && -1 === "\u0000\r\n\u2028\u2029".indexOf(this.buffer.charAt(end))) {end += 1;if(end - this.position > maxLength / 2 - 1){tail = " ... ";end -= 5;break;}}snippet = this.buffer.slice(start, end);return common.repeat(" ", indent) + head + snippet + tail + "\n" + common.repeat(" ", indent + this.position - start + head.length) + "^";};Mark.prototype.toString = function toString(compact){var snippet, where="";if(this.name){where += "in \"" + this.name + "\" ";}where += "at line " + (this.line + 1) + ", column " + (this.column + 1);if(!compact){snippet = this.getSnippet();if(snippet){where += ":\n" + snippet;}}return where;};module.exports = Mark;}, {"./common":2}], 7:[function(require, module, exports){"use strict";var common=require("./common");var YAMLException=require("./exception");var Type=require("./type");function compileList(schema, name, result){var exclude=[];schema.include.forEach(function(includedSchema){result = compileList(includedSchema, name, result);});schema[name].forEach(function(currentType){result.forEach(function(previousType, previousIndex){if(previousType.tag === currentType.tag){exclude.push(previousIndex);}});result.push(currentType);});return result.filter(function(type, index){return -1 === exclude.indexOf(index);});}function compileMap(){var result={}, index, length;function collectType(type){result[type.tag] = type;}for(index = 0, length = arguments.length; index < length; index += 1) {arguments[index].forEach(collectType);}return result;}function Schema(definition){this.include = definition.include || [];this.implicit = definition.implicit || [];this.explicit = definition.explicit || [];this.implicit.forEach(function(type){if(type.loadKind && "scalar" !== type.loadKind){throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");}});this.compiledImplicit = compileList(this, "implicit", []);this.compiledExplicit = compileList(this, "explicit", []);this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);}Schema.DEFAULT = null;Schema.create = function createSchema(){var schemas, types;switch(arguments.length){case 1:schemas = Schema.DEFAULT;types = arguments[0];break;case 2:schemas = arguments[0];types = arguments[1];break;default:throw new YAMLException("Wrong number of arguments for Schema.create function");}schemas = common.toArray(schemas);types = common.toArray(types);if(!schemas.every(function(schema){return schema instanceof Schema;})){throw new YAMLException("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");}if(!types.every(function(type){return type instanceof Type;})){throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");}return new Schema({include:schemas, explicit:types});};module.exports = Schema;}, {"./common":2, "./exception":4, "./type":13}], 8:[function(require, module, exports){"use strict";var Schema=require("../schema");module.exports = new Schema({include:[require("./json")]});}, {"../schema":7, "./json":12}], 9:[function(require, module, exports){"use strict";var Schema=require("../schema");module.exports = Schema.DEFAULT = new Schema({include:[require("./default_safe")], explicit:[require("../type/js/undefined"), require("../type/js/regexp"), require("../type/js/function")]});}, {"../schema":7, "../type/js/function":18, "../type/js/regexp":19, "../type/js/undefined":20, "./default_safe":10}], 10:[function(require, module, exports){"use strict";var Schema=require("../schema");module.exports = new Schema({include:[require("./core")], implicit:[require("../type/timestamp"), require("../type/merge")], explicit:[require("../type/binary"), require("../type/omap"), require("../type/pairs"), require("../type/set")]});}, {"../schema":7, "../type/binary":14, "../type/merge":22, "../type/omap":24, "../type/pairs":25, "../type/set":27, "../type/timestamp":29, "./core":8}], 11:[function(require, module, exports){"use strict";var Schema=require("../schema");module.exports = new Schema({explicit:[require("../type/str"), require("../type/seq"), require("../type/map")]});}, {"../schema":7, "../type/map":21, "../type/seq":26, "../type/str":28}], 12:[function(require, module, exports){"use strict";var Schema=require("../schema");module.exports = new Schema({include:[require("./failsafe")], implicit:[require("../type/null"), require("../type/bool"), require("../type/int"), require("../type/float")]});}, {"../schema":7, "../type/bool":15, "../type/float":16, "../type/int":17, "../type/null":23, "./failsafe":11}], 13:[function(require, module, exports){"use strict";var YAMLException=require("./exception");var TYPE_CONSTRUCTOR_OPTIONS=["kind", "resolve", "construct", "instanceOf", "predicate", "represent", "defaultStyle", "styleAliases"];var YAML_NODE_KINDS=["scalar", "sequence", "mapping"];function compileStyleAliases(map){var result={};if(null !== map){(0, _babelRuntimeCoreJsObjectKeys["default"])(map).forEach(function(style){map[style].forEach(function(alias){result[String(alias)] = style;});});}return result;}function Type(tag, options){options = options || {};(0, _babelRuntimeCoreJsObjectKeys["default"])(options).forEach(function(name){if(-1 === TYPE_CONSTRUCTOR_OPTIONS.indexOf(name)){throw new YAMLException("Unknown option \"" + name + "\" is met in definition of \"" + tag + "\" YAML type.");}});this.tag = tag;this.kind = options["kind"] || null;this.resolve = options["resolve"] || function(){return true;};this.construct = options["construct"] || function(data){return data;};this.instanceOf = options["instanceOf"] || null;this.predicate = options["predicate"] || null;this.represent = options["represent"] || null;this.defaultStyle = options["defaultStyle"] || null;this.styleAliases = compileStyleAliases(options["styleAliases"] || null);if(-1 === YAML_NODE_KINDS.indexOf(this.kind)){throw new YAMLException("Unknown kind \"" + this.kind + "\" is specified for \"" + tag + "\" YAML type.");}}module.exports = Type;}, {"./exception":4}], 14:[function(require, module, exports){"use strict";var NodeBuffer=require("buffer").Buffer;var Type=require("../type");var BASE64_MAP="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";function resolveYamlBinary(data){if(null === data){return false;}var code, idx, bitlen=0, len=0, max=data.length, map=BASE64_MAP;for(idx = 0; idx < max; idx++) {code = map.indexOf(data.charAt(idx));if(code > 64){continue;}if(code < 0){return false;}bitlen += 6;}return bitlen % 8 === 0;}function constructYamlBinary(data){var code, idx, tailbits, input=data.replace(/[\r\n=]/g, ""), max=input.length, map=BASE64_MAP, bits=0, result=[];for(idx = 0; idx < max; idx++) {if(idx % 4 === 0 && idx){result.push(bits >> 16 & 255);result.push(bits >> 8 & 255);result.push(bits & 255);}bits = bits << 6 | map.indexOf(input.charAt(idx));}tailbits = max % 4 * 6;if(tailbits === 0){result.push(bits >> 16 & 255);result.push(bits >> 8 & 255);result.push(bits & 255);}else if(tailbits === 18){result.push(bits >> 10 & 255);result.push(bits >> 2 & 255);}else if(tailbits === 12){result.push(bits >> 4 & 255);}if(NodeBuffer){return new NodeBuffer(result);}return result;}function representYamlBinary(object){var result="", bits=0, idx, tail, max=object.length, map=BASE64_MAP;for(idx = 0; idx < max; idx++) {if(idx % 3 === 0 && idx){result += map[bits >> 18 & 63];result += map[bits >> 12 & 63];result += map[bits >> 6 & 63];result += map[bits & 63];}bits = (bits << 8) + object[idx];}tail = max % 3;if(tail === 0){result += map[bits >> 18 & 63];result += map[bits >> 12 & 63];result += map[bits >> 6 & 63];result += map[bits & 63];}else if(tail === 2){result += map[bits >> 10 & 63];result += map[bits >> 4 & 63];result += map[bits << 2 & 63];result += map[64];}else if(tail === 1){result += map[bits >> 2 & 63];result += map[bits << 4 & 63];result += map[64];result += map[64];}return result;}function isBinary(object){return NodeBuffer && NodeBuffer.isBuffer(object);}module.exports = new Type("tag:yaml.org,2002:binary", {kind:"scalar", resolve:resolveYamlBinary, construct:constructYamlBinary, predicate:isBinary, represent:representYamlBinary});}, {"../type":13, "buffer":30}], 15:[function(require, module, exports){"use strict";var Type=require("../type");function resolveYamlBoolean(data){if(null === data){return false;}var max=data.length;return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");}function constructYamlBoolean(data){return data === "true" || data === "True" || data === "TRUE";}function isBoolean(object){return "[object Boolean]" === Object.prototype.toString.call(object);}module.exports = new Type("tag:yaml.org,2002:bool", {kind:"scalar", resolve:resolveYamlBoolean, construct:constructYamlBoolean, predicate:isBoolean, represent:{lowercase:function lowercase(object){return object?"true":"false";}, uppercase:function uppercase(object){return object?"TRUE":"FALSE";}, camelcase:function camelcase(object){return object?"True":"False";}}, defaultStyle:"lowercase"});}, {"../type":13}], 16:[function(require, module, exports){"use strict";var common=require("../common");var Type=require("../type");var YAML_FLOAT_PATTERN=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?" + "|\\.[0-9_]+(?:[eE][-+][0-9]+)?" + "|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*" + "|[-+]?\\.(?:inf|Inf|INF)" + "|\\.(?:nan|NaN|NAN))$");function resolveYamlFloat(data){if(null === data){return false;}var value, sign, base, digits;if(!YAML_FLOAT_PATTERN.test(data)){return false;}return true;}function constructYamlFloat(data){var value, sign, base, digits;value = data.replace(/_/g, "").toLowerCase();sign = "-" === value[0]?-1:1;digits = [];if(0 <= "+-".indexOf(value[0])){value = value.slice(1);}if(".inf" === value){return 1 === sign?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;}else if(".nan" === value){return NaN;}else if(0 <= value.indexOf(":")){value.split(":").forEach(function(v){digits.unshift(parseFloat(v, 10));});value = 0;base = 1;digits.forEach(function(d){value += d * base;base *= 60;});return sign * value;}return sign * parseFloat(value, 10);}function representYamlFloat(object, style){if(isNaN(object)){switch(style){case "lowercase":return ".nan";case "uppercase":return ".NAN";case "camelcase":return ".NaN";}}else if(Number.POSITIVE_INFINITY === object){switch(style){case "lowercase":return ".inf";case "uppercase":return ".INF";case "camelcase":return ".Inf";}}else if(Number.NEGATIVE_INFINITY === object){switch(style){case "lowercase":return "-.inf";case "uppercase":return "-.INF";case "camelcase":return "-.Inf";}}else if(common.isNegativeZero(object)){return "-0.0";}return object.toString(10);}function isFloat(object){return "[object Number]" === Object.prototype.toString.call(object) && (0 !== object % 1 || common.isNegativeZero(object));}module.exports = new Type("tag:yaml.org,2002:float", {kind:"scalar", resolve:resolveYamlFloat, construct:constructYamlFloat, predicate:isFloat, represent:representYamlFloat, defaultStyle:"lowercase"});}, {"../common":2, "../type":13}], 17:[function(require, module, exports){"use strict";var common=require("../common");var Type=require("../type");function isHexCode(c){return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;}function isOctCode(c){return 48 <= c && c <= 55;}function isDecCode(c){return 48 <= c && c <= 57;}function resolveYamlInteger(data){if(null === data){return false;}var max=data.length, index=0, hasDigits=false, ch;if(!max){return false;}ch = data[index];if(ch === "-" || ch === "+"){ch = data[++index];}if(ch === "0"){if(index + 1 === max){return true;}ch = data[++index];if(ch === "b"){index++;for(; index < max; index++) {ch = data[index];if(ch === "_"){continue;}if(ch !== "0" && ch !== "1"){return false;}hasDigits = true;}return hasDigits;}if(ch === "x"){index++;for(; index < max; index++) {ch = data[index];if(ch === "_"){continue;}if(!isHexCode(data.charCodeAt(index))){return false;}hasDigits = true;}return hasDigits;}for(; index < max; index++) {ch = data[index];if(ch === "_"){continue;}if(!isOctCode(data.charCodeAt(index))){return false;}hasDigits = true;}return hasDigits;}for(; index < max; index++) {ch = data[index];if(ch === "_"){continue;}if(ch === ":"){break;}if(!isDecCode(data.charCodeAt(index))){return false;}hasDigits = true;}if(!hasDigits){return false;}if(ch !== ":"){return true;}return /^(:[0-5]?[0-9])+$/.test(data.slice(index));}function constructYamlInteger(data){var value=data, sign=1, ch, base, digits=[];if(value.indexOf("_") !== -1){value = value.replace(/_/g, "");}ch = value[0];if(ch === "-" || ch === "+"){if(ch === "-"){sign = -1;}value = value.slice(1);ch = value[0];}if("0" === value){return 0;}if(ch === "0"){if(value[1] === "b"){return sign * parseInt(value.slice(2), 2);}if(value[1] === "x"){return sign * parseInt(value, 16);}return sign * parseInt(value, 8);}if(value.indexOf(":") !== -1){value.split(":").forEach(function(v){digits.unshift(parseInt(v, 10));});value = 0;base = 1;digits.forEach(function(d){value += d * base;base *= 60;});return sign * value;}return sign * parseInt(value, 10);}function isInteger(object){return "[object Number]" === Object.prototype.toString.call(object) && (0 === object % 1 && !common.isNegativeZero(object));}module.exports = new Type("tag:yaml.org,2002:int", {kind:"scalar", resolve:resolveYamlInteger, construct:constructYamlInteger, predicate:isInteger, represent:{binary:function binary(object){return "0b" + object.toString(2);}, octal:function octal(object){return "0" + object.toString(8);}, decimal:function decimal(object){return object.toString(10);}, hexadecimal:function hexadecimal(object){return "0x" + object.toString(16).toUpperCase();}}, defaultStyle:"decimal", styleAliases:{binary:[2, "bin"], octal:[8, "oct"], decimal:[10, "dec"], hexadecimal:[16, "hex"]}});}, {"../common":2, "../type":13}], 18:[function(require, module, exports){"use strict";var esprima;try{esprima = require("esprima");}catch(_) {if(typeof window !== "undefined"){esprima = window.esprima;}}var Type=require("../../type");function resolveJavascriptFunction(data){if(null === data){return false;}try{var source="(" + data + ")", ast=esprima.parse(source, {range:true}), params=[], body;if("Program" !== ast.type || 1 !== ast.body.length || "ExpressionStatement" !== ast.body[0].type || "FunctionExpression" !== ast.body[0].expression.type){return false;}return true;}catch(err) {return false;}}function constructJavascriptFunction(data){var source="(" + data + ")", ast=esprima.parse(source, {range:true}), params=[], body;if("Program" !== ast.type || 1 !== ast.body.length || "ExpressionStatement" !== ast.body[0].type || "FunctionExpression" !== ast.body[0].expression.type){throw new Error("Failed to resolve function");}ast.body[0].expression.params.forEach(function(param){params.push(param.name);});body = ast.body[0].expression.body.range;return new Function(params, source.slice(body[0] + 1, body[1] - 1));}function representJavascriptFunction(object){return object.toString();}function isFunction(object){return "[object Function]" === Object.prototype.toString.call(object);}module.exports = new Type("tag:yaml.org,2002:js/function", {kind:"scalar", resolve:resolveJavascriptFunction, construct:constructJavascriptFunction, predicate:isFunction, represent:representJavascriptFunction});}, {"../../type":13, "esprima":"esprima"}], 19:[function(require, module, exports){"use strict";var Type=require("../../type");function resolveJavascriptRegExp(data){if(null === data){return false;}if(0 === data.length){return false;}var regexp=data, tail=/\/([gim]*)$/.exec(data), modifiers="";if("/" === regexp[0]){if(tail){modifiers = tail[1];}if(modifiers.length > 3){return false;}if(regexp[regexp.length - modifiers.length - 1] !== "/"){return false;}regexp = regexp.slice(1, regexp.length - modifiers.length - 1);}try{var dummy=new RegExp(regexp, modifiers);return true;}catch(error) {return false;}}function constructJavascriptRegExp(data){var regexp=data, tail=/\/([gim]*)$/.exec(data), modifiers="";if("/" === regexp[0]){if(tail){modifiers = tail[1];}regexp = regexp.slice(1, regexp.length - modifiers.length - 1);}return new RegExp(regexp, modifiers);}function representJavascriptRegExp(object){var result="/" + object.source + "/";if(object.global){result += "g";}if(object.multiline){result += "m";}if(object.ignoreCase){result += "i";}return result;}function isRegExp(object){return "[object RegExp]" === Object.prototype.toString.call(object);}module.exports = new Type("tag:yaml.org,2002:js/regexp", {kind:"scalar", resolve:resolveJavascriptRegExp, construct:constructJavascriptRegExp, predicate:isRegExp, represent:representJavascriptRegExp});}, {"../../type":13}], 20:[function(require, module, exports){"use strict";var Type=require("../../type");function resolveJavascriptUndefined(){return true;}function constructJavascriptUndefined(){return undefined;}function representJavascriptUndefined(){return "";}function isUndefined(object){return "undefined" === typeof object;}module.exports = new Type("tag:yaml.org,2002:js/undefined", {kind:"scalar", resolve:resolveJavascriptUndefined, construct:constructJavascriptUndefined, predicate:isUndefined, represent:representJavascriptUndefined});}, {"../../type":13}], 21:[function(require, module, exports){"use strict";var Type=require("../type");module.exports = new Type("tag:yaml.org,2002:map", {kind:"mapping", construct:function construct(data){return null !== data?data:{};}});}, {"../type":13}], 22:[function(require, module, exports){"use strict";var Type=require("../type");function resolveYamlMerge(data){return "<<" === data || null === data;}module.exports = new Type("tag:yaml.org,2002:merge", {kind:"scalar", resolve:resolveYamlMerge});}, {"../type":13}], 23:[function(require, module, exports){"use strict";var Type=require("../type");function resolveYamlNull(data){if(null === data){return true;}var max=data.length;return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");}function constructYamlNull(){return null;}function isNull(object){return null === object;}module.exports = new Type("tag:yaml.org,2002:null", {kind:"scalar", resolve:resolveYamlNull, construct:constructYamlNull, predicate:isNull, represent:{canonical:function canonical(){return "~";}, lowercase:function lowercase(){return "null";}, uppercase:function uppercase(){return "NULL";}, camelcase:function camelcase(){return "Null";}}, defaultStyle:"lowercase"});}, {"../type":13}], 24:[function(require, module, exports){"use strict";var Type=require("../type");var _hasOwnProperty=Object.prototype.hasOwnProperty;var _toString=Object.prototype.toString;function resolveYamlOmap(data){if(null === data){return true;}var objectKeys=[], index, length, pair, pairKey, pairHasKey, object=data;for(index = 0, length = object.length; index < length; index += 1) {pair = object[index];pairHasKey = false;if("[object Object]" !== _toString.call(pair)){return false;}for(pairKey in pair) {if(_hasOwnProperty.call(pair, pairKey)){if(!pairHasKey){pairHasKey = true;}else {return false;}}}if(!pairHasKey){return false;}if(-1 === objectKeys.indexOf(pairKey)){objectKeys.push(pairKey);}else {return false;}}return true;}function constructYamlOmap(data){return null !== data?data:[];}module.exports = new Type("tag:yaml.org,2002:omap", {kind:"sequence", resolve:resolveYamlOmap, construct:constructYamlOmap});}, {"../type":13}], 25:[function(require, module, exports){"use strict";var Type=require("../type");var _toString=Object.prototype.toString;function resolveYamlPairs(data){if(null === data){return true;}var index, length, pair, keys, result, object=data;result = new Array(object.length);for(index = 0, length = object.length; index < length; index += 1) {pair = object[index];if("[object Object]" !== _toString.call(pair)){return false;}keys = (0, _babelRuntimeCoreJsObjectKeys["default"])(pair);if(1 !== keys.length){return false;}result[index] = [keys[0], pair[keys[0]]];}return true;}function constructYamlPairs(data){if(null === data){return [];}var index, length, pair, keys, result, object=data;result = new Array(object.length);for(index = 0, length = object.length; index < length; index += 1) {pair = object[index];keys = (0, _babelRuntimeCoreJsObjectKeys["default"])(pair);result[index] = [keys[0], pair[keys[0]]];}return result;}module.exports = new Type("tag:yaml.org,2002:pairs", {kind:"sequence", resolve:resolveYamlPairs, construct:constructYamlPairs});}, {"../type":13}], 26:[function(require, module, exports){"use strict";var Type=require("../type");module.exports = new Type("tag:yaml.org,2002:seq", {kind:"sequence", construct:function construct(data){return null !== data?data:[];}});}, {"../type":13}], 27:[function(require, module, exports){"use strict";var Type=require("../type");var _hasOwnProperty=Object.prototype.hasOwnProperty;function resolveYamlSet(data){if(null === data){return true;}var key, object=data;for(key in object) {if(_hasOwnProperty.call(object, key)){if(null !== object[key]){return false;}}}return true;}function constructYamlSet(data){return null !== data?data:{};}module.exports = new Type("tag:yaml.org,2002:set", {kind:"mapping", resolve:resolveYamlSet, construct:constructYamlSet});}, {"../type":13}], 28:[function(require, module, exports){"use strict";var Type=require("../type");module.exports = new Type("tag:yaml.org,2002:str", {kind:"scalar", construct:function construct(data){return null !== data?data:"";}});}, {"../type":13}], 29:[function(require, module, exports){"use strict";var Type=require("../type");var YAML_TIMESTAMP_REGEXP=new RegExp("^([0-9][0-9][0-9][0-9])" + "-([0-9][0-9]?)" + "-([0-9][0-9]?)" + "(?:(?:[Tt]|[ \\t]+)" + "([0-9][0-9]?)" + ":([0-9][0-9])" + ":([0-9][0-9])" + "(?:\\.([0-9]*))?" + "(?:[ \\t]*(Z|([-+])([0-9][0-9]?)" + "(?::([0-9][0-9]))?))?)?$");function resolveYamlTimestamp(data){if(null === data){return false;}var match, year, month, day, hour, minute, second, fraction=0, delta=null, tz_hour, tz_minute, date;match = YAML_TIMESTAMP_REGEXP.exec(data);if(null === match){return false;}return true;}function constructYamlTimestamp(data){var match, year, month, day, hour, minute, second, fraction=0, delta=null, tz_hour, tz_minute, date;match = YAML_TIMESTAMP_REGEXP.exec(data);if(null === match){throw new Error("Date resolve error");}year = +match[1];month = +match[2] - 1;day = +match[3];if(!match[4]){return new Date(Date.UTC(year, month, day));}hour = +match[4];minute = +match[5];second = +match[6];if(match[7]){fraction = match[7].slice(0, 3);while(fraction.length < 3) {fraction += "0";}fraction = +fraction;}if(match[9]){tz_hour = +match[10];tz_minute = +(match[11] || 0);delta = (tz_hour * 60 + tz_minute) * 60000;if("-" === match[9]){delta = -delta;}}date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));if(delta){date.setTime(date.getTime() - delta);}return date;}function representYamlTimestamp(object){return object.toISOString();}module.exports = new Type("tag:yaml.org,2002:timestamp", {kind:"scalar", resolve:resolveYamlTimestamp, construct:constructYamlTimestamp, instanceOf:Date, represent:representYamlTimestamp});}, {"../type":13}], 30:[function(require, module, exports){}, {}], "/":[function(require, module, exports){"use strict";var yaml=require("./lib/js-yaml.js");module.exports = yaml;}, {"./lib/js-yaml.js":1}]}, {}, [])("/");});});
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('plugins/markdown/index', ['exports', 'babel-runtime/helpers/inherits', 'babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/core-js/object/define-property', 'babel-runtime/regenerator', 'babel-runtime/core-js/object/keys', '../../index', './marked', 'babel-runtime/helpers/interop-require-default'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('babel-runtime/helpers/inherits'), require('babel-runtime/helpers/create-class'), require('babel-runtime/helpers/class-call-check'), require('babel-runtime/core-js/object/define-property'), require('babel-runtime/regenerator'), require('babel-runtime/core-js/object/keys'), require('../../index'), require('./marked'), require('babel-runtime/helpers/interop-require-default'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._inherits, global._createClass, global._classCallCheck, global._Object$defineProperty, global._regeneratorRuntime, global._Object$keys, global.index, global.marked, global._interopRequireDefault);
    global.pluginsMarkdownIndex = mod.exports;
  }
})(this, function (exports, _babelRuntimeHelpersInherits, _babelRuntimeHelpersCreateClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeCoreJsObjectDefineProperty, _babelRuntimeRegenerator, _babelRuntimeCoreJsObjectKeys, _index, _marked, _babelRuntimeHelpersInteropRequireDefault) {
  'use strict';

  (0, _babelRuntimeCoreJsObjectDefineProperty['default'])(exports, '__esModule', {
    value: true
  });

  var _marked2 = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_marked);

  /* TODO utilities are also plugins.
   Like, utilities.strings.{toUint8, fromUint8} etc
   utilities can serve as a dependency for plugins
   utilities can depend on other utilities
  */

  function uint8ToString(u8a) {
    var CHUNK_SIZE = 32768;
    var c = [];
    for (var i = 0, j = u8a.length; i < j; i += CHUNK_SIZE) {
      c.push(String.fromCharCode.apply(null, u8a.subarray(i, i + CHUNK_SIZE)));
    }
    return c.join('');
  }

  function stringToUint8(str) {
    var result = new Uint8Array(str.length);
    for (var i = 0, j = str.length; i < j; ++i) {
      result[i] = str.charCodeAt(i);
    }
    return result;
  }

  var Markdown = (function (_Plugin) {
    function Markdown() {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, Markdown);

      if (_Plugin != null) {
        _Plugin.apply(this, arguments);
      }
    }

    (0, _babelRuntimeHelpersInherits['default'])(Markdown, _Plugin);
    (0, _babelRuntimeHelpersCreateClass['default'])(Markdown, [{
      key: 'process',
      value: function process(files) {
        return _babelRuntimeRegenerator['default'].async(function process$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              (0, _babelRuntimeCoreJsObjectKeys['default'])(files).forEach(function (path) {
                var file = files[path];
                var contentString = uint8ToString(file.content);
                file.content = stringToUint8((0, _marked2['default'])(contentString));
              });
              return context$2$0.abrupt('return', files);

            case 2:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this);
      }
    }]);
    return Markdown;
  })(_index.Plugin);

  exports.Markdown = Markdown;
});
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('plugins/markdown/marked', ['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.pluginsMarkdownMarked = mod.exports;
  }
})(this, function (exports) {
  /**
   * marked - a markdown parser
   * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
   * https://github.com/chjj/marked
   */

  'use strict';

  ;(function () {

    /**
     * Block-Level Grammar
     */

    var block = {
      newline: /^\n+/,
      code: /^( {4}[^\n]+\n*)+/,
      fences: noop,
      hr: /^( *[-*_]){3,} *(?:\n+|$)/,
      heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
      nptable: noop,
      lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
      blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
      list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
      html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
      table: noop,
      paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
      text: /^[^\n]+/
    };

    block.bullet = /(?:[*+-]|\d+\.)/;
    block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
    block.item = replace(block.item, 'gm')(/bull/g, block.bullet)();

    block.list = replace(block.list)(/bull/g, block.bullet)('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')('def', '\\n+(?=' + block.def.source + ')')();

    block.blockquote = replace(block.blockquote)('def', block.def)();

    block._tag = '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code' + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo' + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

    block.html = replace(block.html)('comment', /<!--[\s\S]*?-->/)('closed', /<(tag)[\s\S]+?<\/\1>/)('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();

    block.paragraph = replace(block.paragraph)('hr', block.hr)('heading', block.heading)('lheading', block.lheading)('blockquote', block.blockquote)('tag', '<' + block._tag)('def', block.def)();

    /**
     * Normal Block Grammar
     */

    block.normal = merge({}, block);

    /**
     * GFM Block Grammar
     */

    block.gfm = merge({}, block.normal, {
      fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
      paragraph: /^/
    });

    block.gfm.paragraph = replace(block.paragraph)('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|')();

    /**
     * GFM + Tables Block Grammar
     */

    block.tables = merge({}, block.gfm, {
      nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
      table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
    });

    /**
     * Block Lexer
     */

    function Lexer(options) {
      this.tokens = [];
      this.tokens.links = {};
      this.options = options || marked.defaults;
      this.rules = block.normal;

      if (this.options.gfm) {
        if (this.options.tables) {
          this.rules = block.tables;
        } else {
          this.rules = block.gfm;
        }
      }
    }

    /**
     * Expose Block Rules
     */

    Lexer.rules = block;

    /**
     * Static Lex Method
     */

    Lexer.lex = function (src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    };

    /**
     * Preprocessing
     */

    Lexer.prototype.lex = function (src) {
      src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');

      return this.token(src, true);
    };

    /**
     * Lexing
     */

    Lexer.prototype.token = function (src, top, bq) {
      var src = src.replace(/^ +$/gm, ''),
          next,
          loose,
          cap,
          bull,
          b,
          item,
          space,
          i,
          l;

      while (src) {
        // newline
        if (cap = this.rules.newline.exec(src)) {
          src = src.substring(cap[0].length);
          if (cap[0].length > 1) {
            this.tokens.push({
              type: 'space'
            });
          }
        }

        // code
        if (cap = this.rules.code.exec(src)) {
          src = src.substring(cap[0].length);
          cap = cap[0].replace(/^ {4}/gm, '');
          this.tokens.push({
            type: 'code',
            text: !this.options.pedantic ? cap.replace(/\n+$/, '') : cap
          });
          continue;
        }

        // fences (gfm)
        if (cap = this.rules.fences.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'code',
            lang: cap[2],
            text: cap[3]
          });
          continue;
        }

        // heading
        if (cap = this.rules.heading.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'heading',
            depth: cap[1].length,
            text: cap[2]
          });
          continue;
        }

        // table no leading pipe (gfm)
        if (top && (cap = this.rules.nptable.exec(src))) {
          src = src.substring(cap[0].length);

          item = {
            type: 'table',
            header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3].replace(/\n$/, '').split('\n')
          };

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = item.cells[i].split(/ *\| */);
          }

          this.tokens.push(item);

          continue;
        }

        // lheading
        if (cap = this.rules.lheading.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'heading',
            depth: cap[2] === '=' ? 1 : 2,
            text: cap[1]
          });
          continue;
        }

        // hr
        if (cap = this.rules.hr.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'hr'
          });
          continue;
        }

        // blockquote
        if (cap = this.rules.blockquote.exec(src)) {
          src = src.substring(cap[0].length);

          this.tokens.push({
            type: 'blockquote_start'
          });

          cap = cap[0].replace(/^ *> ?/gm, '');

          // Pass `top` to keep the current
          // "toplevel" state. This is exactly
          // how markdown.pl works.
          this.token(cap, top, true);

          this.tokens.push({
            type: 'blockquote_end'
          });

          continue;
        }

        // list
        if (cap = this.rules.list.exec(src)) {
          src = src.substring(cap[0].length);
          bull = cap[2];

          this.tokens.push({
            type: 'list_start',
            ordered: bull.length > 1
          });

          // Get each top-level item.
          cap = cap[0].match(this.rules.item);

          next = false;
          l = cap.length;
          i = 0;

          for (; i < l; i++) {
            item = cap[i];

            // Remove the list item's bullet
            // so it is seen as the next token.
            space = item.length;
            item = item.replace(/^ *([*+-]|\d+\.) +/, '');

            // Outdent whatever the
            // list item contains. Hacky.
            if (~item.indexOf('\n ')) {
              space -= item.length;
              item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
            }

            // Determine whether the next list item belongs here.
            // Backpedal if it does not belong in this list.
            if (this.options.smartLists && i !== l - 1) {
              b = block.bullet.exec(cap[i + 1])[0];
              if (bull !== b && !(bull.length > 1 && b.length > 1)) {
                src = cap.slice(i + 1).join('\n') + src;
                i = l - 1;
              }
            }

            // Determine whether item is loose or not.
            // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
            // for discount behavior.
            loose = next || /\n\n(?!\s*$)/.test(item);
            if (i !== l - 1) {
              next = item.charAt(item.length - 1) === '\n';
              if (!loose) loose = next;
            }

            this.tokens.push({
              type: loose ? 'loose_item_start' : 'list_item_start'
            });

            // Recurse.
            this.token(item, false, bq);

            this.tokens.push({
              type: 'list_item_end'
            });
          }

          this.tokens.push({
            type: 'list_end'
          });

          continue;
        }

        // html
        if (cap = this.rules.html.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: this.options.sanitize ? 'paragraph' : 'html',
            pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
            text: cap[0]
          });
          continue;
        }

        // def
        if (!bq && top && (cap = this.rules.def.exec(src))) {
          src = src.substring(cap[0].length);
          this.tokens.links[cap[1].toLowerCase()] = {
            href: cap[2],
            title: cap[3]
          };
          continue;
        }

        // table (gfm)
        if (top && (cap = this.rules.table.exec(src))) {
          src = src.substring(cap[0].length);

          item = {
            type: 'table',
            header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
          };

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, '').split(/ *\| */);
          }

          this.tokens.push(item);

          continue;
        }

        // top-level paragraph
        if (top && (cap = this.rules.paragraph.exec(src))) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'paragraph',
            text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
          });
          continue;
        }

        // text
        if (cap = this.rules.text.exec(src)) {
          // Top-level should never reach here.
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'text',
            text: cap[0]
          });
          continue;
        }

        if (src) {
          throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
        }
      }

      return this.tokens;
    };

    /**
     * Inline-Level Grammar
     */

    var inline = {
      escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
      autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
      url: noop,
      tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
      link: /^!?\[(inside)\]\(href\)/,
      reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
      nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
      strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
      em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
      code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
      br: /^ {2,}\n(?!\s*$)/,
      del: noop,
      text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
    };

    inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
    inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

    inline.link = replace(inline.link)('inside', inline._inside)('href', inline._href)();

    inline.reflink = replace(inline.reflink)('inside', inline._inside)();

    /**
     * Normal Inline Grammar
     */

    inline.normal = merge({}, inline);

    /**
     * Pedantic Inline Grammar
     */

    inline.pedantic = merge({}, inline.normal, {
      strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
    });

    /**
     * GFM Inline Grammar
     */

    inline.gfm = merge({}, inline.normal, {
      escape: replace(inline.escape)('])', '~|])')(),
      url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
      del: /^~~(?=\S)([\s\S]*?\S)~~/,
      text: replace(inline.text)(']|', '~]|')('|', '|https?://|')()
    });

    /**
     * GFM + Line Breaks Inline Grammar
     */

    inline.breaks = merge({}, inline.gfm, {
      br: replace(inline.br)('{2,}', '*')(),
      text: replace(inline.gfm.text)('{2,}', '*')()
    });

    /**
     * Inline Lexer & Compiler
     */

    function InlineLexer(links, options) {
      this.options = options || marked.defaults;
      this.links = links;
      this.rules = inline.normal;
      this.renderer = this.options.renderer || new Renderer();
      this.renderer.options = this.options;

      if (!this.links) {
        throw new Error('Tokens array requires a `links` property.');
      }

      if (this.options.gfm) {
        if (this.options.breaks) {
          this.rules = inline.breaks;
        } else {
          this.rules = inline.gfm;
        }
      } else if (this.options.pedantic) {
        this.rules = inline.pedantic;
      }
    }

    /**
     * Expose Inline Rules
     */

    InlineLexer.rules = inline;

    /**
     * Static Lexing/Compiling Method
     */

    InlineLexer.output = function (src, links, options) {
      var inline = new InlineLexer(links, options);
      return inline.output(src);
    };

    /**
     * Lexing/Compiling
     */

    InlineLexer.prototype.output = function (src) {
      var out = '',
          link,
          text,
          href,
          cap;

      while (src) {
        // escape
        if (cap = this.rules.escape.exec(src)) {
          src = src.substring(cap[0].length);
          out += cap[1];
          continue;
        }

        // autolink
        if (cap = this.rules.autolink.exec(src)) {
          src = src.substring(cap[0].length);
          if (cap[2] === '@') {
            text = cap[1].charAt(6) === ':' ? this.mangle(cap[1].substring(7)) : this.mangle(cap[1]);
            href = this.mangle('mailto:') + text;
          } else {
            text = escape(cap[1]);
            href = text;
          }
          out += this.renderer.link(href, null, text);
          continue;
        }

        // url (gfm)
        if (!this.inLink && (cap = this.rules.url.exec(src))) {
          src = src.substring(cap[0].length);
          text = escape(cap[1]);
          href = text;
          out += this.renderer.link(href, null, text);
          continue;
        }

        // tag
        if (cap = this.rules.tag.exec(src)) {
          if (!this.inLink && /^<a /i.test(cap[0])) {
            this.inLink = true;
          } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
            this.inLink = false;
          }
          src = src.substring(cap[0].length);
          out += this.options.sanitize ? escape(cap[0]) : cap[0];
          continue;
        }

        // link
        if (cap = this.rules.link.exec(src)) {
          src = src.substring(cap[0].length);
          this.inLink = true;
          out += this.outputLink(cap, {
            href: cap[2],
            title: cap[3]
          });
          this.inLink = false;
          continue;
        }

        // reflink, nolink
        if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
          src = src.substring(cap[0].length);
          link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
          link = this.links[link.toLowerCase()];
          if (!link || !link.href) {
            out += cap[0].charAt(0);
            src = cap[0].substring(1) + src;
            continue;
          }
          this.inLink = true;
          out += this.outputLink(cap, link);
          this.inLink = false;
          continue;
        }

        // strong
        if (cap = this.rules.strong.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.strong(this.output(cap[2] || cap[1]));
          continue;
        }

        // em
        if (cap = this.rules.em.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.em(this.output(cap[2] || cap[1]));
          continue;
        }

        // code
        if (cap = this.rules.code.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.codespan(escape(cap[2], true));
          continue;
        }

        // br
        if (cap = this.rules.br.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.br();
          continue;
        }

        // del (gfm)
        if (cap = this.rules.del.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.del(this.output(cap[1]));
          continue;
        }

        // text
        if (cap = this.rules.text.exec(src)) {
          src = src.substring(cap[0].length);
          out += escape(this.smartypants(cap[0]));
          continue;
        }

        if (src) {
          throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
        }
      }

      return out;
    };

    /**
     * Compile Link
     */

    InlineLexer.prototype.outputLink = function (cap, link) {
      var href = escape(link.href),
          title = link.title ? escape(link.title) : null;

      return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
    };

    /**
     * Smartypants Transformations
     */

    InlineLexer.prototype.smartypants = function (text) {
      if (!this.options.smartypants) return text;
      return text
      // em-dashes
      .replace(/--/g, '—')
      // opening singles
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
      // closing singles & apostrophes
      .replace(/'/g, '’')
      // opening doubles
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
      // closing doubles
      .replace(/"/g, '”')
      // ellipses
      .replace(/\.{3}/g, '…');
    };

    /**
     * Mangle Links
     */

    InlineLexer.prototype.mangle = function (text) {
      var out = '',
          l = text.length,
          i = 0,
          ch;

      for (; i < l; i++) {
        ch = text.charCodeAt(i);
        if (Math.random() > 0.5) {
          ch = 'x' + ch.toString(16);
        }
        out += '&#' + ch + ';';
      }

      return out;
    };

    /**
     * Renderer
     */

    function Renderer(options) {
      this.options = options || {};
    }

    Renderer.prototype.code = function (code, lang, escaped) {
      if (this.options.highlight) {
        var out = this.options.highlight(code, lang);
        if (out != null && out !== code) {
          escaped = true;
          code = out;
        }
      }

      if (!lang) {
        return '<pre><code>' + (escaped ? code : escape(code, true)) + '\n</code></pre>';
      }

      return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '\n</code></pre>\n';
    };

    Renderer.prototype.blockquote = function (quote) {
      return '<blockquote>\n' + quote + '</blockquote>\n';
    };

    Renderer.prototype.html = function (html) {
      return html;
    };

    Renderer.prototype.heading = function (text, level, raw) {
      return '<h' + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-') + '">' + text + '</h' + level + '>\n';
    };

    Renderer.prototype.hr = function () {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };

    Renderer.prototype.list = function (body, ordered) {
      var type = ordered ? 'ol' : 'ul';
      return '<' + type + '>\n' + body + '</' + type + '>\n';
    };

    Renderer.prototype.listitem = function (text) {
      return '<li>' + text + '</li>\n';
    };

    Renderer.prototype.paragraph = function (text) {
      return '<p>' + text + '</p>\n';
    };

    Renderer.prototype.table = function (header, body) {
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + '<tbody>\n' + body + '</tbody>\n' + '</table>\n';
    };

    Renderer.prototype.tablerow = function (content) {
      return '<tr>\n' + content + '</tr>\n';
    };

    Renderer.prototype.tablecell = function (content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? '<' + type + ' style="text-align:' + flags.align + '">' : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    };

    // span level renderer
    Renderer.prototype.strong = function (text) {
      return '<strong>' + text + '</strong>';
    };

    Renderer.prototype.em = function (text) {
      return '<em>' + text + '</em>';
    };

    Renderer.prototype.codespan = function (text) {
      return '<code>' + text + '</code>';
    };

    Renderer.prototype.br = function () {
      return this.options.xhtml ? '<br/>' : '<br>';
    };

    Renderer.prototype.del = function (text) {
      return '<del>' + text + '</del>';
    };

    Renderer.prototype.link = function (href, title, text) {
      if (this.options.sanitize) {
        try {
          var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
        } catch (e) {
          return '';
        }
        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
          return '';
        }
      }
      var out = '<a href="' + href + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += '>' + text + '</a>';
      return out;
    };

    Renderer.prototype.image = function (href, title, text) {
      var out = '<img src="' + href + '" alt="' + text + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += this.options.xhtml ? '/>' : '>';
      return out;
    };

    /**
     * Parsing & Compiling
     */

    function Parser(options) {
      this.tokens = [];
      this.token = null;
      this.options = options || marked.defaults;
      this.options.renderer = this.options.renderer || new Renderer();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
    }

    /**
     * Static Parse Method
     */

    Parser.parse = function (src, options, renderer) {
      var parser = new Parser(options, renderer);
      return parser.parse(src);
    };

    /**
     * Parse Loop
     */

    Parser.prototype.parse = function (src) {
      this.inline = new InlineLexer(src.links, this.options, this.renderer);
      this.tokens = src.reverse();

      var out = '';
      while (this.next()) {
        out += this.tok();
      }

      return out;
    };

    /**
     * Next Token
     */

    Parser.prototype.next = function () {
      return this.token = this.tokens.pop();
    };

    /**
     * Preview Next Token
     */

    Parser.prototype.peek = function () {
      return this.tokens[this.tokens.length - 1] || 0;
    };

    /**
     * Parse Text Tokens
     */

    Parser.prototype.parseText = function () {
      var body = this.token.text;

      while (this.peek().type === 'text') {
        body += '\n' + this.next().text;
      }

      return this.inline.output(body);
    };

    /**
     * Parse Current Token
     */

    Parser.prototype.tok = function () {
      switch (this.token.type) {
        case 'space':
          {
            return '';
          }
        case 'hr':
          {
            return this.renderer.hr();
          }
        case 'heading':
          {
            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
          }
        case 'code':
          {
            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
          }
        case 'table':
          {
            var header = '',
                body = '',
                i,
                row,
                cell,
                flags,
                j;

            // header
            cell = '';
            for (i = 0; i < this.token.header.length; i++) {
              flags = { header: true, align: this.token.align[i] };
              cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), { header: true, align: this.token.align[i] });
            }
            header += this.renderer.tablerow(cell);

            for (i = 0; i < this.token.cells.length; i++) {
              row = this.token.cells[i];

              cell = '';
              for (j = 0; j < row.length; j++) {
                cell += this.renderer.tablecell(this.inline.output(row[j]), { header: false, align: this.token.align[j] });
              }

              body += this.renderer.tablerow(cell);
            }
            return this.renderer.table(header, body);
          }
        case 'blockquote_start':
          {
            var body = '';

            while (this.next().type !== 'blockquote_end') {
              body += this.tok();
            }

            return this.renderer.blockquote(body);
          }
        case 'list_start':
          {
            var body = '',
                ordered = this.token.ordered;

            while (this.next().type !== 'list_end') {
              body += this.tok();
            }

            return this.renderer.list(body, ordered);
          }
        case 'list_item_start':
          {
            var body = '';

            while (this.next().type !== 'list_item_end') {
              body += this.token.type === 'text' ? this.parseText() : this.tok();
            }

            return this.renderer.listitem(body);
          }
        case 'loose_item_start':
          {
            var body = '';

            while (this.next().type !== 'list_item_end') {
              body += this.tok();
            }

            return this.renderer.listitem(body);
          }
        case 'html':
          {
            var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
            return this.renderer.html(html);
          }
        case 'paragraph':
          {
            return this.renderer.paragraph(this.inline.output(this.token.text));
          }
        case 'text':
          {
            return this.renderer.paragraph(this.parseText());
          }
      }
    };

    /**
     * Helpers
     */

    function escape(html, encode) {
      return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function unescape(html) {
      return html.replace(/&([#\w]+);/g, function (_, n) {
        n = n.toLowerCase();
        if (n === 'colon') return ':';
        if (n.charAt(0) === '#') {
          return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
        }
        return '';
      });
    }

    function replace(regex, opt) {
      regex = regex.source;
      opt = opt || '';
      return function self(name, val) {
        if (!name) return new RegExp(regex, opt);
        val = val.source || val;
        val = val.replace(/(^|[^\[])\^/g, '$1');
        regex = regex.replace(name, val);
        return self;
      };
    }

    function noop() {}
    noop.exec = noop;

    function merge(obj) {
      var i = 1,
          target,
          key;

      for (; i < arguments.length; i++) {
        target = arguments[i];
        for (key in target) {
          if (Object.prototype.hasOwnProperty.call(target, key)) {
            obj[key] = target[key];
          }
        }
      }

      return obj;
    }

    /**
     * Marked
     */

    function marked(src, opt, callback) {
      if (callback || typeof opt === 'function') {
        if (!callback) {
          callback = opt;
          opt = null;
        }

        opt = merge({}, marked.defaults, opt || {});

        var highlight = opt.highlight,
            tokens,
            pending,
            i = 0;

        try {
          tokens = Lexer.lex(src, opt);
        } catch (e) {
          return callback(e);
        }

        pending = tokens.length;

        var done = function done(err) {
          if (err) {
            opt.highlight = highlight;
            return callback(err);
          }

          var out;

          try {
            out = Parser.parse(tokens, opt);
          } catch (e) {
            err = e;
          }

          opt.highlight = highlight;

          return err ? callback(err) : callback(null, out);
        };

        if (!highlight || highlight.length < 3) {
          return done();
        }

        delete opt.highlight;

        if (!pending) return done();

        for (; i < tokens.length; i++) {
          (function (token) {
            if (token.type !== 'code') {
              return --pending || done();
            }
            return highlight(token.text, token.lang, function (err, code) {
              if (err) return done(err);
              if (code == null || code === token.text) {
                return --pending || done();
              }
              token.text = code;
              token.escaped = true;
              --pending || done();
            });
          })(tokens[i]);
        }

        return;
      }
      try {
        if (opt) opt = merge({}, marked.defaults, opt);
        return Parser.parse(Lexer.lex(src, opt), opt);
      } catch (e) {
        e.message += '\nPlease report this to https://github.com/chjj/marked.';
        if ((opt || marked.defaults).silent) {
          return '<p>An error occured:</p><pre>' + escape(e.message + '', true) + '</pre>';
        }
        throw e;
      }
    }

    /**
     * Options
     */

    marked.options = marked.setOptions = function (opt) {
      merge(marked.defaults, opt);
      return marked;
    };

    marked.defaults = {
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: false,
      silent: false,
      highlight: null,
      langPrefix: 'lang-',
      smartypants: false,
      headerPrefix: '',
      renderer: new Renderer(),
      xhtml: false
    };

    /**
     * Expose
     */

    marked.Parser = Parser;
    marked.parser = Parser.parse;

    marked.Renderer = Renderer;

    marked.Lexer = Lexer;
    marked.lexer = Lexer.lex;

    marked.InlineLexer = InlineLexer;
    marked.inlineLexer = InlineLexer.output;

    marked.parse = marked;

    if (typeof module !== 'undefined' && typeof exports === 'object') {
      module.exports = marked;
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return marked;
      });
    } else {
      this.marked = marked;
    }
  }).call((function () {
    return this || (typeof window !== 'undefined' ? window : global);
  })());
});