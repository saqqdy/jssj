import { OutgoingHttpHeaders } from 'node:http';

interface RequestOptionsType {
    error?: boolean;
}
declare class Request {
    cookies: string[];
    constructor();
    /**
     * 获取请求头
     *
     * @param host - 请求的域名
     * @param propsData - 请求数据
     * @returns headers - 请求头
     */
    getHeaders(host: string, postData?: string): OutgoingHttpHeaders;
    /**
     * 设置cookie
     *
     * @param cookie - cookie
     * @returns this - 当前类
     */
    setCookie(cookie: string): this;
    /**
     * 发起请求
     *
     * @param method - 请求方法：'GET' | 'POST' | 'DELETE' | 'OPTIONS' | 'PUT' | 'PATCH' | 'TRACE' | 'HEAD'
     * @param url - 请求链接
     * @param postData - 序列化之后的请求参数
     * @returns Promise - 请求结果
     */
    request(method: 'GET' | 'POST' | 'DELETE' | 'OPTIONS' | 'PUT' | 'PATCH' | 'TRACE' | 'HEAD', url: string, postData?: string, headers?: OutgoingHttpHeaders, options?: RequestOptionsType): Promise<any>;
    /**
     * get方法
     *
     * @param option - 参数
     * @param option.url - 请求链接
     * @returns Promise - 请求结果
     */
    get({ url, data, headers, options }: any): Promise<any>;
    /**
     * post方法
     *
     * @param option - 参数
     * @param option.url - 请求链接
     * @param option.params - 请求参数
     * @returns Promise - 请求结果
     */
    post({ url, data, headers, options }: any): Promise<any>;
    /**
     * put方法
     *
     * @param option - 参数
     * @returns Promise - 请求结果
     */
    put({ url, data, headers, options }: any): Promise<any>;
    /**
     * delete方法
     *
     * @param option - 参数
     * @returns Promise - 请求结果
     */
    delete({ url, data, headers, options }: any): Promise<any>;
}
declare const _default: Request;

export { RequestOptionsType, _default as default };
