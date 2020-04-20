import React from "react"
import Modal from "react-bootstrap/Modal"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function ModalTextEntry(props) {

    const saveClicked = (event) => { props.save(event.target.value) }

    return (
        <Modal show={props.show} onHide={props.hide} centered>
            <Modal.Header closeButton>
                <InputGroup>
                    <Form.Control placeholder={props.placeholder} value={props.currentValue} onChange={props.valueChanged}></Form.Control>
                </InputGroup>
            </Modal.Header>
        </Modal>
    )
}

export default ModalTextEntry;