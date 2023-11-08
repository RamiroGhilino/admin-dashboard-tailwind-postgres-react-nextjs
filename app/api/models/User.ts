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
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    uccKey: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profilePicture?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    readonly roles: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    readonly careers: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    academicYear: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof User
     */
    readonly areas: Array<number>;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "uccKey" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "roles" in value;
    isInstance = isInstance && "careers" in value;
    isInstance = isInstance && "academicYear" in value;
    isInstance = isInstance && "areas" in value;

    return isInstance;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'uccKey': json['ucc_key'],
        'email': json['email'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'profilePicture': !exists(json, 'profile_picture') ? undefined : json['profile_picture'],
        'roles': json['roles'],
        'careers': json['careers'],
        'academicYear': json['academic_year'],
        'areas': json['areas'],
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ucc_key': value.uccKey,
        'email': value.email,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'profile_picture': value.profilePicture,
        'academic_year': value.academicYear,
    };
}

