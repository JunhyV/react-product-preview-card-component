import {createContext} from 'react'
import postsInfo from '../utils/posts'

export const PostContext = createContext();

export function PostContextProvider(props) {
  let posts = postsInfo;
  return (
    <PostContext.Provider value={posts}>
        {props.children}
    </PostContext.Provider>
  )
}
