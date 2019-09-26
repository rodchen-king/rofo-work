import http from '../http'

// 获取所有分享的条目信息
export const getSharesAction = (params,isShow) => http.get('/shares/getAll?id=1',params, true);

export const inertShareAction = (params,isShow) => http.post('/shares/insert',params, true);