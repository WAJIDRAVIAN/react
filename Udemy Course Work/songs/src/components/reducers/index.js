// Songs Reducer
const SongsReducer =()=>{

    return [
        {title: 'Game', duration:'6.01'},
        {title: 'Last Ride', duration:'4:03'},
        {title:'Jutt Charhya Kechehri', duration:'3:20'}
    ];
};

const SelectedSongReducer = (selectedSong=null, action) =>{
    if (action.type==='SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};