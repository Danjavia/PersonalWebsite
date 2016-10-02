import React from 'react';
import { connect } from 'dva';

import ProductList from '../components/productList';

const Posts = (props) => {

  function handleDelete(id) {
    props.dispatch({
      type: 'posts/delete',
      payload: id,
    });
  }

  return (
    <div>
      <h2>List of Posts</h2>
      <ProductList onDelete={handleDelete} posts={props.posts} />
    </div>
  );
};

// export default Products;
export default connect(({ posts }) => ({
  posts
}))(Posts);
