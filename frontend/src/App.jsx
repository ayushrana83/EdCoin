import React from 'react'
import WalletConnect from './components/WalletConnet'
import Navbar from './components/Navbar'
import EdCoinDashboard from './components/EdCoinsApp'
import Home from './components/Home'

function App() {
  return (
    <div className='bg-slate-900 h-screen '>
      {/* <Navbar/> */}
      {/* <div className='flex items-center justify-center m-10'> */}
      {/* <WalletConnect/> */}
      {/* </div> */}
      {/* <EdCoinDashboard/> */}
      <Home/>
    </div>
  )
}

export default App