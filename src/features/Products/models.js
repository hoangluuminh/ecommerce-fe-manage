import { dataTypes, fieldTypes } from "../../utils/model.util";
import { selectBrands } from "../Brands/reducers";
import { selectTypes } from "../Types/reducers";

const brandsSelector = selectBrands.brands;
const typesSelector = selectTypes.types;

// Constant Fields
const typeField = options => ({
  name: "type",
  label: "Type",
  dataTypes: [
    {
      dataType: dataTypes.CUSTOM,
      options: (v, formValues) => {
        if (options && options.isFilter) {
          return true;
        }
        return v.length > 0;
      },
      msg: "Required."
    }
  ],
  fieldType: fieldTypes.SELECT.SIMPLE,
  selections: typesSelector,
  selectionOptions: {
    isReduxSelector: true,
    noneOption: {
      label: options && options.isFilter ? "All" : " "
    }
    // selectableParent: {
    // suffix: " [All]"
    // }
  }
});
const brandField = options => ({
  name: "brand",
  label: "Brand",
  dataTypes: [
    {
      dataType: dataTypes.CUSTOM,
      options: (v, formValues) => {
        if (options && options.isFilter) {
          return true;
        }
        return v.length > 0;
      },
      msg: "Required."
    }
  ],
  fieldType: fieldTypes.SELECT.SIMPLE,
  selections: brandsSelector,
  selectionOptions: {
    isReduxSelector: true,
    noneOption: {
      label: options && options.isFilter ? "All" : " "
    }
    // selectableParent: {
    // suffix: " [All]"
    // },
    // childrenAlias: "ChildTH"
  }
});

// Models

const productModel = [
  {
    name: "name",
    label: "Product Name",
    dataTypes: [
      {
        dataType: dataTypes.STRING,
        options: { min: 1 },
        msg: "Required."
      }
    ],
    fieldType: fieldTypes.INPUT.TEXT
  },
  {
    name: "id",
    label: "Product ID",
    dataTypes: [
      {
        dataType: dataTypes.STRING,
        options: { min: 1 },
        msg: "Required."
      }
    ],
    fieldType: fieldTypes.INPUT.TEXT
  },
  brandField(),
  typeField(),
  {
    name: "year",
    label: "Year",
    dataTypes: [
      {
        dataType: dataTypes.NUMBER.INT,
        options: { min: 1970 },
        msg: "Must be a number (1970 or higher)."
      }
    ],
    fieldType: fieldTypes.INPUT.NUMBER,
    fieldTypeOptions: { step: "any" }
  },
  {
    name: "price",
    label: "Price",
    dataTypes: [
      {
        dataType: dataTypes.NUMBER.INT,
        options: { min: 1 },
        msg: "Must be a number (1 or higher)."
      }
    ],
    fieldType: fieldTypes.INPUT.NUMBER,
    fieldTypeOptions: { step: "any" }
  },
  {
    name: "hidden",
    label: "Hidden from Display",
    dataTypes: [
      {
        dataType: dataTypes.STRING,
        options: { min: 1 }
      }
    ],
    fieldType: fieldTypes.RADIO.GROUPED,
    defaultValue: "false",
    selections: [
      { id: "true", name: "Yes" },
      { id: "false", name: "No" }
    ]
  },
  {
    name: "images",
    label: "Images",
    dataTypes: [
      {
        dataType: dataTypes.ARRAY,
        options: { min: 1 },
        msg: "At least 1 image is required."
      }
    ],
    fieldType: fieldTypes.MEDIA.IMAGES
  },
  {
    name: "variations",
    label: "Variations",
    dataTypes: [],
    fieldType: fieldTypes.VARIATION.MULTIPLE
  },
  {
    name: "attributes",
    label: "Attributes",
    dataTypes: [],
    fieldType: fieldTypes.ATTRIBUTE.MULTIPLE
  },
  {
    name: "blog",
    label: "Detail (Description)",
    dataTypes: [{ dataType: dataTypes.STRING }],
    fieldType: fieldTypes.INPUT.TEXTAREA, // TODO: INPUT BLOG
    fieldTypeOptions: { rows: 10 }
  }
];
export default productModel;

export const productFilterModel = [
  {
    name: "query",
    label: "Search",
    dataTypes: [{ dataType: dataTypes.STRING }],
    fieldType: fieldTypes.INPUT.TEXT
  },
  typeField({ isFilter: true }),
  brandField({ isFilter: true })
];
