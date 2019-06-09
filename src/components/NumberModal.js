import React, { useState, useRef } from "react";
import { Button, Header, Modal, Input } from "semantic-ui-react";

import "./NumberModal.scss";

export default function NumberModal({
  title,
  onValueSelected = () => {},
  initialValue,
  ...props
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [value, setValue] = useState(Number(initialValue));
  const handleInput = e => setValue(e.target.value);
  const addValue = () => {
    onValueSelected(Number(value));
    setValue(Number(initialValue));
    closeModal();
  };
  const canSubmit = value !== undefined && !isNaN(value);

  const inputRef = useRef();
  const focusInput = () => inputRef.current && inputRef.current.focus();
  const handleFocus = event => event.target.select();

  return (
    <>
      <Modal
        trigger={
          <Button onClick={openModal} {...props} className="flat-button">
            {title}
          </Button>
        }
        open={isModalOpen}
        onClose={closeModal}
        basic
        size="mini"
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
            onFocus={handleFocus}
          />
        </Modal.Content>
        <Modal.Actions className="center">
          <Button onClick={closeModal} color="orange">
            Cancel
          </Button>
          <Button onClick={addValue} primary disabled={!canSubmit}>
            Ok
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
