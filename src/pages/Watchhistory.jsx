import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/AllApi';

function Watchhistory() {
  const [allHistory,setAllHistory]= useState([])

  const getWatchHistory = async()=>{
    const {data} = await getHistory();

  console.log('====watch history response======');
    console.log(data);
    setAllHistory(data)
  }

  useEffect(()=>{
    getWatchHistory();
  },[])
  const handleDelete = async(historyId)=>{
    await deleteHistory(historyId);
    getWatchHistory();
  }
  return (
   <>
   <div className='container mt-5 d-flex justify-content-between m-5'>
    <h3 className='textStyle'>Watch History</h3>
    <Link to = '/home' style={{textDecoration:'none',color:'white', fontweight: '700',fontsize:'20px'}}>
    <i className="fa-solid fa-arrow-left"></i>
    Back To Home
    </Link>
   </div>
   <table className='table container mb-5 mt-5' data-bs-theme='dark'>
<thead>

  <tr>
    <th>#</th>
    <th>Caption</th>
    <th>URL</th>
    <th>Time Stamp</th>
    <th>Action</th>
  </tr>
</thead>

{
  allHistory.length > 0 ? (
    allHistory.map((item) => (
      <tbody className='textStyle'>
        <tr>
        <td>{item.id}</td>
          <td>{item.caption}</td>
          <td>{item.url}</td>
          <td>{item.timestamp}</td>


          <td><i className="fa-solid fa-trash" onClick={()=>handleDelete(item.id)}></i></td>
        </tr>
      </tbody>
    ))
  ) : null
}

      

      </table>
    </>
  )
}

export default Watchhistory