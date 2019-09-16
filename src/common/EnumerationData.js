const ENUMERATIONDATA = {
  /**
   * system (系统枚举类型)
   */
  // 用户状态
  ACCOUNT_STATUS: {
    LOCK: 0, // 锁定
    NORMAL: 1, // 正常
  },

  // 修改密码方式
  UPDATE_PASSWORD_WAY: {
    UPDATE: 0, // 更新密码
    RESEET: 1, // 重置密码
  },

  // 资源类型
  RESOURCE_TYPE: {
    ROOT: 0,
    NAVIGATION: 1,
    PAGE: 2,
    BUTTON: 3,
    FUNCTION_LAYER: 4,
    API: 5,
  },

  /**
   * 能力域
   */
  // 能力域访问权限控制
  ACCESS_CONTROL: {
    ALL: '0', // 全部放开访问
    MIDDLE_STAGE: '1', // 中台内部放开访问
    DOMAIN_GROUP: '2', // 能力域组内放开访问
    NEED_AUTHENTICATION: '3', // 均需要鉴权才能访问
  },

  ACCESS_CONTROL_FOR_CAPABILITY: {
    ALL: 0, // 全部放开访问
    MIDDLE_STAGE: 1, // 中台内部放开访问
    DOMAIN_GROUP: 2, // 能力域组内放开访问
    NEED_AUTHENTICATION: 3, // 均需要鉴权才能访问
  },

  // 能力域访问权限控制
  DOMAIN_STATUS: {
    PUBLISH: '0', // 待发布
    USE: '1', // 已发布
    NOT_USE: '2', // 停用
  },

  // 审核状态
  APPLY_STATUS: {
    NOT_SUBMIT: 0, // 未提交
    NOT_APPROVE: 1, // 未审核
    APPROVED: 2, // 已审核
  },

  // 能力依赖方法/能力扩展 审批状态
  APPLY_METHOD_OR_EXTENSION_STATUS: {
    SUBMIT: 0, // 提交
    APPROVE: 1, // 通过
    DENY: 2, // 拒绝
  },
};

export default ENUMERATIONDATA;
