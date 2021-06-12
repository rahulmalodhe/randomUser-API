import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa";

const MyCard =({details}) =>{
    return(
        <Card>
            <CardBody className = "text-center">
                <img height = "150" width = "150" className = "rounded-circle img-thumbnail border-danger" src = {details.picture?.large} alt = {details.name?.title}/>
                <CardTitle className="text-primary">
                    <h2>
                        <span className="px-2"> {details.name?.title}</span>
                        <span className="px-2">{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h2>
                </CardTitle >
                <CardText>
                    <FaMapMarkedAlt />
                    <span className="px-2"> {details.location?.city}</span>
                
                
                
                    <FaPhone />
                    <span className="px-2">{details.phone}</span>
                <CardText>
                    <FaEnvelope />
                    <span className="px-2">{details.email}</span>
                </CardText>
                    
                
                </CardText>
                

            </CardBody>
        </Card>
    );
};
export default MyCard;
