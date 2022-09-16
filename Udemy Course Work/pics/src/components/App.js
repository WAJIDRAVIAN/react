import React from 'react';
import Unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = {images: []};
    onSearchSubmit= async(term)=>{
        // console.log(term);
        const response = await Unsplash.get('/search/photos',{
        params:{query:term} 
        });

        // console.log(response.data.results);
        this.setState({images: response.data.results})
    }
    render (){
        return (
        <div className="ui container">
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
        </div>
        );
    }
}
export default App;