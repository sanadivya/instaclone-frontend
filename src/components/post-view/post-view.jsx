import { useState, useEffect } from "react";
import Card from "../../card";
import Header from "../header/header";
import "../../card.css";

const PostView = () => {
    const [posts, setPosts] = useState([]);
    const [newposts, setNewposts] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3004/user").then((res) => {
            return res.json();
        }).then((data) => {
            setPosts(data);
            //console.log(data);
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        })
    }, [])

    const fetchAllPosts = async () => {
        const response = await fetch('http://localhost:8081/all');
        setNewposts(await response.json());
      
        //console.log(response);
        /**    fetch("http://localhost:8081/all").then((res) => {
              return res.json();
          }).then((data) => {
              setNewposts(data.result);
              console.log(data.result);
          }).catch((err) => {
              if (err) {
                  console.log(err);
              }
          })*/
        // axios.get('http://localhost:8081/all').then((res)=>{
        //   setNewposts(res.data.result);
        //   console.log(res.data.result);
        // }).catch(err => console.log(err))
    }
    useEffect(() => {
        fetchAllPosts();
    }, [])
    if (newposts === null) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Header />
            <div className="post-container">
                <div>
                    {
                        newposts.result.map((newpost, index) => {
                            return (
                                <>
                                <div >
                                    <section className="card" >
                                        <section className="card-info">
                                            <div>
                                                <div className="info-name">{newpost?.author}</div>
                                                <div className="info-location">{newpost?.location}</div>
                                            </div>
                                            <span>
                                                <img src={require("../../images/more.png")} alt='show more' width='18px' />
                                            </span>
                                        </section>

                                        <section className="card-image">
                                            <img src={`http://localhost:8081/images/${newpost?.image_file}`} alt='memory'  />
                                        </section>

                                        <section className="card-actions">
                                            <span><img src={require("../../images/heart.png")} alt='like button' /></span>
                                            <span> <img src={require("../../images/share.png")} alt='share button' /></span>
                                            <span className="date">{newpost?.createdAt}</span>
                                        </section>

                                        <section className="likes">30 likes</section>

                                        <section className="description">{newpost?.description}</section>

                                    </section>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    {posts.map((post, i) => {
                        return (
                            <Card post={post} key={i} />
                        )
                    })}
                </div>

            </div>

        </>
    )
}
export default PostView;