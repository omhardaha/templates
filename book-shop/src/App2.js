import React, { useState } from 'react'

export default function App2() {
    const [image,setImage] = useState()
    return (
        <div>
            <div className='h-80 w-80'>
                <button onClick={(e)=>setImage(e.target.files[0])}>Pick a images</button>
                <img className='mask1 h-80 w-80' alt='img' src='https://images.unsplash.com/photo-1665686440627-936e9700a100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
            </div>
            <img className='half-black cp-list absolute top-0 h-80 w-80' alt='img' src='./asset/user_image_frame_4.png'></img>
        </div>

    )
}
