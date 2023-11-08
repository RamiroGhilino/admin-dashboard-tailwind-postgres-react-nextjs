/* tslint:disable */
/* eslint-disable */
/**
 * Turnero TAIE API
 * API correspondiente al trabajo final \"Turnero TAIE\", realizado por los alumnos Juan Manuel Villarreal y Ghilino Ramiro
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InternalServerError
 */
export interface InternalServerError {
    /**
     * 
     * @type {string}
     * @memberof InternalServerError
     */
    message: string;
}

/**
 * Check if a given object implements the InternalServerError interface.
 */
export function instanceOfInternalServerError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function InternalServerErrorFromJSON(json: any): InternalServerError {
    return InternalServerErrorFromJSONTyped(json, false);
}

export function InternalServerErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalServerError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function InternalServerErrorToJSON(value?: InternalServerError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
    };
}

