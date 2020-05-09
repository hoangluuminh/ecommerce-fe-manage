import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

import { useInventoryItemSubInfo } from "../hooks";
import FormField from "../../shared/containers/FormField";
import Button from "../../shared/components/Form/Button";

const FIELDLIST = {
  add: ["itemId", "variationId", "identifiers"],
  update: ["id", "variationId", "available"]
};

const InventoryItemForm = ({ model, isPerformingUpdate, isFetching, onProductChanged }) => {
  const formFuncs = useFormContext();

  const isLoadingForm = !useInventoryItemSubInfo();
  const { isSubmitting } = formFuncs.formState;

  const getFieldList = () => {
    if (isPerformingUpdate) {
      return FIELDLIST.update;
    }
    return FIELDLIST.add;
  };

  const additionalProps = fieldName => {
    const newProps = {};
    if (!!onProductChanged && fieldName === "itemId") {
      newProps.changed = onProductChanged;
    }
    return newProps;
  };

  return (
    <>
      {model
        .filter(f => getFieldList().includes(f.name))
        .map(field => (
          <FormField
            model={field}
            key={field.name}
            formFuncs={formFuncs}
            disabled={
              (isPerformingUpdate && field.name === "id") ||
              isLoadingForm ||
              isFetching ||
              isSubmitting
            }
            {...additionalProps(field.name)} // eslint-disable-line
          />
        ))}
      <Button type="submit" color="primary" disabled={isLoadingForm || isSubmitting}>
        Submit
      </Button>
    </>
  );
};

export default InventoryItemForm;

// PropTypes
InventoryItemForm.propTypes = {
  model: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isPerformingUpdate: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired,
  onProductChanged: PropTypes.func
};
InventoryItemForm.defaultProps = {
  isPerformingUpdate: undefined,
  onProductChanged: undefined
};
