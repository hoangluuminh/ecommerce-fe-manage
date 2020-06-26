import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useMakerSubInfo } from "../hooks";
import FormField from "../../shared/containers/FormField";
import Button from "../../shared/components/Form/Button";

const MakerForm = ({ model, isPerformingUpdate }) => {
  const formFuncs = useFormContext();
  const { t } = useTranslation();

  const isLoadingForm = !useMakerSubInfo();
  const { isSubmitting } = formFuncs.formState;

  return (
    <>
      {model.map(field => (
        <FormField
          model={field}
          key={field.name}
          formFuncs={formFuncs}
          disabled={(isPerformingUpdate && field.name === "id") || isLoadingForm || isSubmitting}
        />
      ))}
      <Button type="submit" color="primary" disabled={isLoadingForm || isSubmitting}>
        {t("FORM.COMMON.SUBMIT")}
      </Button>
    </>
  );
};

export default MakerForm;

// PropTypes
MakerForm.propTypes = {
  model: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isPerformingUpdate: PropTypes.bool
};
MakerForm.defaultProps = {
  isPerformingUpdate: undefined
};
