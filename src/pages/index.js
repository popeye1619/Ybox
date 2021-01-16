import React, { useState, useEffect } from 'react';
import AllPosts from './allPosts';
import NewPosts from './newPost';
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { loadPosts } from "../reducers/postsReducer";
import Navbar from '../components/navbar';

const Index = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        dispatch(loadPosts());
        setLoading(false);
    }, [])
    return (
        <Router>
            <div>
                <Navbar />
                <br/>
                <br/>
                {loading ? <div><h1 style={{ textAlign: 'center' }}>...LOADING</h1></div> : <div><Route path="/allposts" component={AllPosts}></Route> </div>}
                <Route path="/newpost" component={NewPosts}></Route>
            </div>
        </Router>
    )
}

export default Index;