import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
} from '@fortawesome/free-solid-svg-icons'

import './wsp-gallery.css'
import ReadMore from "./readMore";
import Modal from "react-bootstrap/Modal";

const WSPGallery = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>
      {openModal && 
          <Modal
              className='sliderWrap'
              show={openModal}
                 onHide={handleCloseModal}
                 animation={false}
                 size="lg"
                 aria-labelledby="contained-modal-title-vcenter"
                 centered>
            <Modal.Header closeButton>
              <Modal.Title>{galleryImages[slideNumber].title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='ModalBody'>
              <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
              <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
              <img className='col-12' src={galleryImages[slideNumber].img} alt='' onBlur={handleCloseModal}/>
            </Modal.Body>
            <Modal.Footer>
              {galleryImages[slideNumber].description}
            </Modal.Footer>
          </Modal>
      }

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

      <div className='galleryWrap'>
                <div  className='single'  key={slideNumber}>
                <Card>
                  <Card.Img onClick={ () => handleOpenModal(slideNumber) } variant="top" src={galleryImages[0].img} alt={galleryImages[0].title} />
                  <Card.Body>
                    <Card.Title>{galleryImages[0].title}</Card.Title>
                    <Card.Text>
                      <ReadMore title={galleryImages[0].title} description={galleryImages[0].description}>
                        {galleryImages[0].description}
                      </ReadMore>

                    </Card.Text>
                  </Card.Body>
                </Card>
                </div>
      </div>

    </div>
  )
}

export default WSPGallery