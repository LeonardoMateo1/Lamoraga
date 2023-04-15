import React, {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios';
import Footer from '../Footer'
import Hours from '../toolbar/Hours'
import Nav from '../Nav'
import bg from "../../assets/event-hero.webp";


const BlogPage = () => {

  const [mainHeader, setMainHeader] = useState("");
  const [mainContent, setMainContent] = useState("");
  
  const [subHeader1, setSubHeader1] = useState("")
  const [subContent1, setSubContent1] = useState("")
  const [subHeader2, setSubHeader2] = useState("")
  const [subContent2, setSubContent2] = useState("")
  const [subHeader3, setSubHeader3] = useState("")
  const [subContent3, setSubContent3] = useState("")
  const [subHeader4, setSubHeader4] = useState("")
  const [subContent4, setSubContent4] = useState("")
  const [subHeader5, setSubHeader5] = useState("")
  const [subContent5, setSubContent5] = useState("")
  const [subHeader6, setSubHeader6] = useState("")
  const [subContent6, setSubContent6] = useState("")
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [createBlogOpen, setCreateBlogOpen] = useState(false);

  const [blogs, setBlogs] = useState([])

  const handleBlog = () => {
    setCreateBlogOpen(!createBlogOpen)
  }

  const submitHandler = (e) =>{
    e.preventDefault();


    axios.post("http://localhost:8000/api/blogs", {
      mainHeader,
      mainContent,
      subHeader1,
      subContent1,
      subHeader2,
      subContent2,
      subHeader3,
      subContent3,
      subHeader4,
      subContent4,
      subHeader5,
      subContent5,
      subHeader6,
      subContent6,
      image,
    })
      .then((res)=>{
        console.log(res);
        console.log(res.data);
        setMainHeader("");
        setMainContent("");
        setSubHeader1("");
        setSubContent1("");
        setSubHeader2("");
        setSubContent2("");
        setSubHeader3("");
        setSubContent3("");
        setSubHeader4("");
        setSubContent4("");
        setSubHeader5("");
        setSubContent5("");
        setSubHeader6("");
        setSubContent6("");
        setImage("");
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.error.errors) // important 
      });
  }

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
        <div>
          <button onClick={handleBlog} className='hidden w-5 h-5 2xl:block'></button>
        </div>
        <div className={`${createBlogOpen ? 'flex' : 'hidden'} flex-col items-center w-full`}>
          <form onSubmit={submitHandler}>
            <div>
                <label>Main Header:</label><br /><br />
                <input
                onChange={(e) => setMainHeader(e.target.value)}
                type="text" 
                name="mainHeader" 
                value={mainHeader} 
                className="text-black"
                />
                {
                  errors.name ? errors.name.message : null
                }
            </div>
            <div>
                <label>Main Content:</label><br /><br />
                <input
                onChange={(e) => setMainContent(e.target.value)}
                type="text" 
                name="mainContent" 
                value={mainContent} 
                className="text-black"
                />
                {
                  errors.name ? errors.name.message : null
                }
            </div>
            <div>
                <label>Sub-Header:</label><br /><br />
                <input
                onChange={(e) => setSubHeader1(e.target.value)}
                type="text" 
                name="subHeader1" 
                value={subHeader1} 
                className="text-black"
                />
            </div>
            <div>
                <label>Sub-Content:</label><br /><br />
                <input
                onChange={(e) => setSubContent1(e.target.value)}
                type="text" 
                name="subContent1" 
                value={subContent1} 
                className="text-black"
                />
            </div>
            <div>
                <label>Sub-Header:</label><br /><br />
                <input
                onChange={(e) => setSubHeader2(e.target.value)}
                type="text" 
                name="subHeader2" 
                value={subHeader2} 
                className="text-black"
                />
            </div>
            <div>
                <label>Sub-Content:</label><br /><br />
                <input
                onChange={(e) => setSubContent2(e.target.value)}
                type="text" 
                name="subContent2" 
                value={subContent2} 
                className="text-black"
                />
            </div>
            <div>
                <label>Sub-Header:</label><br /><br />
                <input
                onChange={(e) => setSubHeader3(e.target.value)}
                type="text" 
                name="subHeader3" 
                value={subHeader3} 
                className="text-black"
                />
            </div>
            <div>
                <label>Sub-Content:</label><br /><br />
                <input
                onChange={(e) => setSubContent3(e.target.value)}
                type="text" 
                name="subContent3" 
                value={subContent3} 
                className="text-black"
                />
            </div>
            <div>
                <label>Sub-Header:</label><br /><br />
                <input
                onChange={(e) => setSubHeader4(e.target.value)}
                type="text" 
                name="subHeader4" 
                value={subHeader4} 
                className="text-black"
                />
            </div>
            <div>
                <label>Sub-Content:</label><br /><br />
                <input
                onChange={(e) => setSubContent4(e.target.value)}
                type="text" 
                name="subContent4" 
                value={subContent4} 
                className="text-black"
                />
            </div>
            <div>
                <label>Sub-Header:</label><br /><br />
                <input
                onChange={(e) => setSubHeader5(e.target.value)}
                type="text" 
                name="subHeader5" 
                value={subHeader5} 
                className="text-black"
                />
            </div>
            <div>
                <label>Sub-Content:</label><br /><br />
                <input
                onChange={(e) => setSubContent5(e.target.value)}
                type="text" 
                name="subContent5" 
                value={subContent5} 
                className="text-black"
                />
            </div>
            <div>
                <label>Sub-Header:</label><br /><br />
                <input
                onChange={(e) => setSubHeader6(e.target.value)}
                type="text" 
                name="subHeader6" 
                value={subHeader6} 
                className="text-black"
                />
            </div>
            <div>
                <label>Sub-Content:</label><br /><br />
                <input
                onChange={(e) => setSubContent6(e.target.value)}
                type="text" 
                name="subContent6" 
                value={subContent6} 
                className="text-black"
                />
            </div>
            <div>
                <label>Image:</label><br /><br />
                <input
                onChange={(e) => setImage(e.target.value)}
                type="text" 
                name="image"
                value={image} 
                className="text-black"
                />
            </div>
            <input type="submit" value="Submit" />
          </form>
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