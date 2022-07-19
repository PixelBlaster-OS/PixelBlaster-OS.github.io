import React, { useState, useEffect } from 'react'
import DeviceCard from './DeviceCard'
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Transition from './Transition';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaSearch } from 'react-icons/fa';

const Devices = () => {
  const navigate = useNavigate();
  const url = 'https://raw.githubusercontent.com/PixelBlaster-Releases/website_api/main/api.json';
  const [post, setPost] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  // Fetch the data of all devices from the API and pass all the data to the DeviceCard component
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {setPost(data.response)
      setAllPosts(data.response)})
      .catch(err => console.log(err));
  }, []);
  const handleChange = (e) => {

    const searchVal = e.target.value;
    searchVal.length > 0 ?
    setPost(allPosts.filter(post => post.devicename.toLowerCase().includes(searchVal.toLowerCase())))
    : setPost(allPosts)
  }
  return (
    <Transition>
            <header className="sm:text-5xl text-2xl font-medium font-mono text-slate-700 dark:text-slate-300 pt-6 type-anim1">
                Supported Devices
            </header>
            <br></br>
      <div className="sm:w-2/3 flex justify-end items-center relative">
      <input className="p-2 mb-8 mr-[15px] sm:ml-0 sm:w-96 bg-slate-300 dark:bg-slate-800" type="text" placeholder="Search"
          onChange={handleChange} style={{  border: "none", borderBottom: "1px solid"}} />
          <FaSearch className="mb-8 absolute mr-2 w-10" alt="Search Icon" style={{color:"gray", opacity:"40%"}} />
          </div>
          <div className="overflow-scroll card h-[34rem]">
          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 device-card">
            {post.length>0 ? post.map(post => <DeviceCard key={post.id} data={post} />) : <div className="text-center text-xl text-medium text-mono text-slate-700 dark:text-slate-300 w-96" style={{height:"14.3rem"}}>No devices found</div>}
          </div>
          </div>
      <br></br>
      <MdArrowBackIosNew
        className="text-gray-500 dark:text-gray-400 sm:text-2xl cursor-pointer float-left"
        onClick={() => navigate("/about")} />
    </Transition>
  )
}

export default Devices