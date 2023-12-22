import React from 'react'
import styles from './Downloads.module.css'
import DeviceCard from '../../components/DeviceCard/DeviceCard'
import { motion } from 'framer-motion'
import axios from 'axios'

const Downloads = ({ id }) => {

  const url = 'https://raw.githubusercontent.com/PixelBlaster-Releases/website_api/main/devices.json';
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(url)
      .then(res =>
        setPost(res.data.response)
        )
      .catch(err => console.log(err));
  }, []);

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: 0,
        duration: 0.8
      }} className={styles.card}>
      {post.length > 0 ? post.map(post => <DeviceCard key={post.id} data={post} url={post.url} />) : <div >No devices found.</div>}
    </motion.div>
  )
}

export default Downloads