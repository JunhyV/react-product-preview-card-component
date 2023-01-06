import { useContext, useState} from 'react'
import { PostContext } from '../context/PostContext';
import {HiddenPost} from './PostHiddenBtn'

import '../style/Post.css'

function Post() {
  let posts = useContext(PostContext)
  return (<>
      {posts.map((post, i) => 
<div key={i}className="post">
  <img src={post.img} alt="post-img" className="post__img" />
  <div className="post__content content">
    <h2 className="content__h2">{post.title}</h2>
    <p className="content__p">{post.post}</p>
    <div className='content__footer footer'>
      <div className="footer__profile profile">
        <img src={post.avatar} alt="avatar" className='profile__img'/>
        <h3 className='profile__h3'>{post.name}</h3>
        <p className='profile__p'>{post.date}</p>
      </div>
      <HiddenPost/>
    </div>
    
  </div>
</div>
    )}
  </>
  )
}

export default Post