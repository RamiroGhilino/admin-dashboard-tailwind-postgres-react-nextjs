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
 * @interface PostulationXAreaRequest
 */
export interface PostulationXAreaRequest {
    /**
     * 
     * @type {number}
     * @memberof PostulationXAreaRequest
     */
    postulation: number;
    /**
     * 
     * @type {number}
     * @memberof PostulationXAreaRequest
     */
    area: number;
}

/**
 * Check if a given object implements the PostulationXAreaRequest interface.
 */
export function instanceOfPostulationXAreaRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "postulation" in value;
    isInstance = isInstance && "area" in value;

    return isInstance;
}

export function PostulationXAreaRequestFromJSON(json: any): PostulationXAreaRequest {
    return PostulationXAreaRequestFromJSONTyped(json, false);
}

export function PostulationXAreaRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostulationXAreaRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'postulation': json['postulation'],
        'area': json['area'],
    };
}

export function PostulationXAreaRequestToJSON(value?: PostulationXAreaRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'postulation': value.postulation,
        'area': value.area,
    };
}

