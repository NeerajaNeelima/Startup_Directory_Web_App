import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Card.css';

const CompanyList = ({companies}) => {
      //console.log("cimpanilist",companies)
    
      return (
        
            <Card companies={companies}/>
       
      )   
        
};

export default CompanyList;
