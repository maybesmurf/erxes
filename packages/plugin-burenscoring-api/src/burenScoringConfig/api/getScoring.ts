import { BaseApi } from './base';

export class BurenScoringApi extends BaseApi {
  async getScoring(params: {
    keyword: string;
    reportPurpose: string;
    vendor: string;
  }) {
    try {
      return await this.request({
        method: 'POST',
        path: 'api/v1/scoring',
        data: {
          keyword: params.keyword,
          reportPurpose: params.reportPurpose,
          vendor: params.vendor || 'AND_SCORING'
        }
      }).then((r) => r.json());
    } catch (e) {
      throw new Error('getscoring', e);
    }
  }
}
