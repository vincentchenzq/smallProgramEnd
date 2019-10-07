const BaseDTO = require("./BaseDTO");
class UserInfoDTO extends BaseDTO {
    constructor({
        createTime,
        createBy,
        updateTime,
        updateBy,
        id,
        sId,
        name,
        headUrl
    }) {
        super({ createTime, createBy, updateTime, updateBy });
        this.id = id;
        this.sId = sId;
        this.name = name;
        this.headUrl = headUrl;
    }
}
module.exports = BaseDTO;
