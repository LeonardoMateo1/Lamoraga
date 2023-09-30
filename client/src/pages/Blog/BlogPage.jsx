import React, {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios';
import Footer from '../Footer'
import Hours from '../toolbar/Hours'
import Nav from '../Nav'
import bg from "../../assets/event-hero.webp";


const BlogPage = () => {

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
    <div className='h-full'>
        <Nav/>
        <Hours/>
        <div>
            <img src={bg} alt="bg-hero" className='object-cover w-full h-[70vh]'/>
            <div className='absolute flex justify-center w-full top-60'>
                <p className='font-serif text-spirit text-[90px] font-bold'> Our Blog</p>
            </div>
        </div>
        <div className='flex justify-center w-full h-full mt-40'>
          <div className='w-[80%] h-full flex'>
            <div className='flex flex-col items-center justify-center gap-5 '>
              {
                blogs.map((blog, index) => (
                  <div className='bg-menu w-[80%] h-auto' key={index}>
                    <div>
                      <img src={blog.image} alt="blog-image" className='w-full h-[475px] object-cover' />
                    </div>
                    <div className='pl-[3%] pt-[1%] flex flex-col gap-4'>
                      <p>Dec 12, 2022</p>
                      <h4 className='font-serif text-spirit text-[32px]'>{blog.mainHeader}</h4>
                      <div>
                        <p className='line-clamp-2'>{blog.mainContent}</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-[10px] pl-[3%] mt-4 mb-2'>
                      <div className='w-[16px] h-[0px] border border-spirit'></div>
                      <Link className='font-serif font-bold text-spirit' to={`/Blog_Post/${blog._id}`}>Read More</Link>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='h-[288px] hidden lg:flex flex-1'>
              <div className='flex flex-col justify-center bg-categories p-[10%]'>
                <h4 className='text-[32px] font-serif text-spirit pb-[30px]'>All Categories</h4>
                <div className='flex flex-col gap-10 text-cat-text'>
                  <div className='flex items-center justify-between gap-[10rem]'>
                    <p>Photography</p>
                    <div className='flex items-center gap-3'>
                      <div className='h-0 border border-cat-text w-[8rem]'></div>
                      <p>(1)</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-between gap-[10rem]'>
                    <p>Baking</p>
                    <div className='flex items-center gap-3'>
                      <div className='h-0 border border-cat-text w-[8rem]'></div>
                      <p>(1)</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-between gap-[10rem]'>
                    <p>Cooking Tips</p>
                    <div className='flex items-center gap-3'>
                      <div className='h-0 border border-cat-text w-[8rem]'></div>
                      <p>(1)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default BlogPage