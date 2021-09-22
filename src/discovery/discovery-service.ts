/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { AxiosResponse } from 'axios';

import { Jellyfin } from '..';
import { PublicSystemInfo } from '../generated-client';

import { getAddressCandidates } from '../utils';

import { RecommendedServerDiscovery } from './recommended-server-discovery';

export class DiscoveryService {
	private jellyfin;
	private recommendedServerDiscovery;

	constructor(jellyfin: Jellyfin) {
		this.jellyfin = jellyfin;
		this.recommendedServerDiscovery = new RecommendedServerDiscovery(this.jellyfin);
	}

	/**
	 * Gets a list of address candidates url strings
	 * from a provided url address string.
	 * @param input A server url address string.
	 * @returns A list of potential server addresses.
	 */
	getAddressCandidates(input: string): Array<string> {
		return getAddressCandidates(input);
	}

	async getRecommendedServers(
		servers: Array<string>
		// TODO: Add minimum score
	): Promise<Array<AxiosResponse<PublicSystemInfo>>> {
		return this.recommendedServerDiscovery.discover(servers);
	}

	async getRecommendedServerCandidates(
		input: string
		// TODO: Add minimum score
	): Promise<Array<AxiosResponse<PublicSystemInfo>>> {
		return this.getRecommendedServers(this.getAddressCandidates(input));
	}
}
