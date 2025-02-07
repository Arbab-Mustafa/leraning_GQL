import { type Middleware } from "../typings/middleware.js";
import { type MethodPropClassDecorator } from "./types.js";
export declare function UseMiddleware(middlewares: Array<Middleware<any>>): MethodPropClassDecorator;
export declare function UseMiddleware(...middlewares: Array<Middleware<any>>): MethodPropClassDecorator;
