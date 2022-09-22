import React from "react";
import { connect, Connect } from "react-redux";

const SongDetail=(props)=>{
    console.log("Song Detail",props);
    return (
        <div>
            Song Details
        </div>
    );
};

const mapStateToProps=(state)=>{
    return{song:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);