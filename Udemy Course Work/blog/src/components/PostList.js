import React from "react";
import { connect } from "react-redux";
import { FetchPosts } from "../actions";

class PostList extends React.Component{
    componentDidMount(){
        this.props.FetchPosts();
    }
    render(){
        console.log(this.props.posts)
        return(
            <div>
                <h2>PostList</h2>
            </div>
        );
    };
}

const mapStateToProps = (state) =>{
    return {posts: state.posts}
}

export default connect(mapStateToProps, {FetchPosts})(PostList);