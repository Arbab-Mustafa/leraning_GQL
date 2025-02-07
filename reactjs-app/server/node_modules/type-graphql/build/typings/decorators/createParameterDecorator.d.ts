import { type ParameterDecorator, type ResolverData } from "../typings/index.js";
import { type ArgOptions } from "./Arg.js";
import { type ReturnTypeFunc } from "./types.js";
export interface CustomParameterOptions {
    arg?: {
        name: string;
        typeFunc: ReturnTypeFunc;
        options?: ArgOptions;
    };
}
export type ParameterResolver<TContextType extends object = object> = (resolverData: ResolverData<TContextType>) => any;
export declare function createParameterDecorator<TContextType extends object = object>(resolver: ParameterResolver<TContextType>, paramOptions?: CustomParameterOptions): ParameterDecorator;
