"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const Page = () => {
    const [img,setImg]=useState()
    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const { data: session } = useSession()
    console.log(session);


    const onSubmit = async (e) => {
        console.log(e.image[0]);
                
         const formData = new FormData();
         formData.append("attachmentFile", e.image[0]);
         formData.append('name', "Veterinarian New Braunfels");
         formData.append('address', "1631 McQueeney Rd, New Braunfels, TX 78130");
         formData.append('phone', "+1 2233445566");
         formData.append('doctorName', "+1 2233445566");
         formData.append('doctorDescription', "Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print,");
         formData.append('shortDescription', "Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.");
        
          try {
             const response = await axios.post('http://localhost:5000/api/shelters', formData);
             console.log(response);
         } catch (e) {
             console.log(e);
         }

         reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="file" {...register("image")} />
                <button type="submit" >Submit</button>

            </form>

        </div>
    )
}

export default Page

/*
'http://localhost:5000/api/clinics'
*/