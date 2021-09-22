/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { AxiosResponse } from 'axios';

import { PublicSystemInfo } from '../generated-client';

import { RecommendedServerIssue } from './recommended-server-issues';

export enum RecommendedServerInfoScore {
	GREAT = 2,
	GOOD = 1,
	OK = 0,
	BAD = -1
}

export interface RecommendedServerInfo {
	address: string,
	responseTime: number,
	score: RecommendedServerInfoScore,
	issues: Array<RecommendedServerIssue>
	systemInfo: AxiosResponse<PublicSystemInfo>
}
