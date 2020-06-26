import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import Modal from "../../../shared/components/UI/Modal";
import Button from "../../../shared/components/Form/Button";

const ConfirmDeleteScale = ({ scale, onClose, onConfirm, disabled }) => {
  const { t } = useTranslation();

  return (
    <Modal in={!!scale} title={t("SCALES.DIALOG.DELETE0")} onClose={onClose}>
      <StyledContainer>
        {scale && (
          <>
            <p style={{ textAlign: "center" }}>
              <b>{t("SCALES.DIALOG.DELETE1")}</b>
              <br />
              <b>{t("SCALES.DIALOG.DELETE2")}</b>
            </p>
            <table style={{ marginBottom: "2rem" }}>
              <tbody>
                <tr>
                  <td>
                    <b>{t("SCALES.MODEL.ID.LABEL")}</b>
                  </td>
                  <td>{scale.id}</td>
                </tr>
                <tr>
                  <td>
                    <b>{t("SCALES.MODEL.NAME.LABEL")}</b>
                  </td>
                  <td>{scale.name}</td>
                </tr>
              </tbody>
            </table>
            <div className="actions">
              <Button color="primary" onClick={() => onConfirm(scale)} disabled={disabled}>
                Confirm
              </Button>
              <Button color="default" onClick={onClose} disabled={disabled}>
                Cancel
              </Button>
            </div>
          </>
        )}
      </StyledContainer>
    </Modal>
  );
};

export default ConfirmDeleteScale;

// PropTypes
ConfirmDeleteScale.propTypes = {
  scale: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }),
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
ConfirmDeleteScale.defaultProps = {
  scale: undefined,
  disabled: undefined
};

// Styles
const StyledContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > .actions > * {
    margin: 0 1rem;
  }
`;
