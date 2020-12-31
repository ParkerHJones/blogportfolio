import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import BlogPost from '../../components/BlogPost';

/**
 * @author
 * @function Blog
 */


 const Blog = (props) => {
     return(
         <section className="container">
         <BlogPost {...props} />
         
         </section>
     )
 }

 export default Blog; 