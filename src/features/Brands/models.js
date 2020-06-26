import { dataTypes, fieldTypes } from "../../utils/model.util";

// Models

export default t => [
  {
    name: "id",
    label: t("BRANDS.MODEL.ID.LABEL"),
    dataTypes: [
      {
        dataType: dataTypes.STRING,
        options: { min: 1 },
        msg: t("MODELLING.DATATYPES.MSG.REQUIRED")
      }
    ],
    fieldType: fieldTypes.INPUT.TEXT
  },
  {
    name: "name",
    label: t("BRANDS.MODEL.NAME.LABEL"),
    dataTypes: [
      {
        dataType: dataTypes.STRING,
        options: { min: 1 },
        msg: t("MODELLING.DATATYPES.MSG.REQUIRED")
      }
    ],
    fieldType: fieldTypes.INPUT.TEXT
  },
  {
    name: "description",
    label: t("BRANDS.MODEL.DESCRIPTION.LABEL"),
    dataTypes: [],
    fieldType: fieldTypes.INPUT.TEXTAREA,
    fieldTypeOptions: {
      rows: 5
    }
  }
];

// export const typeFilterModel = [
// {
// name: "query",
// label: "Search",
// dataTypes: [{ dataType: dataTypes.STRING }],
// fieldType: fieldTypes.INPUT.TEXT
// }
// ];
