/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * HlsSegmentApi - axios parameter creator
 * @export
 */
export const HlsSegmentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets the specified audio segment for an audio item.
         * @param {string} itemId The item id.
         * @param {string} segmentId The segment id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsAudioSegmentLegacyAac: async (itemId: string, segmentId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getHlsAudioSegmentLegacyAac', 'itemId', itemId)
            // verify required parameter 'segmentId' is not null or undefined
            assertParamExists('getHlsAudioSegmentLegacyAac', 'segmentId', segmentId)
            const localVarPath = `/Audio/{itemId}/hls/{segmentId}/stream.aac`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"segmentId"}}`, encodeURIComponent(String(segmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets the specified audio segment for an audio item.
         * @param {string} itemId The item id.
         * @param {string} segmentId The segment id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsAudioSegmentLegacyMp3: async (itemId: string, segmentId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getHlsAudioSegmentLegacyMp3', 'itemId', itemId)
            // verify required parameter 'segmentId' is not null or undefined
            assertParamExists('getHlsAudioSegmentLegacyMp3', 'segmentId', segmentId)
            const localVarPath = `/Audio/{itemId}/hls/{segmentId}/stream.mp3`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"segmentId"}}`, encodeURIComponent(String(segmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a hls video playlist.
         * @param {string} itemId The video id.
         * @param {string} playlistId The playlist id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsPlaylistLegacy: async (itemId: string, playlistId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getHlsPlaylistLegacy', 'itemId', itemId)
            // verify required parameter 'playlistId' is not null or undefined
            assertParamExists('getHlsPlaylistLegacy', 'playlistId', playlistId)
            const localVarPath = `/Videos/{itemId}/hls/{playlistId}/stream.m3u8`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a hls video segment.
         * @param {string} itemId The item id.
         * @param {string} playlistId The playlist id.
         * @param {string} segmentId The segment id.
         * @param {string} segmentContainer The segment container.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsVideoSegmentLegacy: async (itemId: string, playlistId: string, segmentId: string, segmentContainer: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getHlsVideoSegmentLegacy', 'itemId', itemId)
            // verify required parameter 'playlistId' is not null or undefined
            assertParamExists('getHlsVideoSegmentLegacy', 'playlistId', playlistId)
            // verify required parameter 'segmentId' is not null or undefined
            assertParamExists('getHlsVideoSegmentLegacy', 'segmentId', segmentId)
            // verify required parameter 'segmentContainer' is not null or undefined
            assertParamExists('getHlsVideoSegmentLegacy', 'segmentContainer', segmentContainer)
            const localVarPath = `/Videos/{itemId}/hls/{playlistId}/{segmentId}.{segmentContainer}`
                .replace(`{${"itemId"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"playlistId"}}`, encodeURIComponent(String(playlistId)))
                .replace(`{${"segmentId"}}`, encodeURIComponent(String(segmentId)))
                .replace(`{${"segmentContainer"}}`, encodeURIComponent(String(segmentContainer)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Stops an active encoding.
         * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
         * @param {string} playSessionId The play session id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopEncodingProcess: async (deviceId: string, playSessionId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'deviceId' is not null or undefined
            assertParamExists('stopEncodingProcess', 'deviceId', deviceId)
            // verify required parameter 'playSessionId' is not null or undefined
            assertParamExists('stopEncodingProcess', 'playSessionId', playSessionId)
            const localVarPath = `/Videos/ActiveEncodings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            await setApiKeyToObject(localVarHeaderParameter, "X-Emby-Authorization", configuration)

            if (deviceId !== undefined) {
                localVarQueryParameter['deviceId'] = deviceId;
            }

            if (playSessionId !== undefined) {
                localVarQueryParameter['playSessionId'] = playSessionId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HlsSegmentApi - functional programming interface
 * @export
 */
export const HlsSegmentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HlsSegmentApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets the specified audio segment for an audio item.
         * @param {string} itemId The item id.
         * @param {string} segmentId The segment id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHlsAudioSegmentLegacyAac(itemId: string, segmentId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHlsAudioSegmentLegacyAac(itemId, segmentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets the specified audio segment for an audio item.
         * @param {string} itemId The item id.
         * @param {string} segmentId The segment id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHlsAudioSegmentLegacyMp3(itemId: string, segmentId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHlsAudioSegmentLegacyMp3(itemId, segmentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a hls video playlist.
         * @param {string} itemId The video id.
         * @param {string} playlistId The playlist id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHlsPlaylistLegacy(itemId: string, playlistId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHlsPlaylistLegacy(itemId, playlistId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a hls video segment.
         * @param {string} itemId The item id.
         * @param {string} playlistId The playlist id.
         * @param {string} segmentId The segment id.
         * @param {string} segmentContainer The segment container.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHlsVideoSegmentLegacy(itemId: string, playlistId: string, segmentId: string, segmentContainer: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHlsVideoSegmentLegacy(itemId, playlistId, segmentId, segmentContainer, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Stops an active encoding.
         * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
         * @param {string} playSessionId The play session id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async stopEncodingProcess(deviceId: string, playSessionId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.stopEncodingProcess(deviceId, playSessionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HlsSegmentApi - factory interface
 * @export
 */
export const HlsSegmentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HlsSegmentApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets the specified audio segment for an audio item.
         * @param {string} itemId The item id.
         * @param {string} segmentId The segment id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsAudioSegmentLegacyAac(itemId: string, segmentId: string, options?: any): AxiosPromise<any> {
            return localVarFp.getHlsAudioSegmentLegacyAac(itemId, segmentId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets the specified audio segment for an audio item.
         * @param {string} itemId The item id.
         * @param {string} segmentId The segment id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsAudioSegmentLegacyMp3(itemId: string, segmentId: string, options?: any): AxiosPromise<any> {
            return localVarFp.getHlsAudioSegmentLegacyMp3(itemId, segmentId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a hls video playlist.
         * @param {string} itemId The video id.
         * @param {string} playlistId The playlist id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsPlaylistLegacy(itemId: string, playlistId: string, options?: any): AxiosPromise<any> {
            return localVarFp.getHlsPlaylistLegacy(itemId, playlistId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a hls video segment.
         * @param {string} itemId The item id.
         * @param {string} playlistId The playlist id.
         * @param {string} segmentId The segment id.
         * @param {string} segmentContainer The segment container.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHlsVideoSegmentLegacy(itemId: string, playlistId: string, segmentId: string, segmentContainer: string, options?: any): AxiosPromise<any> {
            return localVarFp.getHlsVideoSegmentLegacy(itemId, playlistId, segmentId, segmentContainer, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Stops an active encoding.
         * @param {string} deviceId The device id of the client requesting. Used to stop encoding processes when needed.
         * @param {string} playSessionId The play session id.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopEncodingProcess(deviceId: string, playSessionId: string, options?: any): AxiosPromise<void> {
            return localVarFp.stopEncodingProcess(deviceId, playSessionId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getHlsAudioSegmentLegacyAac operation in HlsSegmentApi.
 * @export
 * @interface HlsSegmentApiGetHlsAudioSegmentLegacyAacRequest
 */
export interface HlsSegmentApiGetHlsAudioSegmentLegacyAacRequest {
    /**
     * The item id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsAudioSegmentLegacyAac
     */
    readonly itemId: string

    /**
     * The segment id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsAudioSegmentLegacyAac
     */
    readonly segmentId: string
}

/**
 * Request parameters for getHlsAudioSegmentLegacyMp3 operation in HlsSegmentApi.
 * @export
 * @interface HlsSegmentApiGetHlsAudioSegmentLegacyMp3Request
 */
export interface HlsSegmentApiGetHlsAudioSegmentLegacyMp3Request {
    /**
     * The item id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsAudioSegmentLegacyMp3
     */
    readonly itemId: string

    /**
     * The segment id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsAudioSegmentLegacyMp3
     */
    readonly segmentId: string
}

/**
 * Request parameters for getHlsPlaylistLegacy operation in HlsSegmentApi.
 * @export
 * @interface HlsSegmentApiGetHlsPlaylistLegacyRequest
 */
export interface HlsSegmentApiGetHlsPlaylistLegacyRequest {
    /**
     * The video id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsPlaylistLegacy
     */
    readonly itemId: string

    /**
     * The playlist id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsPlaylistLegacy
     */
    readonly playlistId: string
}

/**
 * Request parameters for getHlsVideoSegmentLegacy operation in HlsSegmentApi.
 * @export
 * @interface HlsSegmentApiGetHlsVideoSegmentLegacyRequest
 */
export interface HlsSegmentApiGetHlsVideoSegmentLegacyRequest {
    /**
     * The item id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsVideoSegmentLegacy
     */
    readonly itemId: string

    /**
     * The playlist id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsVideoSegmentLegacy
     */
    readonly playlistId: string

    /**
     * The segment id.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsVideoSegmentLegacy
     */
    readonly segmentId: string

    /**
     * The segment container.
     * @type {string}
     * @memberof HlsSegmentApiGetHlsVideoSegmentLegacy
     */
    readonly segmentContainer: string
}

/**
 * Request parameters for stopEncodingProcess operation in HlsSegmentApi.
 * @export
 * @interface HlsSegmentApiStopEncodingProcessRequest
 */
export interface HlsSegmentApiStopEncodingProcessRequest {
    /**
     * The device id of the client requesting. Used to stop encoding processes when needed.
     * @type {string}
     * @memberof HlsSegmentApiStopEncodingProcess
     */
    readonly deviceId: string

    /**
     * The play session id.
     * @type {string}
     * @memberof HlsSegmentApiStopEncodingProcess
     */
    readonly playSessionId: string
}

/**
 * HlsSegmentApi - object-oriented interface
 * @export
 * @class HlsSegmentApi
 * @extends {BaseAPI}
 */
export class HlsSegmentApi extends BaseAPI {
    /**
     * 
     * @summary Gets the specified audio segment for an audio item.
     * @param {HlsSegmentApiGetHlsAudioSegmentLegacyAacRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HlsSegmentApi
     */
    public getHlsAudioSegmentLegacyAac(requestParameters: HlsSegmentApiGetHlsAudioSegmentLegacyAacRequest, options?: any) {
        return HlsSegmentApiFp(this.configuration).getHlsAudioSegmentLegacyAac(requestParameters.itemId, requestParameters.segmentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets the specified audio segment for an audio item.
     * @param {HlsSegmentApiGetHlsAudioSegmentLegacyMp3Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HlsSegmentApi
     */
    public getHlsAudioSegmentLegacyMp3(requestParameters: HlsSegmentApiGetHlsAudioSegmentLegacyMp3Request, options?: any) {
        return HlsSegmentApiFp(this.configuration).getHlsAudioSegmentLegacyMp3(requestParameters.itemId, requestParameters.segmentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a hls video playlist.
     * @param {HlsSegmentApiGetHlsPlaylistLegacyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HlsSegmentApi
     */
    public getHlsPlaylistLegacy(requestParameters: HlsSegmentApiGetHlsPlaylistLegacyRequest, options?: any) {
        return HlsSegmentApiFp(this.configuration).getHlsPlaylistLegacy(requestParameters.itemId, requestParameters.playlistId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a hls video segment.
     * @param {HlsSegmentApiGetHlsVideoSegmentLegacyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HlsSegmentApi
     */
    public getHlsVideoSegmentLegacy(requestParameters: HlsSegmentApiGetHlsVideoSegmentLegacyRequest, options?: any) {
        return HlsSegmentApiFp(this.configuration).getHlsVideoSegmentLegacy(requestParameters.itemId, requestParameters.playlistId, requestParameters.segmentId, requestParameters.segmentContainer, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Stops an active encoding.
     * @param {HlsSegmentApiStopEncodingProcessRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HlsSegmentApi
     */
    public stopEncodingProcess(requestParameters: HlsSegmentApiStopEncodingProcessRequest, options?: any) {
        return HlsSegmentApiFp(this.configuration).stopEncodingProcess(requestParameters.deviceId, requestParameters.playSessionId, options).then((request) => request(this.axios, this.basePath));
    }
}
