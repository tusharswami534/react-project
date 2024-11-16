import React  from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import { Helmet } from 'react-helmet'

const Dashboard = () => {

  return (
        <div className='flex relative overflow-hidden'>
            <Helmet>
                <title>
                    DashBord
                </title>
            </Helmet>
            <Sidebar/>
        </div>
  )
}

export default Dashboard