/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { AxiosResponse } from 'axios';

import { Jellyfin } from '..';
import { PublicSystemInfo } from '../generated-client';

export class RecommendedServerDiscovery {
	private jellyfin;

	constructor(jellyfin: Jellyfin) {
		this.jellyfin = jellyfin;
	}

	async getSystemInfoResult(address: string): Promise<AxiosResponse<PublicSystemInfo>> {
		const api = this.jellyfin.createApi(address);
		return api.systemApi.getPublicSystemInfo({ timeout: 1000 })
			.catch((err) => {
				console.log('Response =>', address, err);
				return err.response;
			});
	}

	async discover(servers: Array<string>): Promise<Array<AxiosResponse<PublicSystemInfo>>> {
		return Promise.all(
			servers.map(server => this.getSystemInfoResult(server))
		);
	}
}
