import { type MethodPropClassDecorator } from "./types.js";
export declare function Authorized(): MethodPropClassDecorator;
export declare function Authorized<RoleType = string>(roles: readonly RoleType[]): MethodPropClassDecorator;
export declare function Authorized<RoleType = string>(...roles: readonly RoleType[]): MethodPropClassDecorator;
