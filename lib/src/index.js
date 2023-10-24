"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const NativeRNShake_1 = __importDefault(require("../js/NativeRNShake"));
const eventEmitter = new react_native_1.NativeEventEmitter(NativeRNShake_1.default);
exports.default = {
    addListener: (callback) => {
        return eventEmitter.addListener('ShakeEvent', () => {
            callback?.();
        });
    },
    removeAllListeners: () => eventEmitter.removeAllListeners('ShakeEvent'),
};
//# sourceMappingURL=index.js.map