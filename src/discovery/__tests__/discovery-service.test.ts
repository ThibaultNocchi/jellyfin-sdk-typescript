/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { DiscoveryService } from '..';

import { Jellyfin } from '../..';
import { TEST_CLIENT, TEST_DEVICE } from '../../__helpers__/common';

/**
 * DiscoveryService class tests.
 *
 * @group unit
 */
describe('DiscoveryService', () => {
	it('should return a list of candidates', () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const discovery = new DiscoveryService(jellyfin);

		const candidates = discovery.getAddressCandidates('example.com');
		expect(candidates).toHaveLength(5);
	});

	it('should return a list of recommended candidates', async () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const discovery = new DiscoveryService(jellyfin);

		const recommendations = await discovery.getRecommendedServerCandidates('example.com');
		// console.log(recommendations);
	});
});
