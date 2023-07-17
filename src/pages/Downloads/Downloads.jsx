import React from 'react'
import styles from './Downloads.module.css'
import DeviceCard from '../../components/DeviceCard/DeviceCard'

const Downloads = () => {

  const url = 'https://raw.githubusercontent.com/PixelBlaster-Releases/website_api/main/devices.json';
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPost(data.response)
        console.log(data)
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={styles.card}>
      {post.length > 0 ? post.map(post => <DeviceCard key={post.id} data={post} />) : <div >No devices found.</div>}
    </div>
  )
}

export default Downloads