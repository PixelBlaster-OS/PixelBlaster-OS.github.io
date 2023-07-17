import React from 'react'
import styles from './Team.module.css'
import TeamCard from '../../components/TeamCard/TeamCard'

const Team = () => {

  const url = 'https://raw.githubusercontent.com/PixelBlaster-Releases/website_api/main/team.json';
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
      {post.length > 0 ? post.map(post => <TeamCard key={post.id} data={post} />) : <div >No members found.</div>}
    </div>
  )
}

export default Team