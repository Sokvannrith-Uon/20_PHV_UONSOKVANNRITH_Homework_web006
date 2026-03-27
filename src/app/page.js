import React from 'react'
import CustomerHomepageCardComponent from '../app/components/ui/CustomerHomepageCardComponent'
import ProductHomepageCardComponent from '../app/components/ui/productHomepageComponent'
function page() {
  return (
    <div className='ms-50 mt-10 flex  gap-7'>
           <CustomerHomepageCardComponent />
           <ProductHomepageCardComponent />
    </div>
  )
}

export default page
