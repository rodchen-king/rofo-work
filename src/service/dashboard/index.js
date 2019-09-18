import http from '../http'

/**
 * 这里统一处理项目中所有的 api 接口
 */

// demo 某功能比如获取一个列表（传入你要不要展示loading的参数）
export const getData = (params,isShow) => http.get('/shares/getAll?id=1',params, true);