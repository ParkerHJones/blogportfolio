import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';
/**
 * @author
 * @function Blog
 */


 const Blog = (props) => {
     return(
         <section className="container">
         <BlogPost />
         <Sidebar />
         </section>
     )
 }

 export default Blog; 