import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

const ReactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me'  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  ReactElement

)
