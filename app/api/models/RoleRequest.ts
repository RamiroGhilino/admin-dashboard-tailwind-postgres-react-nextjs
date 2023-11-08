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
 * @interface RoleRequest
 */
export interface RoleRequest {
    /**
     * 
     * @type {string}
     * @memberof RoleRequest
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof RoleRequest
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof RoleRequest
     */
    description: string;
}

/**
 * Check if a given object implements the RoleRequest interface.
 */
export function instanceOfRoleRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function RoleRequestFromJSON(json: any): RoleRequest {
    return RoleRequestFromJSONTyped(json, false);
}

export function RoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoleRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'type': json['type'],
        'description': json['description'],
    };
}

export function RoleRequestToJSON(value?: RoleRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'type': value.type,
        'description': value.description,
    };
}

