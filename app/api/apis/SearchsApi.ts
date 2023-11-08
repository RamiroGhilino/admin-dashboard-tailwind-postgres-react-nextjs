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


import * as runtime from '../runtime';
import type {
  BusquedaTutoriaHorarios,
  NoSearchString,
} from '../models/index';
import {
    BusquedaTutoriaHorariosFromJSON,
    BusquedaTutoriaHorariosToJSON,
    NoSearchStringFromJSON,
    NoSearchStringToJSON,
} from '../models/index';

export interface SearchsTutorshipSchedulesRetrieveRequest {
    searchString: string;
}

/**
 * 
 */
export class SearchsApi extends runtime.BaseAPI {

    /**
     */
    async searchsTutorshipSchedulesRetrieveRaw(requestParameters: SearchsTutorshipSchedulesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BusquedaTutoriaHorarios>> {
        if (requestParameters.searchString === null || requestParameters.searchString === undefined) {
            throw new runtime.RequiredError('searchString','Required parameter requestParameters.searchString was null or undefined when calling searchsTutorshipSchedulesRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.searchString !== undefined) {
            queryParameters['search_string'] = requestParameters.searchString;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("jwtAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/searchs/tutorship_schedules`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BusquedaTutoriaHorariosFromJSON(jsonValue));
    }

    /**
     */
    async searchsTutorshipSchedulesRetrieve(requestParameters: SearchsTutorshipSchedulesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BusquedaTutoriaHorarios> {
        const response = await this.searchsTutorshipSchedulesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
