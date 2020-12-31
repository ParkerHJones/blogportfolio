import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Image from '../../blogimages/Snowflake.jpg';

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
             <img src={Image} width="400" height="400" alt=""/>
         </div>

        <div className="postContent">
            <h3> My Passions </h3>
            <p> My passions are not too many. I really enjoy health and fitness, learning new things, and doing yoga.  </p>
            <p> I enjoy learning and studying spanish, going out with friends and learning how to develop. </p>
            <p> Teaching tennis to all ages and ranges of people is something I enjoy fully as well. </p>
            <p> In my spare time I like to make TikToks </p>
        </div> 


         </Card>
         </div>
     );
 }

 export default BlogPost; 