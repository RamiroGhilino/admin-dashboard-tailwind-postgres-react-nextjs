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
 * @interface TutorAreas
 */
export interface TutorAreas {
    /**
     * 
     * @type {number}
     * @memberof TutorAreas
     */
    readonly id: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof TutorAreas
     */
    readonly areas: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TutorAreas
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof TutorAreas
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof TutorAreas
     */
    profilePicture?: string | null;
}

/**
 * Check if a given object implements the TutorAreas interface.
 */
export function instanceOfTutorAreas(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "areas" in value;

    return isInstance;
}

export function TutorAreasFromJSON(json: any): TutorAreas {
    return TutorAreasFromJSONTyped(json, false);
}

export function TutorAreasFromJSONTyped(json: any, ignoreDiscriminator: boolean): TutorAreas {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'areas': json['areas'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'profilePicture': !exists(json, 'profile_picture') ? undefined : json['profile_picture'],
    };
}

export function TutorAreasToJSON(value?: TutorAreas | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
        'profile_picture': value.profilePicture,
    };
}

