import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Nav from '../Nav'

const Edit = () => {

    const [state, setState] = useState({
        createBlog: {
            mainHeader: "",
            mainContent: "",
            subHeader1: "",
            subContent1: "",
            subHeader2: "",
            subContent2: "",
            subHeader3: "",
            subContent3: "",
            subHeader4: "",
            subContent4: "",
            subHeader5: "",
            subContent5: "",
            subHeader6: "",
            subContent6: "",
            image: "",
        },
        createEvent: {
            name: "",
            date: "",
            description: "",
        }
    })

    const {createBlog} = state;
    const {createEvent} = state;
    const [errors, setErrors] = useState([]);

    const [blogs, setBlogs] = useState([]);
    const [events, setEvents] = useState([])


    const handleBlogInputs = (e) => {
        setState({ ...state, createBlog: { ...state.createBlog, [e.target.name]: e.target.value }})
    }
    
    const handleEventInputs = (e) => {
        setState({ ...state, createEvent: { ...state.createEvent, [e.target.name]: e.target.value }})
    }

    const handleBlogCreation = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/blogs", createBlog, {withCredentials: true })
            .then((res) => { console.log(res)})
            .catch((err)=> {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }
    
    const handleEventCreation = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/event", createEvent, {withCredentials: true })
            .then((res) => { console.log(res)})
            .catch((err)=> {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    // Read Feature
    useEffect(()=>{
        axios.get("http://localhost:8000/api/blogs")
            .then((res)=>{
                console.log(res.data);
                setBlogs(res.data);
            })
            .catch((err)=>console.log(err))
        }, [])
        
    useEffect(()=>{
        axios.get("http://localhost:8000/api/event/")
            .then((res)=>{
                console.log(res.data);
                setEvents(res.data);
            })
            .catch((err)=>console.log(err))
        }, [])

    // Delete Feature
    const deleteBlogFilter = (idFromBelow) =>{
        axios.delete(`http://localhost:8000/api/blogs/${idFromBelow}`)
            .then((res)=>{
                console.log(res.data);
                setBlogs(blogs.filter((blog, index)=> blog._id !== idFromBelow));
            })
            .catch((err)=>console.log(err))
        }

    const deleteEventFilter = (idFromBelow) =>{
        axios.delete(`http://localhost:8000/api/event/${idFromBelow}`)
            .then((res)=>{
                console.log(res.data);
                setEvents(events.filter((event, index)=> event._id !== idFromBelow));
            })
            .catch((err)=>console.log(err))
        }

    
  return (
    <div>
        <Nav/>
        <div className='relative w-full h-full'>
            <div className='absolute flex justify-center w-full h-screen gap-10 mt-40'>
                <div className='flex items-center justify-center w-1/2 h-full'>
                    <form onSubmit={handleBlogCreation}>
                        <h1 className='mb-10 text-5xl'>Create Blog</h1>
                        <div className='grid grid-cols-3 gap-10'>
                            <div>
                                <label>Main Header:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="mainHeader" className="text-black"/>
                                {
                                errors.name ? errors.name.message : null
                                }
                            </div>
                            <div>
                                <label>Main Content:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="mainContent" className="text-black"/>
                                {
                                errors.name ? errors.name.message : null
                                }
                            </div>
                            <div>
                                <label>Sub-Header:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="subHeader1" className="text-black"/>
                            </div>
                            <div>
                                <label>Sub-Content:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="subContent1" className="text-black"/>
                            </div>
                            <div>
                                <label>Sub-Header:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="subHeader2" className="text-black"/>
                            </div>
                            <div>
                                <label>Sub-Content:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="subContent2" className="text-black"/>
                            </div>
                            <div>
                                <label>Sub-Header:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="subHeader3" className="text-black"/>
                            </div>
                            <div>
                                <label>Sub-Content:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="subContent3" className="text-black"/>
                            </div>
                            <div>
                                <label>Sub-Header:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="subHeader4" className="text-black"/>
                            </div>
                            <div>
                                <label>Sub-Content:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="subContent4" className="text-black"/>
                            </div>
                            <div>
                                <label>Sub-Header:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="subHeader5" className="text-black"/>
                            </div>
                            <div>
                                <label>Sub-Content:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="subContent5" className="text-black"/>
                            </div>
                            <div>
                                <label>Sub-Header:</label><br />
                                <input onChange={handleBlogInputs}type="text" name="subHeader6" className="text-black"/>
                            </div>
                            <div>
                                <label>Sub-Content:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="subContent6" className="text-black"/>
                            </div>
                            <div>
                                <label>Image:</label><br />
                                <input onChange={handleBlogInputs} type="text" name="image" className="text-black"/>
                            </div>
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className='flex items-center justify-center w-1/2 h-full'>
                    <form onSubmit={handleEventCreation}>
                        <h1 className='mb-10 text-5xl'>Create Event</h1>
                        <div>
                            <label>Name :</label><br /><br />
                            <input onChange={handleEventInputs} type="text" name="name" className="text-black"/>
                            {
                            errors.name ? errors.name.message : null
                            }
                        </div>
                        <div>
                            <label>date:</label><br /><br />
                            <input onChange={handleEventInputs} type="date" name="date" className="text-black"/>
                            {
                            errors.name ? errors.name.message : null
                            }
                        </div>
                        <div>
                            <label>Description:</label><br /><br />
                            <input onChange={handleEventInputs} type="text" name="description" className="text-black"/>
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <div className='absolute mt-[100vh] w-full h-screen flex justify-center items-center'>
                <div className='flex items-center justify-center w-1/2'>
                    <div className='p-10 border border-white bg-slate-800 w-[40rem]'>
                        <p className='mb-10 text-6xl'>Blog</p>
                        {
                            blogs.map((blog, index) =>(
                                <div key={index} className='flex justify-between gap-10 p-2 mt-2 border border-black'>
                                    <p className='w-80'>{blog.mainHeader}</p>
                                    <button onClick={() => deleteBlogFilter(blog._id)}>Delete</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex items-center justify-center w-1/2'>
                    <div className='p-10 border border-white bg-slate-800 w-[40rem]'>
                        <p className='mb-10 text-6xl'>Events</p>
                        {
                            events.map((event, index) =>(
                                <div key={index} className='flex justify-between gap-10 p-2 mt-2 border border-black'>
                                    <p className='w-80'>{event.name}</p>
                                    <button onClick={() => deleteEventFilter(event._id)}>Delete</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Edit