import { object } from "prop-types";

/* eslint-disable no-param-reassign */
/**
 * private function
 */

function ergodicTreeTable(ergodicNode) {
  ergodicNode.key = ergodicNode.id; // 添加key, 修复树table展开串数据bug

  if (ergodicNode.children && ergodicNode.children.length > 0) {
    ergodicNode.children.forEach(item => {
      ergodicTreeTable(item);
    });
  } else {
    delete ergodicNode.children; // 删除没有子节点数据的 children字段，为了在没有子节点情况下 显示展开关闭图标
  }
}

/**
 * 数组查重
 * @param {*} arr
 */
export function uniqueArray(arr) {
  const res = new Map();
  return arr.filter(a => !res.has(a) && res.set(a, 1));
}

/**
 * 格式化树table数据
 * @param {*} node
 */
export function formatTreeTable(node) {
  if (Object.prototype.toString.call(node).slice(8, -1) === 'Array') {
    node.forEach(item => {
      ergodicTreeTable(item);
    });
  } else if (typeof node === 'object') {
    ergodicTreeTable(node);
  } else {
    throw new Error('传入对象不是对象或者数组');
  }

  return node;
}

/**
 * 获取树结构下当前节点的所有父亲节点
 * @param {*} data
 * @param {*} nodeId
 */
export function getNodeParent(data, nodeId) {
  let arrRes = [];
  if (data.length === 0) {
    if (nodeId) {
      arrRes.unshift(nodeId);
    }
    return arrRes;
  }
  const rev = (dataTemp, nodeIdTemp) => {
    for (let i = 0, { length } = dataTemp; i < length; i += 1) {
      const node = dataTemp[i];
      if (node.id === nodeIdTemp) {
        arrRes.unshift(nodeIdTemp);
        rev(data, node.parentId);
        break;
      } else if (node.children) {
        rev(node.children, nodeIdTemp);
      }
    }
    return arrRes;
  };
  arrRes = rev(data, nodeId);
  return arrRes;
}

/**
 * 格式化数据源适配treeselect组件
 * @param {*} resourceLevelData
 */
export function formatTreeData(resourceLevelData) {
  function ergodic(node) {
    node.title = node.name;
    node.value = `${node.id}-${node.type}`;
    node.key = node.id;

    if (node.children) {
      node.children.forEach(item => {
        ergodic(item);
      });
    }
  }

  if (Object.prototype.toString.call(resourceLevelData).slice(8, -1) === 'Array') {
    resourceLevelData.forEach(item => {
      ergodic(item);
    });
  } else if (typeof resourceLevelData === 'object') {
    ergodic(resourceLevelData);
  } else {
    throw new Error('传入对象不是对象或者数组');
  }

  return resourceLevelData;
}

/**
 * 格式化数据源适配treeselect组件
 * @param {*} resourceLevelData
 */
export function formatNormalTreeData(resourceLevelData) {
  function ergodic(node) {
    node.title = node.name;
    node.value = node.id;
    node.key = node.id;

    if (node.children) {
      node.children.forEach(item => {
        ergodic(item);
      });
    }
  }

  if (Object.prototype.toString.call(resourceLevelData).slice(8, -1) === 'Array') {
    resourceLevelData.forEach(item => {
      ergodic(item);
    });
  } else if (typeof resourceLevelData === 'object') {
    ergodic(resourceLevelData);
  } else {
    throw new Error('传入对象不是对象或者数组');
  }

  return resourceLevelData;
}

/**
 * 关闭popove
 * @description 在popover弹出的内容，点击之后页面弹出新的dialog，需要将popover隐藏掉
 * @param {*}
 * @author 陈子龙
 * @datetime 2019-5-05
 */
export function closePopover() {
  // 关闭popover
  const htmlCollection = document.getElementsByClassName('ant-popover');
  const propArray = Object.keys(htmlCollection);
  if (propArray.length) {
    propArray.forEach(prop => {
      if (htmlCollection[prop].className.indexOf('ant-popover-hidden') === -1) {
        htmlCollection[prop].className = `${htmlCollection[prop].className}  ant-popover-hidden`;
      }
    });
  }
}

/**
 * 获取HttpMethod 颜色
 * @description 方法 POST / GET / PATCH / PUT / DELETE
 * @param {*}
 * @author 陈子龙
 * @datetime 2019-5-05
 */
export function gethttpmethodbackground(httpMethod) {
  let httpMethodColor = 'black';

  switch (httpMethod) {
    case 'POST':
      httpMethodColor = '#49CC90';
      break;
    case 'GET':
        httpMethodColor = '#61AFFE';
        break;
    case 'PUT':
    case 'PAtCH':
        httpMethodColor = '#50E3C2';
        break;
    case 'DELETE':
        httpMethodColor = '#F93E3E';
        break;
      default:
        break;
  }

  return httpMethodColor;
}
