


import Datepicker from "../pages/Masters/Datepicker"

import Table from "../pages/Masters/Table"
import Form from "../pages/Masters/Form"

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export function isUrl(path) {
  return reg.test(path);
}

const menuData = [

  {
    name: "Datepicker",
    path: "datepicker",

    component: Datepicker,
  },
  {
    name: "Table",
    path: "table",

    component: Table,
  },
  {
    name: "Form",
    path: "form",

    component: Form,
  }
];

function formatter(data, parentPath = "/", parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        item.authority
      );
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
