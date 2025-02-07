import { type MiddlewareFn } from "../typings/middleware.js";
export declare function createMethodMiddlewareDecorator<TContextType extends object = object>(resolver: MiddlewareFn<TContextType>): MethodDecorator;
