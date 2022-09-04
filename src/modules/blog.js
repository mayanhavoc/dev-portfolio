import React from 'react';
import { Link } from 'react-router-dom';
import Article from './article';
import ArticleCard from '../components/article-card';

function Blog({props}) {
  return (
    <section>
        <h2>Blog</h2>
        <section>
            <ul>
                <p></p>
                <li>
                    <ArticleCard {...props}/>
                </li>
            </ul>
            <Link to='#' element={<Article />}></Link>
        </section>
    </section>
  )
}

export default Blog