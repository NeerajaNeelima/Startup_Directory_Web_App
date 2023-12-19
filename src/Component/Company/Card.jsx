/*import React from 'react';
import './Card.css';
import DetailsModel from './DetailsModel';

const Card = ({ companies, showMyModel, setShowMyModel, selectedCompany, handleCardClick }) => {
   return (
    <>
      <div className='flex flex-row flex-wrap'>
        {companies.map((item) => (
          <div key={item._id} onClick={() => handleCardClick(item)}>
            <div className='mx-9 my-5 mt-10 mb-10'>
              <div className='wrapper bg-blue-200 antialiased text-gray-900 py-5 pl-5 pr-5 rounded-md '>
                <div>
                  <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md" />
                  <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-4  rounded-lg shadow-lg">
                      <div className='flex flex-col'>
                        <div className="flex items-baseline">
                          <div className="ml-2 my-2 mr-2 text-gray-600 uppercase text-xs font-semibold tracking-wider ">
                            Company Name :
                          </div>
                          <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                            <h4 className="mt-1 mb-1 ml-1 mr-1 text-md font-semibold uppercase leading-tight truncate">{item.startupName}</h4>
                          </span>
                        </div>
                        <div className="ml-2 my-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                          City : {item.cityLocation}
                        </div>
                        <div className="mt-1 ml-2">
                          ${item.amountInUSD}
                          <span className="text-gray-600 text-sm"> </span>
                        </div>
                        <div className="mt-4 ml-2">
                          <span className="text-teal-600 text-md font-semibold">Started Year : {item.date} </span>
                          <span className="text-sm text-gray-600">(Date)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedCompany && (
        <DetailsModel
          visible={showMyModel}
          onClose={() => setShowMyModel(false)}
          company={selectedCompany}
        />
      )}
    </>
  );
};

export default Card;*/


import React,{useEffect,useState} from 'react'
import './Card.css'
import DetailsModel from './DetailsModel';
const Card = ({companies}) => {

    //const [companies, setCompanies] = useState([]);
    //console.log("result2",companies)
    const [showMyModel,setShowMyModel]=useState(false)
    const [selectedCompany, setSelectedCompany] = useState(null);
    

    const handleCardClick = (company) => {
      setSelectedCompany(company);
      
      setShowMyModel(true);
    };
   /* useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/company'); // Update the route
            const result = await response.json();
            setCompanies(result.startups);
            console.log(result)
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);*/
      if (!companies || !Array.isArray(companies)) {
        return null; // or some fallback content
      }
  return (
    <>
    <div className='flex flex-row flex-wrap'>
    
    {companies.map(item => (
            <div key={item._id} onClick={() => handleCardClick(item)}>
            <div className='mx-9 my-5 mt-10 mb-10'>
            <div className="wrapper bg-blue-200 antialiased text-gray-900 py-5 pl-5 pr-5 rounded-md shadow-lg">
            <div>
                
                <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md"/>    
                
             <div className="relative px-4 -mt-16  ">
               <div className="bg-white p-4  rounded-lg shadow-lg">
                <div className='flex flex-col'>
                <div className="flex items-baseline">
                <div className="ml-2 my-2 mr-2 text-gray-600 uppercase text-xs font-semibold tracking-wider ">
                Company Name :
              </div>
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  <h4 className="mt-1 mb-1 ml-1 mr-1 text-md font-semibold uppercase leading-tight truncate">{item.startupName}</h4>
                  </span>
                  
                </div>
                <div className="ml-2 my-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                City : {item.cityLocation}
              </div>  
              <div className="mt-1 ml-2">
                ${item.amountInUSD}
                <span className="text-gray-600 text-sm"> </span>
              </div>
              <div className="mt-4 ml-2">
                <span className="text-teal-600 text-md font-semibold">Started Year : {item.date} </span>
                <span className="text-sm text-gray-600">(Date)</span>
              </div> 
              </div>
                
            </div>
             </div>
              
            </div>
        </div>
        </div>
            </div>
          
     ))}
      
     </div>
     {selectedCompany && (
        <DetailsModel
          visible={showMyModel}
          onClose={() => setShowMyModel(false)}
          company={selectedCompany}
          

        />
      )}
     </>
  )
}

export default Card;