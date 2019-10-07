class BaseDTO {
    constructor({ createTime, createBy, updateTime, updateBy }) {
        this.createTime = createTime;
        this.createBy = createBy;
        this.updateTime = updateTime;
        this.updateBy = updateBy;
    }
}
module.exports = BaseDTO;
