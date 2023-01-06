import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App'
import './main.css'
import {PostContext, PostContextProvider} from './context/PostContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <React.StrictMode>
    <PostContextProvider>
          <App/>
    </PostContextProvider>
  </React.StrictMode>
)

