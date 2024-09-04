import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import SideMenu from './components/SideMenu';
import Posts from './components/Posts';
import FeedMenu from './components/FeedMenu';

interface PostsType {
  id:number,
  title: string,
  reactions: {likes:number, dislikes:number},
  userId:number
}

const App: React.FC = () => {

  const [posts, setPosts] = useState<PostsType[]>([]);
  const [filter, setFilter] = useState({sort: '', query: ''})

  useEffect(() => {
      const fetchPosts = async () => {
          const data = await fetch('https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId')
          .then(res => res.json())
          setPosts(data.posts)
          return true;
      }
      fetchPosts()
  }, []);

  return (
      <div className='wrapper'>
          <Header />
          <div className='container'>
              <SideMenu />
              <Posts posts={posts}/>
              <FeedMenu filter={filter} setFilter={setFilter}/>
          </div>
      </div>
  );
};

export default App;