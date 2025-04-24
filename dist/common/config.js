"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_CONNECTION_STRING = exports.JWT_SECRET_KEY = exports.PORT = exports.NODE_ENV = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const NODE_ENV = (_a = process.env['NODE_ENV']) !== null && _a !== void 0 ? _a : 'development';
exports.NODE_ENV = NODE_ENV;
const PORT = +((_b = process.env['PORT']) !== null && _b !== void 0 ? _b : '4000');
exports.PORT = PORT;
const JWT_SECRET_KEY = (_c = process.env['JWT_SECRET_KEY']) !== null && _c !== void 0 ? _c : 'secret-key';
exports.JWT_SECRET_KEY = JWT_SECRET_KEY;
const MONGO_CONNECTION_STRING = (_d = process.env['MONGO_CONNECTION_STRING']) !== null && _d !== void 0 ? _d : 'your-mongo-db-connection-string';
exports.MONGO_CONNECTION_STRING = MONGO_CONNECTION_STRING;
