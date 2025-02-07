import { SymbolKeysNotSupportedError } from "../errors/index.js";
import { getArrayFromOverloadedRest } from "../helpers/decorators.js";
import { getMetadataStorage } from "../metadata/getMetadataStorage.js";
export function UseMiddleware(...middlewaresOrMiddlewareArray) {
    const middlewares = getArrayFromOverloadedRest(middlewaresOrMiddlewareArray);
    return (target, propertyKey, _descriptor) => {
        if (propertyKey == null) {
            getMetadataStorage().collectResolverMiddlewareMetadata({
                target: target,
                middlewares,
            });
            return;
        }
        if (typeof propertyKey === "symbol") {
            throw new SymbolKeysNotSupportedError();
        }
        getMetadataStorage().collectMiddlewareMetadata({
            target: target.constructor,
            fieldName: propertyKey,
            middlewares,
        });
    };
}
