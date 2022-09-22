import React from "react";
import { connect } from "react-redux";

const SongDetail=({song})=>{
    return (

        <div>
            <h2>Details For Selected Song</h2>
           Title: {song?song.title:'Select A Song'}
           <br/>
           Duration: {song?.duration} minutes
        </div>
    );
};

const mapStateToProps=(state)=>{
    return{song:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);