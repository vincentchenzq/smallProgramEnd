// 返回
class ResponseData {
    constructor() {
        this.status = 200; // 成功  500 表示失败 400 无权访问
        this.message = "";
        this.data = null;
    }
    // 成功
    static success(data) {
        const instance = new ResponseData();
        instance.data = data;
        return instance;
    }
    // 失败
    static fail(message) {
        const instance = new ResponseData();
        instance.status = 500;
        instance.message = message;
        return instance;
    }
    // 无权访问
    static unauthorized(message = "无权访问") {
        const instance = new ResponseData();
        instance.status = 400;
        instance.message = message;
        return instance;
    }
}
module.exports = ResponseData;
