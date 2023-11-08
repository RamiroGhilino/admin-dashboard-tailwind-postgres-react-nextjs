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
 * @interface PatchedCareerRequest
 */
export interface PatchedCareerRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedCareerRequest
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedCareerRequest
     */
    academicUnit?: number;
}

/**
 * Check if a given object implements the PatchedCareerRequest interface.
 */
export function instanceOfPatchedCareerRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedCareerRequestFromJSON(json: any): PatchedCareerRequest {
    return PatchedCareerRequestFromJSONTyped(json, false);
}

export function PatchedCareerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedCareerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'academicUnit': !exists(json, 'academic_unit') ? undefined : json['academic_unit'],
    };
}

export function PatchedCareerRequestToJSON(value?: PatchedCareerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'academic_unit': value.academicUnit,
    };
}

