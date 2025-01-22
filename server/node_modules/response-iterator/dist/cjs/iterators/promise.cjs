"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /* c8 ignore start */ "default" /* c8 ignore stop */ , {
    enumerable: true,
    get: function() {
        return promiseIterator;
    }
});
var hasIterator = typeof Symbol !== 'undefined' && Symbol.asyncIterator;
function promiseIterator(promise) {
    var resolved = false;
    var iterator = {
        next: function next() {
            if (resolved) return Promise.resolve({
                value: undefined,
                done: true
            });
            resolved = true;
            return new Promise(function(resolve, reject) {
                promise.then(function(value) {
                    resolve({
                        value: value,
                        done: false
                    });
                }).catch(reject);
            });
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