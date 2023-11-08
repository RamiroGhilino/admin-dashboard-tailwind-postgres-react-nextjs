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
 * @interface UserXRole
 */
export interface UserXRole {
    /**
     * 
     * @type {number}
     * @memberof UserXRole
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof UserXRole
     */
    user: number;
    /**
     * 
     * @type {number}
     * @memberof UserXRole
     */
    role: number;
}

/**
 * Check if a given object implements the UserXRole interface.
 */
export function instanceOfUserXRole(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function UserXRoleFromJSON(json: any): UserXRole {
    return UserXRoleFromJSONTyped(json, false);
}

export function UserXRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserXRole {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'user': json['user'],
        'role': json['role'],
    };
}

export function UserXRoleToJSON(value?: UserXRole | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': value.user,
        'role': value.role,
    };
}

