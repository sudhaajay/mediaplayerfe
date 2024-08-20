import React, { useEffect, useState} from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addCategory, getAllCategory, deleteCategory, getAllVideosById, updateCategory } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';


function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState()
  const [allCategory, setAllCategory] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async ()=>{
    console.log(categoryName);
    if(!categoryName){
       toast.error('Please enter category name')
    }else{
       let body ={
        categoryName:categoryName,
        allVideo:[]
    }
    handleClose()
    const response = await addCategory(body);
    if (response.status===201){
       toast.success(`${categoryName} successfully inserted`)
       setCategoryName('')
       getCategory()
    }else{
      toast.error('something went wrong')
    }
  }
}

  const getCategory = async()=>{
    const response = await getAllCategory();
    const {data} = response;
    console.log("Category Details");
    console.log(data)
    setAllCategory(data)
  }




  const handleDelete = async (catergoryId)=>{
    const result = await deleteCategory(catergoryId);
    console.log('delete response');
    console.log(result)
    if(result.status===200){
      toast.success('The item is deleted')
      getCategory()
    }else{
      toast.error('Failed to delete category')
    }
  }
  const videoDrop = async (e, id) => {
    console.log('========on drop=======');
    console.log('category id==', id);
    const videoid = e.dataTransfer.getData("videoID")
    console.log('video id=====',videoid);
    const {data} = await getAllVideosByID(videoid);
    console.log('======video details=====');
    console.log(data);
    const selectedCategory = allCategory?.find(item=>item.id === id);
    selectedCategory.allVideos.push(data)
    console.log('=====selected category====');
    console.log(selectedCategory);
    const response = await updateCategory(selectedCategory,id)
    getCategory()
}

const dragOver =(e)=>{
  // on dragOver method will trigger page referesh, so the 
  e.preventDefault();
  console.log("=====inside drag over=========");

}
useEffect(()=>{
  getCategory();
},[])

  return (
   <>
   <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
   {
      allCategory?.length > 0 ?
      allCategory.map((item)=>(
        <div className='m-3 border border-secondary rounded p-3'
        droppable onDropOver={(e) => videoDrop(e)}
        onDrop = {(e)=>videoDrop(e, item.id)}
        >
         <div className ='d-flex justify-content between align-item-center'>
          <h6 style={{color:'white'}}>{item.categoryName}</h6>
          <button className='btn btn-danger' onClick={() => handleDelete(item.id)}> <i class="fa-solid fa-trash"></i></button>
         </div>
         {
          item.allVideos.length>0?
          item.allVideos?.map(card =>(
            <VideoCard  displayVideo ={card}/>
          
          ))
       
          : <p>Nothing to display</p>
         }
        </div>

      ))
      : <p>No Categroy Found</p>
   }
   <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
        <Modal.Header closeButton className="bg-dark">
          <Modal.Title>
            <i className="fa-solid fa-list text-warning me-3"></i>
            <span className="textStyle">ADD CATERGORY</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
       <p className='textStyle' style={{fontWeight: 700}}>Please fill the form</p>
          <Form className="border border-secondary p-3 rounded" data-bs-theme='light'>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Catergory Name"
              onChange={(e)=> setCategoryName(e.target.value)} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
              CANCEL
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>
          ADD
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>
   </>
  )
}

export default Category