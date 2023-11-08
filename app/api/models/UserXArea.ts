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
 * @interface UserXArea
 */
export interface UserXArea {
    /**
     * 
     * @type {number}
     * @memberof UserXArea
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof UserXArea
     */
    user: number;
    /**
     * 
     * @type {number}
     * @memberof UserXArea
     */
    area: number;
}

/**
 * Check if a given object implements the UserXArea interface.
 */
export function instanceOfUserXArea(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "area" in value;

    return isInstance;
}

export function UserXAreaFromJSON(json: any): UserXArea {
    return UserXAreaFromJSONTyped(json, false);
}

export function UserXAreaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserXArea {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'user': json['user'],
        'area': json['area'],
    };
}

export function UserXAreaToJSON(value?: UserXArea | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': value.user,
        'area': value.area,
    };
}

