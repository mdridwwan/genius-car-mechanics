import React from 'react';
import axios from 'axios';
import {useForm} from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data =>{
         console.log(data);
        axios.post('http://localhost:5000/services', data)
        .then(res => {
            if (res.data.insertedId){
              alert('Added Successfully');
              reset();
            }
            
        })
        }
    return (
        <div className="add-services">
            <h2>Add a Services</h2>
        
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name...." />
                <textarea {...register("description")} placeholder="description...." />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
            
        </div>
    );
};

export default AddServices;