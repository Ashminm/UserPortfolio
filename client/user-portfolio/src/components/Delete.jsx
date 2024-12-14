import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';

function Delete() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <button onClick={handleShow}><span className="material-icons text-2xl md:text-3xl">delete</span></button>
    <Modal show={show} onHide={handleClose} size="sm"
  centered>
        <Modal.Header closeButton>
          <Modal.Title>Move to bin</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want Delete?</Modal.Body>
        <Modal.Footer>
          <button  onClick={handleClose}>
            Remove
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Delete
