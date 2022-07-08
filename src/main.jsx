// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components (main)
import { GifExpertApp } from './GifExpertApp';

// Styles
import './styles.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  	<React.StrictMode>
    	<GifExpertApp />
  	</React.StrictMode>
)
