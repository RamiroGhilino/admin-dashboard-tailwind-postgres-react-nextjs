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
 * @interface TutorshipInstanceRequest
 */
export interface TutorshipInstanceRequest {
    /**
     * 
     * @type {string}
     * @memberof TutorshipInstanceRequest
     */
    area: string;
    /**
     * 
     * @type {number}
     * @memberof TutorshipInstanceRequest
     */
    schedule: number;
    /**
     * 
     * @type {Date}
     * @memberof TutorshipInstanceRequest
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof TutorshipInstanceRequest
     */
    status: string;
}

/**
 * Check if a given object implements the TutorshipInstanceRequest interface.
 */
export function instanceOfTutorshipInstanceRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "area" in value;
    isInstance = isInstance && "schedule" in value;
    isInstance = isInstance && "date" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function TutorshipInstanceRequestFromJSON(json: any): TutorshipInstanceRequest {
    return TutorshipInstanceRequestFromJSONTyped(json, false);
}

export function TutorshipInstanceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TutorshipInstanceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'area': json['area'],
        'schedule': json['schedule'],
        'date': (new Date(json['date'])),
        'status': json['status'],
    };
}

export function TutorshipInstanceRequestToJSON(value?: TutorshipInstanceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'area': value.area,
        'schedule': value.schedule,
        'date': (value.date.toISOString().substring(0,10)),
        'status': value.status,
    };
}

