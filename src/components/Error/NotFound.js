import React from 'react'
import { useNavigate } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <Modal centered size={'lg'} show={true}>
            <Modal.Header>
                <Modal.Title>Page Not Found</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>This <u>{window.location.href}</u> page can't be found</h2>
                <p>Looks like the link is broken or the entered URL, <b>{window.location.href}</b>, doesn't exist on our server.</p>
                <p>Inconvenience regretted. <br />Padh.ai</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={ () => { navigate(-1) }}> { /* To go back */ }
                    Go Back
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NotFound