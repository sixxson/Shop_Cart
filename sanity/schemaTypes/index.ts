import { type SchemaTypeDefinition } from "sanity";
import { addressType } from "./addressType";
import { authorType } from "./authorType";
import { bannerType } from "./bannerType";
import { blogType } from "./blogType";
import { blockContentType } from "./blockContentType";
import { blogCategoryType } from "./blogCategoryType";
import { brandType } from "./brandTypes";
import { categoryType } from "./categoryType";
import { productType } from "./productType";
import { orderType } from "./orderType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    bannerType,
    blockContentType,
    productType,
    orderType,
    brandType,
    blogType,
    blogCategoryType,
    authorType,
    addressType,
  ],
};
