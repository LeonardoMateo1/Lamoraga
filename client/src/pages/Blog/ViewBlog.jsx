import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Nav from '../Nav';
import Hours from '../toolbar/Hours';
import Footer from '../Footer';
import bg from "../../assets/event-hero.webp";
import angle from "../../assets/angle.png";


const ViewBlog = () => {


    const {id} = useParams()
    const [blog, setBlog] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/blogs/${id}`)
          .then((res)=>{
            console.log(res.data);
            setBlog(res.data);
          })
          .catch((err)=>console.log(err))
        }, [id])

  return (
    <div>
        <Nav/>
        <Hours/>
        <div>
            <div className='h-screen'>
                <img src={bg} alt="bg-hero" className='object-cover w-full h-[70vh]' />
            </div>
            <div className='absolute flex justify-center w-full top-60'>
                <p className='font-serif text-spirit md:text-[90px] font-bold text-[60px]'>Our Blogs</p>
            </div>
            <div className='absolute flex flex-col sm:flex-row justify-center w-full gap-1 top-[25rem] place-items-center'>
                <Link to='/'><p className='font-serif font-bold text-[23px]'>Home</p></Link>
                <img src={angle} alt="angle" className='w-5 h-5' />
                <Link to='/Blog'><p className='font-serif font-bold text-[23px]'>Blog</p></Link>
                <img src={angle} alt="angle" className='w-5 h-5' />
                <p className='font-serif font-bold text-[23px]'>{blog.mainHeader}</p>
            </div>
        </div>
        <div className='flex justify-center w-full h-full'>
            <div className='flex gap-10 w-[80%] flex-col'>
                <p>Dec 12, 2022</p>
                <h1 className='font-bold font-serif text-spirit text-[38px] md:text-[64px]'>{blog.mainHeader}</h1>
                <img src={blog.image} alt="blog-pic" className='w-full h-[530px] object-cover' />
                <div className='flex justify-between w-full'>
                    <div className='w-[857px] flex flex-col gap-3'>
                        <div>
                            <p className='text-cat-text text-[22px]'>{blog.mainContent}</p>
                        </div>
                        <div className={`${blog.subHeader1 === '' ? '' : ''}`}>
                            <h5 className='font-serif text-spirit text-[29px] font-bold'>{blog.subHeader1}</h5>
                            <p className='text-cat-text text-[22px]'>{blog.subContent1}</p>
                        </div>
                        <div className={`${blog.subHeader2 === '' ? '' : ''}`}>
                            <h5 className='font-serif text-spirit text-[29px] font-bold'>{blog.subHeader2}</h5>
                            <p className='text-cat-text text-[22px]'>{blog.subContent2}</p>
                        </div>
                        <div className={`${blog.subHeader3 === '' ? '' : ''}`}>
                            <h5 className='font-serif text-spirit text-[29px] font-bold'>{blog.subHeader3}</h5>
                            <p className='text-cat-text text-[22px]'>{blog.subContent3}</p>
                        </div>
                        <div className={`${blog.subHeader4 === '' ? '' : ''}`}>
                            <h5 className='font-serif text-spirit text-[29px] font-bold'>{blog.subHeader4}</h5>
                            <p className='text-cat-text text-[22px]'>{blog.subContent4}</p>
                        </div>
                        <div className={`${blog.subHeader5 === '' ? '' : ''}`}>
                            <h5 className='font-serif text-spirit text-[29px] font-bold'>{blog.subHeader5}</h5>
                            <p className='text-cat-text text-[22px]'>{blog.subContent5}</p>
                        </div>
                        <div className={`${blog.subHeader6 === '' ? '' : ''}`}>
                            <h5 className='font-serif text-spirit text-[29px] font-bold'>{blog.subHeader6}</h5>
                            <p className='text-cat-text text-[22px]'>{blog.subContent6}</p>
                        </div>
                    </div>
                    <div className='h-[288px] hidden lg:flex flex-1 justify-end'>
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
        </div>
        <Footer/>
    </div>
  )
}

export default ViewBlog