import React from 'react'
import './DetailsModel.css'
const DetailsModel = ({visible,onClose,company}) => {
    if(!visible) return null;
  return (
    <div className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center'>
        <div className='container bg-white p-2 rounded translate ease-in'>
        <span className='absolute top-2 right-2 text-white text-2xl cursor-pointer bg-red-600 pt-1 pb-2 pl-3 pr-3 rounded' onClick={onClose}>
          <div>&times;</div>
        </span>
        {/* Modal content, displaying details of the selected company */}
        {company && (
          <div>
            <h1 className='text-center mt-2 text-teal-800 text-xl font-semibold tracking-wider' >Company Details</h1>
            <div className='p-4'>
            <hr className='border-2 border-grey-600 mb-3'/>
            <div className='flex flex-row mb-2'>
             <span className='text-teal-800 text-xl font-semibold tracking-wider'>Company Name :</span>
             <h2 className=' ml-5 mt-1 text-md font-semibold tracking-wider'>{company.startupName}</h2>
            </div>
            <div className='flex flex-row mb-2'>
             <span className='text-teal-800 text-xl font-semibold tracking-wider'>City :</span>
             <h2 className=' ml-5  mt-1 text-md font-semibold tracking-wider'>{company.cityLocation}</h2>
            </div>
            <div className='flex flex-row mb-2'>
             <span className='text-teal-800 text-xl font-semibold tracking-wider'>Amount :</span>
             <h2 className=' ml-5 mt-1 text-md font-semibold tracking-wider'>${company.amountInUSD}</h2>
            </div>
            <div className='flex flex-row mb-2'>
             <span className='text-teal-800 text-xl font-semibold tracking-wider'>Industry Ventrical :</span>
             <h2 className=' ml-5 mt-1 text-md font-semibold tracking-wider'>{company.industryVertical}</h2>
            </div>
            <div className='flex flex-row mb-2'>
             <span className='text-teal-800 text-xl font-semibold tracking-wider'>Sub Ventrical :</span>
             <h2 className=' ml-5 mt-1 text-md font-semibold tracking-wider'>{company.subVertical}</h2>
            </div>
            <div className='flex flex-row mb-2'>
             <span className='text-teal-800 text-xl font-semibold tracking-wider'>Investor Name :</span>
             <h2 className=' ml-5 mt-1 text-md font-semibold tracking-wider'>{company.investorsName}</h2>
            </div>
            <div className='flex flex-row mb-2'>
             <span className='text-teal-800 text-xl font-semibold tracking-wider'>Investment Type :</span>
             <h2 className=' ml-5 mt-1 text-md font-semibold tracking-wider'>{company.investmentType}</h2>
            </div>
            <div className='flex flex-row '>
             <span className='text-teal-800 text-xl font-semibold tracking-wider'>Stated :</span>
             <h2 className=' ml-5 mt-1 text-md font-semibold tracking-wider'>{company.date}</h2>
            </div>
           
           
           
            
            </div>
            
          </div>
        )}
        </div>
    </div>
  )
}

export default DetailsModel