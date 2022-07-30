import { AxiosPromise } from 'axios';
import request from '../request';
import { TrendingSince as MTrendingSince } from '../models/trendingSince';

export const getTrending = (since: MTrendingSince): AxiosPromise<any> => {
    return request({
        url: `https://github.com/trending?since=${since}`,
        method: 'GET',
    });
};

interface Params {
    userName: string,
    repoName: string,
};

export const getRepoReadmeInfo = (param: Params): AxiosPromise<any> => {
    return request({
        url: `https://api.github.com/repos/${param.userName}/${param.repoName}/readme`,
        method: 'GET',
    });
};
