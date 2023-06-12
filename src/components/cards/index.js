import React, { useState } from "react";
import "./cards.css"
import { Card, Button, Modal } from 'react-bootstrap';
import red_icon from '../../assets/images/red.jpg'
import dark_blue from '../../assets/images/dark_blue.jpg';
import light_blue from '../../assets/images/light_blue.jpg';
import purple from '../../assets/images/purple.jpg'

const CardUI = (props) => {

    const [alertTile, setAlertTitle] = useState('');
    const [isShowAlert, showAlert] = useState(false);


    const getImageColor = (tag) => {
        switch (tag) {
            case "Health":
                return red_icon;
            case "Food":
                return purple;
            case "Housing":
                return light_blue;
            default:
                return dark_blue;
        }
    }

    const setAlertData = (data) => {
        showAlert(true);
        setAlertTitle(data);
    }

    return (
        <>
            <Card>
                <Card.Body className="card-body-style">
                    <div className="mobile-container" style={{ flex: 6 }}>
                        <div style={{ flex: 1, margin: "auto" }}>
                            <img style={{ height: "40px", width: "35px" }} src={getImageColor(props.data.tag)} />
                        </div>
                        <Card.Text style={{ flex: 6, margin: "auto" }}>
                            <span className="card-title-style">{props.data.title}</span>
                            <br />
                            <span className="card-text-style">{props.data.author}</span>
                        </Card.Text>
                    </div>
                    <div style={{ flex: 2 }} className="btn-container-style">
                        <Button onClick={() => setAlertData(props.data.title)} className="btn-style" variant="primary">Get Started
                            <i className="arrow right"></i>
                        </Button>
                    </div>
                </Card.Body>
            </Card >

            <Modal size="md" centered show={isShowAlert} onHide={() => showAlert(false)}>
                <Modal.Body><img className="modal-style" src={getImageColor(props.data.tag)} />
                    <span className="modal-span">{alertTile}</span>
                </Modal.Body>
            </Modal>
        </>

    )
}

export default CardUI;
