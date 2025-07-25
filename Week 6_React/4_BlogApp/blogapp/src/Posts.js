import React from 'react';


class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data
                });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch() {
        alert("Some error occurred");
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map((post) => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Posts;
