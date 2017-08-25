import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import PostProfile from './components/post_profile';



export default (
  <MuiThemeProvider>
    <Route path="/profile/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/repinfo/" component={PostProfile} />
    </Route>
  </MuiThemeProvider>
);
