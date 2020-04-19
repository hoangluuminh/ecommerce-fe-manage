import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

import speed from "../../../../styles/variables/speed.style";
import { colors } from "../../../../styles/variables/colors.style";

const Input = ({
  // Form Identifier
  name,
  label,
  // Input Properties
  type,
  multiline,
  step,
  rows,
  // react-hook-form Props
  error,
  control,
  rules,
  defaultValue,
  // Additional Props
  errormessage,
  disabled,
  // Handlers
  changed,
  touched,
  // Others
  style,
  className
}) => {
  const handleOnChange = e => {
    if (changed) {
      changed(e);
    }
    return e.target.value;
  };

  return (
    <Controller
      as={TextFieldStyled} // eslint-disable-line
      // Form Identifier
      name={name}
      label={label}
      // Input Properties
      type={type}
      rows={rows}
      multiline={multiline}
      // react-hook-form Props
      error={error}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      // Others
      disabled={disabled}
      style={style}
      variant="outlined"
      inputProps={{ step }}
      InputLabelProps={{
        shrink: !!touched
      }}
      size="small"
      helperText={error && errormessage}
      onChange={([event]) => handleOnChange(event)}
      className={className}
    />
  );
};

export default Input;

// PropTypes
Input.propTypes = {
  // Form Identifier
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // Input Properties
  type: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  step: PropTypes.string,
  // react-hook-form Props
  control: PropTypes.shape({}).isRequired,
  rules: PropTypes.shape({}),
  defaultValue: PropTypes.string,
  // Handlers
  touched: PropTypes.bool,
  changed: PropTypes.func,
  // Additional Props
  errormessage: PropTypes.string,
  // Others
  disabled: PropTypes.bool,
  style: PropTypes.shape({}),
  error: PropTypes.bool,
  className: PropTypes.string
};
Input.defaultProps = {
  type: "text",
  rows: undefined,
  multiline: undefined,
  step: undefined,
  rules: undefined,
  defaultValue: undefined,
  touched: undefined,
  disabled: false,
  style: {},
  error: undefined,
  errormessage: "",
  changed: () => {},
  className: ""
};

// Styles
const TextFieldStyled = styled(TextField)`
  & > .MuiOutlinedInput-root {
    border-radius: 0.25em;
    transition: ${speed.trans} ease-out;
    transition-property: box-shadow;
  }

  & > .MuiOutlinedInput-root.Mui-error {
    box-shadow: 0 0 5px 2px ${colors.scheme.error.light};
  }
`;
