import { UseMiddleware } from "./UseMiddleware.js";
export function createResolverClassMiddlewareDecorator(resolver) {
    return UseMiddleware(resolver);
}
