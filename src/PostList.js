import React,{useEffect} from 'react'
import {fetchPost} from './actions'
import { useSelector, useDispatch } from 'react-redux';
import {store} from './store';

function PostList() {
  const fetchPostData = useSelector(state => state.numberOfPosts);
	const dispatch = useDispatch();
  useEffect(() =>{
        const fetchData = async () => {
          console.log(await dispatch(fetchPost()));
        }
        fetchData();
    }, []);

    // useEffect(() => console.log(store.getState()));

  return (
    <div>
      <ul>
      {fetchPostData[0]?.map( post => <li>{ `The post Id is ${post.id} and title ${post.title}` }</li>)}
      </ul>
    </div>
  )
}

export default PostList