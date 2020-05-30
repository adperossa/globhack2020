 import React from 'react';
import {Modal} from 'react-bootstrap';

export default (props) =>{
    return(
        <>
            <Modal show={props.show}
                   onHide={props.onHide}
            >

                <Modal.Header closeButton>

                    <Modal.Title>
                        {props.title}
                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    {props.body}
                </Modal.Body>

                <Modal.Footer>
                    {props.footer}
                </Modal.Footer>
                
            </Modal>
        </>
    )
}