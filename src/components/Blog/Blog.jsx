import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_BLOG_POSTS = gql`
  query TheBlogs {
    theBlogs {
      createdAt
      id
      publishedAt
      text
      title
      updatedAt
    }
  }
`;

const Blog = () => {
  const { loading, error, data } = useQuery(GET_BLOG_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Blog Posts</h1>
      {data.theBlogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.text}</p>
          <p>Published At: {new Date(blog.publishedAt).toLocaleString()}</p>
          <p>Updated At: {new Date(blog.updatedAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
