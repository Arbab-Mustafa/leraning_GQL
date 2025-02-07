import { type MiddlewareFn } from "../typings/index.js";
export declare function createResolverClassMiddlewareDecorator<TContextType extends object = object>(resolver: MiddlewareFn<TContextType>): ClassDecorator;
