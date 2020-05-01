import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@bootstrap-styled/v4";

export default function Menu(props) {
  const [modal, setModal] = useState(props.view);

  const handleClose = () => setModal(!modal);

  return (
    <React.Fragment>
      <Button color="danger" onClick={() => handleClose()}>
        Launch Modal
      </Button>
      <Modal isOpen={modal} toggle={() => handleClose()}>
        <ModalHeader toggle={() => handleClose()}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleClose()}>
            Do Something
          </Button>
          <Button color="secondary" onClick={() => handleClose()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}
