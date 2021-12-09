import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { RoomCard } from './RoomCard'
import { useNavigate } from 'react-router-dom';


export const RoomList = ({roomList, isEditable, isGetting}) => {
    
    const navigate = useNavigate();
    const handleView = (room) => {
        navigate(`/room/${room.id}`);
    }

    return(
        <Container className="roomlist-container mb-3 mt-3">
        {
            roomList.length <= 0 ? <p className="no-room-text"><i className="bi bi-journal"></i>Hiện không có phòng nào</p> :
            <Row id="room-list-block" xs={1} md={2} xl= {3} className="g-4">
                {
                    roomList.map(room => {
                        return (
                            <Col key = {room.room_id} id="my-card">
                                <RoomCard isEditable = {isEditable} room={room} onClick={!isEditable ? () => handleView(room) : null}/>
                            </Col>
                        )})
                }
            </Row>
        }
        </Container>
    )
}