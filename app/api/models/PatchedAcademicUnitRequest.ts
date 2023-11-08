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
 * @interface PatchedAcademicUnitRequest
 */
export interface PatchedAcademicUnitRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedAcademicUnitRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedAcademicUnitRequest
     */
    sede?: string;
}

/**
 * Check if a given object implements the PatchedAcademicUnitRequest interface.
 */
export function instanceOfPatchedAcademicUnitRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedAcademicUnitRequestFromJSON(json: any): PatchedAcademicUnitRequest {
    return PatchedAcademicUnitRequestFromJSONTyped(json, false);
}

export function PatchedAcademicUnitRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedAcademicUnitRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'sede': !exists(json, 'sede') ? undefined : json['sede'],
    };
}

export function PatchedAcademicUnitRequestToJSON(value?: PatchedAcademicUnitRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'sede': value.sede,
    };
}

