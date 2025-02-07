import { SymbolKeysNotSupportedError } from "../errors/index.js";
import { getArrayFromOverloadedRest } from "../helpers/decorators.js";
import { getMetadataStorage } from "../metadata/getMetadataStorage.js";
export function Authorized(...rolesOrRolesArray) {
    const roles = getArrayFromOverloadedRest(rolesOrRolesArray);
    return (target, propertyKey, _descriptor) => {
        if (propertyKey == null) {
            getMetadataStorage().collectAuthorizedResolverMetadata({
                target: target,
                roles,
            });
            return;
        }
        if (typeof propertyKey === "symbol") {
            throw new SymbolKeysNotSupportedError();
        }
        getMetadataStorage().collectAuthorizedFieldMetadata({
            target: target.constructor,
            fieldName: propertyKey,
            roles,
        });
    };
}
