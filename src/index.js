import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/search_bar';


const API_KEY = 'AIzaSyDNf1mNPWlrstR2mBpHiEYNjqY9hoO_CeQ'


const App = () => {
    return(
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);