# P14-Modal-Component

## A simple React plugin to show a modal dialog

This project is a part of the FrontEnd developer Open ClassRooms formation, project n° 14.
This is just a simple re-usable React component displaying a modal with two possible actions (validate / cancel).

## Install

```
$ yarn add p14-modal-component
$ npm install p14-modal-component
```

## Usage

### Import it:

```jsx
import Modal from "p14-modal-component";
```

### Create a state in your component to track the status of the modal (opened/closed):

```jsx
// Show modal or not
const [show, setShow] = useState(false);
```

### Render it anywhere :

```jsx
<Modal title="My Modal" onValidate={() => setShow(false)} show={show}>
  This is fantastic modal !
</Modal>
```

### Optionnal props :

You can pass an additional "onCancel" props in the component which will render a "cancel" button and execute the function passed whithin this props on click.

### Full real usage example :

```jsx
import React, { useState } from "react";
import Modal from "p14-modal-component";

export default function App() {
  const [show, setShow] = useState(false);

  const cancelAction = () => {
    // do something here...
  };

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal title="My Modal" onValidate={() => setShow(false)} onCancel={cancelAction} show={show}>
        This is modal body
      </Modal>
    </div>
  );
}
```
