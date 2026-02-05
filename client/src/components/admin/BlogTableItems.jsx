import React from 'react'
import {assets} from '../../assets/assets.js'
import { useAppContext } from '../../context/AppContext.jsx';
import toast from 'react-hot-toast';


const BlogTableItems = ({ blog, fetchBlogs, index }) => {
    
  if (!blog) return null;
  
  const { title, createdAt } = blog;
  const BlogsDate = new Date(createdAt)
  const { axios } = useAppContext();


  const deleteBlog = async () => {
  if (!window.confirm('Are you sure you want to delete this blog?')) return;

  try {
    const { data } = await axios.post('/api/blog/delete', { id: blog._id })


    if (data.success) {
      toast.success(data.message);
      await fetchBlogs();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};



  const togglePublished = async () => {

    try {
      const { data } = await axios.post('/api/blog/toggle-publish', { id: blog._id })
      if (data.success) {
          toast.success(data.success)
          await fetchBlogs()
        } else {
          toast.error(data.message)
        }
    } catch (error) {
      toast.error(error.message)
    }
    
  }


  return (
    <tr className=' border-y border-gray-300'>

      <th className='px-2 py-4'>{index}</th>
      
      <td className='px-2 py-4'>{title}</td>
      
      <td className='px-2 py-4 max-sm:hidden'>{BlogsDate.toDateString()}</td>
      
          <td className='px-2 py-4 max-sm:hidden'>
              <p className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`}
              >{blog.isPublished ? 'Published' : 'unpublished'}</p>
      </td>

      <td className=' px-2 py-4 flex text-xs gap-3'>
        
        <button onClick={togglePublished} className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.isPublished ? 'Unpublish' : 'Publish'}</button>

        <img onClick={deleteBlog} src={assets.cross_icon} className='w-8 hover:scale-110 transition-all cursor-pointer' alt='' />
        
      </td>
    </tr>
  )
}

export default BlogTableItems
