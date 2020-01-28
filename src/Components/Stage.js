// Stage that holds the tasks
import React from 'react';
import {
  Button,
  Card,
  Collapse,
  Elevation,
  InputGroup,
} from '@blueprintjs/core';

const Stage = ({
  title,
  stageId,
  children,
  handleClick,
  handleSubmit,
  isOpen,
}) => {
  // data-testid
  const stageTestId = `stage-${stageId}`;
  const addButtonTestId = `${stageTestId}-add-button`;
  const newTaskInputTestId = `${stageTestId}-new-task-input`;
  const newTaskInputConfirmTestId = `${stageTestId}-new-task-input-confirm`;
  const moveLeftButtonTestId = `${stageTestId}-move-left`;
  const moveRightButtonTestId = `${stageTestId}-move-right`;
  const deleteButtonTestId = `${stageTestId}-delete`;

  const submitButton = (
    <Button onClick={() => handleSubmit(stageId)} className="green confirm">
      Confirm
    </Button>
  );
  return (
    <Card className="stage" elevation={Elevation.TWO}>
      <h3 className="stageTitle">{title}</h3>
      {children}
      <Button
        className="green add"
        onClick={() => handleClick(stageId)}
        hidden={isOpen}
      >
        Add Task
      </Button>
      <Collapse isOpen={isOpen}>
        <InputGroup
          className="input"
          rightElement={submitButton}
          id={'input-' + stageId}
          placeholder="Task Name"
        ></InputGroup>
      </Collapse>
    </Card>
  );
};

export default Stage;
