import "./card.css"
const Card=({post})=>{
    return(
        <>
        <section className="card">
            <section className="card-info">
                <div>
                    <div className="info-name">{post?.name}</div>
                    <div className="info-location">{post?.location}</div>
                </div>
                <span>
                    <img src={require("./images/more.png")} alt='show more' width='18px'/>
                </span>
            </section>

            <section className="card-image">
                <img src={require(""+post.PostImage)}/>
            </section>

            <section className="card-actions">
                <span><img src={require("./images/heart.png")}/></span>
                <span> <img src={require("./images/share.png")}/></span>
                <span className="date">{post?.date}</span>
            </section>

            <section className="likes">{post?.likes} likes</section>
            
            <section className="description">{post?.description}</section>

        </section>
        </>
    )
}
export default Card;