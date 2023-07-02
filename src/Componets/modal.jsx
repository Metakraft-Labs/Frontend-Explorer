import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import '../Style/modal.scss'
import Close from '../Assets/xmark-solid.svg'

export function Modal1({show,close}) {
  return (
    <>
    {
    show ?
    
     <div
       className="modalContainer"
       onClick={() => close()}
     >
       <div className="modal" onClick={(e) => e.stopPropagation()}>
         <header className="modal_header">
           <h2 className="modal_header-title">Modal Title</h2>
           <button className="close" onClick={() => close()}>
             <img src={Close} alt="close" />
           </button>
         </header>
         <main className="modal_content">This is modal content</main>
         <footer className="modal_footer">
           <button className="modal-close" onClick={() => close()}>
             Cancel
           </button>

           <button className="submit">Submit</button>
         </footer>
       </div>
     </div>
     : null
    }
   </>
  )
}


export function Modal2({show,setShow,handleClose,handleShow}) {  
  return (
    <div className='modal2'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Refer & Earn
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  )
}


