import React, { useState, useEffect, useRef } from 'react';
import Header from './Component/Dashboard/Header';
import CompanyList from './Component/Company/Company_list';
import Filtering from './Component/Dashboard/Filtering';
import ReactPaginate from 'react-paginate';
import './CommonParent.css'
const CommonParent = () => {
  const [companies, setCompanies] = useState([]);
  const [filters,setFilter]=useState([]);
  const[limit,setLimit]=useState(12)
  const[pageCount,setPageCount]=useState(1)
  const currentpage=useRef()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/company'); // Update the route
        const result = await response.json();
        setFilter(result.startups);
        console.log(result)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
    currentpage.current=1
    getpagination();
  }, []);

  const getUniqueNames = (filters, key) => {
    const namesSet = new Set(
      filters
        .map((company) => company[key]) // Extract the value for the given key
        .filter((value) => typeof value === 'string') // Filter out non-string values
        .map((value) => value.toLowerCase()) // Convert values to lowercase
    );
    return Array.from(namesSet);
  };
  function handlePageClick(e){
    console.log(e);
    currentpage.current=e.selected+1
    getpagination();
    
  }
  const getpagination = async()=>{
    try {
      const response = await fetch(`http://localhost:5000/api/pagination?page=${currentpage.current}&limit=${limit}`); // Update the route
      const results = await response.json();
      setCompanies(results.results.result);
      setPageCount(results.results.pageCount)
      console.log("result",results)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  const changeLimt=()=>{
    currentpage.current=1;
    getpagination();
  }
  return (
    <div>
      <Header
        
        industryVertical={getUniqueNames(filters, 'industryVertical')}
        
      />
       <CompanyList
        companies={companies}
      />
      <div className='flex justify-around mt-10 mb-10'>
      <div>
          <input placeholder='limit' onChange={e=>setLimit(e.target.value)} className='text-black-900 bg-gray-200 rounded p-2 border-b-2 border-black-50'/>
          <button onClick={changeLimt} className='text-slate-50 bg-blue-800 p-2 rounded'>Set Limit</button>
      </div>
      <ReactPaginate
            previousLabel=" < previous "
            nextLabel="next >"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={pageCount}
            pageRangeDisplayed={4}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active "
            forcePage={currentpage.current-1}
            
          />
          
      </div>
      
          

         
      
    </div>
  );

};

export default CommonParent;
