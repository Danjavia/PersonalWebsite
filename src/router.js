import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';

import { LocaleProvider } from 'antd';
import esES from 'antd/lib/locale-provider/es_ES';

// Pages
import IndexPage from './routes/IndexPage';
import PostsPage from './routes/PostsPage';
import PostPage from './routes/PostPage';
import NotFoundPage from './routes/NotFoundPage';

export default function({ history }) {
  return (
    <LocaleProvider locale={esES}>
      <Router history={history}>
        <Route path="/" component={IndexPage} />
        <Route path="/blog" component={PostsPage} />
        <Route path="/blog/:name" component={PostPage} />
        <Route path="/contact" component={PostsPage} />
        <Route path="/courses" component={PostsPage} />
        <Route path="/proposals" component={PostsPage} />
        <Route path="/*" component={NotFoundPage} />
      </Router>
    </LocaleProvider>
  );
};
