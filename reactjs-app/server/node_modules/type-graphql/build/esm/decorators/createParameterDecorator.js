import { SymbolKeysNotSupportedError } from "../errors/index.js";
import { getMetadataStorage } from "../metadata/getMetadataStorage.js";
import { getParamInfo } from "../helpers/params.js";
export function createParameterDecorator(resolver, paramOptions = {}) {
    return (prototype, propertyKey, parameterIndex) => {
        if (typeof propertyKey === "symbol") {
            throw new SymbolKeysNotSupportedError();
        }
        const options = {};
        if (paramOptions.arg) {
            options.arg = {
                kind: "arg",
                name: paramOptions.arg.name,
                description: paramOptions.arg.options?.description,
                deprecationReason: paramOptions.arg.options?.deprecationReason,
                ...getParamInfo({
                    prototype,
                    propertyKey,
                    parameterIndex,
                    returnTypeFunc: paramOptions.arg.typeFunc,
                    options: paramOptions.arg.options,
                    argName: paramOptions.arg.name,
                }),
            };
        }
        getMetadataStorage().collectHandlerParamMetadata({
            kind: "custom",
            target: prototype.constructor,
            methodName: propertyKey,
            index: parameterIndex,
            resolver,
            options,
        });
    };
}
