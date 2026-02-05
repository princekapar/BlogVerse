
import {assets} from '../assets/assets.js'
import { useAppContext } from '../context/AppContext.jsx';
import Dashboard from '../pages/admin/Dashboard.jsx';

const Navebar = () => {
 
  const {navigate,token} = useAppContext()


  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
          <img onClick={()=>navigate("/")} src={assets.logo} alt="logo" className='w-50 sm:w-60' />

      <button onClick={() => { navigate('/admin') }} className='flex items-center gap-1 rounded-full text-sm cursor-pointer bg-primary text-white px-4 py-3 '>{token ? 'Dashboard' : 'Login'}<img src={assets.arrow} alt="" className='w-3' /></button>
     
    </div>
  )
}

export default Navebar
