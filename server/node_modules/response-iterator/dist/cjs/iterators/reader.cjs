"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /* c8 ignore start */ "default" /* c8 ignore stop */ , {
    enumerable: true,
    get: function() {
        return readerIterator;
    }
});
var hasIterator = typeof Symbol !== 'undefined' && Symbol.asyncIterator;
function readerIterator(reader) {
    var iterator = {
        next: function next() {
            return reader.read();
        }
    };
    if (hasIterator) {
        iterator[Symbol.asyncIterator] = function() {
            return this;
        };
    }
    return iterator;
}
/* CJS INTEROP */ if (exports.__esModule && exports.default) { try { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) { exports.default[key] = exports[key]; } } catch (_) {}; module.exports = exports.default; }