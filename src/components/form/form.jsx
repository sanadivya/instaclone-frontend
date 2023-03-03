import "./form.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Form = () => {

    const [author, setAuthor] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState('');
    const [serverResponse, setServerResponse] = useState(null);

    const uploadPost = () => {
        const formData = new FormData();

        formData.append('author', author);
        formData.append('location', location);
        formData.append('description', description);
        formData.append('image_file', imageFile);

        // formData.forEach((val,key)=>{
        //     console.log(val,key);
        // })

        fetch('http://localhost:8081/api', {
            method: 'POST',
            body: formData
            // headers:{
            //     'Content-Type':'application/json',
            //     'Accept':'application/json'
            // },
            // body:JSON.stringify({   })

        })

    }

    return (
        <>
            <section className="form">
                <section className="file">
                    <input type='file' onChange={(e) => { setImageFile(e.target.files[0]) }} />
                </section>

                <section className="row">
                    <section className="author">
                        <input type='text' placeholder="Author" size='30' value={author} onChange={(e) => { setAuthor(e.target.value) }} />
                    </section>
                    <section className="location">
                        <input type='text' placeholder="Location" size='30' value={location} onChange={(e) => { setLocation(e.target.value) }} />
                    </section>
                </section>

                <section className="description">
                    <input type='text' placeholder="Description" size='75' value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </section>

                <Link to='/post-view'>
                    <button onClick={uploadPost}>Post</button>
                </Link>
            </section>
        </>
    )
}
export default Form;