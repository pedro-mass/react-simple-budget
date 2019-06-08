import React, { useState, useRef } from "react";
import { Button, Header, Modal, Input } from "semantic-ui-react";
// import Modal from "react-modal";
// Modal.setAppElement("#root");

export default function NumberModal({
  title,
  onValueSelected = () => {},
  ...props
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [value, setValue] = useState(0);
  const handleInput = e => setValue(e.target.value);
  const addValue = () => {
    onValueSelected(Number(value));
    closeModal();
  };

  const inputRef = useRef();
  const focusInput = () => inputRef.current && inputRef.current.focus();

  return (
    <>
      <Modal
        trigger={
          // todo: make this button squared
          <Button onClick={openModal} {...props}>
            {title}
          </Button>
        }
        open={isModalOpen}
        onClose={closeModal}
        basic
        size="small"
        onMount={focusInput}
      >
        <Header content={title} textAlign="center" />
        <Modal.Content>
          <Input
            type="number"
            name="value"
            value={value}
            onChange={handleInput}
            fluid
            ref={inputRef}
          />
        </Modal.Content>
        <Modal.Actions>
          {/* todo: center these actions */}
          <Button onClick={closeModal} secondary inverted>
            Cancel
          </Button>
          <Button onClick={addValue} primary inverted>
            Ok
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
