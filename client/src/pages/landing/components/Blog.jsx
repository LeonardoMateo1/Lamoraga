import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import spoon from '../../../assets/gold-spoon.png';


const Blog = () => {

  const [blogs, setBlogs] = useState([])


  useEffect(()=>{
    axios.get("http://localhost:8000/api/blogs")
      .then((res)=>{
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((err)=>console.log(err))
    }, [])




    return (
      <div>
        <div className='flex flex-col items-center justify-center w-full font-serif min-height-viewport'>
          <p className='text-lg font-bold sm:text-2xl'>Blogs</p> 
          <img src={spoon} alt="spoon" />
          <div className='my-10'>
            <p className='text-3xl sm:text-6xl leading-[130%] text-spirit font-bold'>Lamoraga Updates</p>
          </div>
          <div className='flex flex-wrap justify-center gap-[35px] tracking-[0.04em] mb-20'>
            {blogs.map((blog, index) => (
              <div className='w-full mb-8 md:w-1/2 lg:w-1/3 xl:w-1/4' key={index}>
                <div>
                  <img src={blog.image} alt="blog-pic" className='object-cover w-full' style={{aspectRatio: '4/3'}} />
                </div>
                <div className='flex flex-col gap-4 pt-2 pl-4 font-sans'>
                  <p>Dec 12, 2022</p>
                  <h4 className='font-serif text-spirit text-lg sm:text-xl leading-[130%] h-[84px] w-full'>{blog.mainHeader}</h4>
                  <div>
                    <p className='line-clamp-2'>{blog.mainContent}</p>
                  </div>
                </div>
                <div className='flex items-center gap-2 pl-4 mt-4 mb-2'>
                  <div className='w-1 h-1 rounded-full bg-spirit'></div>
                  <Link className='font-serif font-bold text-spirit' to={`/Blog_Post/${blog._id}`}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
          <Link to='/Blog'><button className='px-4 py-2 mt-3 text-base font-bold text-black sm:text-lg bg-spirit line'>View More</button></Link>
        </div>
      </div>
    )
}

export default Blog