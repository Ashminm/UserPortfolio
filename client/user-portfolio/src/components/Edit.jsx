import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';


function Edit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button onClick={handleShow}><i className='material-icons text-3xl'>edit_document</i></button>
      <Modal show={show} onHide={handleClose}  centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit detailse</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button  onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit
