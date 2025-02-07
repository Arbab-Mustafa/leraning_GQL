import { UseMiddleware } from "./UseMiddleware.js";
export function createMethodMiddlewareDecorator(resolver) {
    return UseMiddleware(resolver);
}
