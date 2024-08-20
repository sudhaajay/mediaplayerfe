import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VideoCard({ dispalyVideo,setDeleteVideoStatus }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async() => {
        const today = new Date;
        const timeStamp = new Intl.DateTimeFormat('en-US', {
            year:'numeric',
            month: '2-digit',
            day: '2-digit',
           hour:'2-digit',
           minute:'2-digit',
         second:'2-digit'
          }).format(today);
        console.log(timeStamp);
        const reqBody = {
            url:dispalyVideo.youtubeLink,
            caption:dispalyVideo.caption,
            timestamp:timeStamp
        }
        await addToHistory(reqBody)
        setShow(true);
    }
    const deleteVideoItem = async(id)=>{
        const response = await deleteVideo(dispalyVideo.id)
        console.log("respons of delete===");
        console.log(response)
        if(response.status === 200){
            setDeleteVideoStatus(true)
            toast.success("Successfully deleted the video")
            console.log("successfully deleted");
        }
        else{
          console.log("something went wrong");
        }
    }
    const dragStarted=(e,id)=>{
        console.log(`Video with ID ${id} started dragging`);
        e.dataTransfer.setData('videoID',id)
    }
    return (
        <>
            <Card style={{ width: '16rem', height: "350px" }}draggable onDragStart={(e)=>dragStarted(e,dispalyVideo.id)}>
                <Card.Img variant="top" src={dispalyVideo.imageUrl} 
                    height="250px" width="100%" style={{ padding: '5px' }} onClick={handleShow} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{dispalyVideo.caption}</Card.Title>
                        <Button variant="danger"  onClick={deleteVideoItem}><i className="fa-solid fa-trash"></i></Button>
                    </div>

                </Card.Body>
            </Card>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{dispalyVideo.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="480" src={`${dispalyVideo.youtubeLink}`}
                        title="Ennile Punchiri Video Song | Phoenix | Sam C.S | K.S. Chithra | Kapil Kapilan"
                        frameBorder="0" allow="accelerometer; autoplay; allowFullScreen">
                    </iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal >
            {/* <ToastContainer /> */}
        </>
    )
}

export default VideoCard