import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, Name, price, description, img } = service;
    console.log(service)
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{Name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                {/* //.toLowerCase() */}
                <button className="btn btn-warning">Book {Name}</button>
            </Link>
        </div>
    );
};

export default Service;