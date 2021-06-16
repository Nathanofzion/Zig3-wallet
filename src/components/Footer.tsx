import React, { useState } from "react";
import { TextLink, TextLinkVariant, TextButton } from "@stellar/design-system";
import { Modal } from "components/Modal";
import { handleToggle2 } from "components/Header";
import { ConfigurationModal } from "components/ConfigurationModal";
import { useRedux } from "hooks/useRedux";

export const Footer = () => {
  const [configModalVisible, setConfigModalVisible] = useState(false);

  const { account } = useRedux("account");

  const handleConfigModalClose = () => {
    setConfigModalVisible(false);
  };


  return (
    <>
      <div className="Footer">
        <div className="Inset">
          <div>
            <TextLink
              variant={TextLinkVariant.secondary}
              href="https://www.stellar.org/terms-of-service"
              rel="noreferrer"
              target="_blank"
            >
              Terms of Service
            </TextLink>
            <TextLink
              variant={TextLinkVariant.secondary}
              href="https://www.stellar.org/privacy-policy"
              rel="noreferrer"
              target="_blank"
            >
              Privacy Policy
            </TextLink>
        <label id="log-btn" className="pure-material-switch">
           <input onChange={handleToggle2} type="checkbox" />
           <span id="toggle-2">
            <b>Logs</b>
          </span>
        </label>
          </div>

          {account.isAuthenticated && (
            <div>
              <TextButton onClick={() => setConfigModalVisible(true)}>
                Configuration
              </TextButton>
            </div>
          )}
        </div>
      </div>

      <Modal visible={configModalVisible} onClose={handleConfigModalClose}>
        <ConfigurationModal onClose={handleConfigModalClose} />
      </Modal>
    </>
  );
};
