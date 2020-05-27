


import Datepicker from "../pages/Masters/Datepicker"

import Table from "../pages/Masters/Table"
import Form from "../pages/Masters/Form"
import Password from "../pages/Masters/PasswordValidation"
import ImageUpload from "../pages/Masters/ImageUpload"
import PdfUpload from "../pages/Masters/PdfUpload"



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
  },
  {
    name: "Password",
    path: "password",

    component: Password,
  },
  {
    name: "ImageUpload",
    path: "imageUpload",

    component: ImageUpload,
  },
  {
    name: "PdfUPload",
    path: "pdfUpload",

    component: PdfUpload,
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
