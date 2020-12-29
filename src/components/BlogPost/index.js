import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
 * @author
 * @function BlogPost
 */


 const BlogPost = (props) => {
     return(
         <div className="BlogPostsContainer">
         <Card>
             <div className="blogHeader">
         <span className="firstBlog"> First Blog </span>
         <h1 className="postTitle"> My Passions </h1>
         <span className="postedOn"> posted on Dec. 28th 2020 </span>
         </div>

         <div className ="postImageContainer">
             <img src={require('../../blogimages/Snowflake.jpg')} alt="Post Image"/>
         </div>


         </Card>
         </div>
     );
 }

 export default BlogPost; 