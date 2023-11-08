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
 * @interface BadToken
 */
export interface BadToken {
    /**
     * 
     * @type {string}
     * @memberof BadToken
     */
    message: string;
}

/**
 * Check if a given object implements the BadToken interface.
 */
export function instanceOfBadToken(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function BadTokenFromJSON(json: any): BadToken {
    return BadTokenFromJSONTyped(json, false);
}

export function BadTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): BadToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function BadTokenToJSON(value?: BadToken | null): any {
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

