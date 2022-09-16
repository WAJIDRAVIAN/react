import React from 'react';
import './SeasonDisplay.css'
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
// const App=()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         position=>console.log(position),
//         err=>console.log(err)
//     );
// return (
//     <div > Hi there</div>
// );
// };
class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={lat:null, errorMsg:''};
    // }
    state={lat:null, errorMsg:''};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
        position=>{
            this.setState({lat:position.coords.latitude});
            console.log(position)
        },
        err=>{this.setState({errorMsg:err.message})}
    );
    }
    // componentDidUpdate(msg){
    //     console.log(msg);
    // }

    renderContent(){

        if (this.state.lat && !this.state.errorMsg) {
            // return <div>Latitude: {this.state.lat}</div>
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if ( this.state.errorMsg && !this.state.lat) {
            return <Spinner message={this.state.errorMsg}/>
        }
         return <Spinner message="Waiting for location..."/>
    }

    render(){
        return (
            <div className='border-red'>{this.renderContent()}</div>
            
            );
    }

}
ReactDOM.createRoot(document.querySelector('#root')).render(<App/>);