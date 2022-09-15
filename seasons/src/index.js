import React from 'react';
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
    componentDidUpdate(msg){
        console.log(msg);
    }

    render(){
        if (this.state.lat && !this.state.errorMsg) {
            // return <div>Latitude: {this.state.lat}</div>
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if ( this.state.errorMsg && !this.state.lat) {
            return <div>Error: {this.state.errorMsg}</div>
        }
         return <Spinner/>
        // return (<div>Latitude: {this.state.lat}
        // <br/>
        // Error: {this.state.errorMsg}
        // </div>
        // );
    }

}
ReactDOM.createRoot(document.querySelector('#root')).render(<App/>);