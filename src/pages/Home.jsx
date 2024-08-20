import React, { useState } from 'react'
import Adds from '../components/Adds'
import Views from '../components/Views'
import { Link } from 'react-router-dom'
import Category from '../components/Category'

function Home() {
    const [uploadVideoStatus, setUploadVideoStatus] = useState({})
    return (
        <>
            <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
                <div className='adds_video'>
                    <Adds setUploadVideoStatus={setUploadVideoStatus} />
                </div>
                <Link to='/watch' style={{ textDecoration: 'none', color: 'white', fontSize: '25px' }}> WATCH HISTORY</Link>
            </div>
            <div className='container mt-5 mb-5 d-flex justify-content-between'>
                <div className="col-md-8 mt-5">
                    <h4 className='textStyle mb-3'>All Videos</h4>
                    <Views uploadVideoStatus={uploadVideoStatus} />
                </div>
                <div className='category'>
                    <Category />
                </div>
            </div>
        </>

    )
}

export default Home