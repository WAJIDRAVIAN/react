import React from "react";
import { connect } from "react-redux";
import { FetchPosts } from "../actions";

class PostList extends React.Component{
    componentDidMount(){
        this.props.FetchPosts();
    }
    renderList(){
        console.log(this.props.posts)
        return this.props?.posts.map(post=>{
            return(
                    <div key={post.id}  className="item" >
                        <i className="large middle aligned icon user"/>
                        <div className="content">
                            <div className="description">
                                <h4>{post.title} </h4>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </div>
            );
        })
        
    };

    render(){
        return(
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    };
}

const mapStateToProps = (state) =>{
    return {posts: state.posts}
}

export default connect(mapStateToProps, {FetchPosts})(PostList);