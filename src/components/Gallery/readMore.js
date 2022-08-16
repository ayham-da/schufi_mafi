import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import  './readMore.css'

const ReadMore = ({ children, title, description }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const text = children;

    return (
        <>
        <p className="text">
            {text.slice(0, 50)}
            <span onClick={handleShow} className="read-or-hide">
        {show ? " show less" : "...read more" }
      </span>
        </p>

    <Modal show={show}
           onHide={handleClose}
           animation={false}
           size="lg"
           aria-labelledby="contained-modal-title-vcenter"
           centered>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>
        </>
    );
};

export default ReadMore