import React, { useState, useContext } from 'react';
import { UidContext } from "./UidContext";
import http from "../firebase/http";


const Create = () => {
    const [author , setAuthor] = useState("");
    const [ text , setText] = useState("");

    const uid = useContext(UidContext)

    const createQuote = async () => {
        let res = await http.post('/quotesDB.json', { uid:uid, author: author, text:text})
        console.log(res);
        console.log(res.data);
        setAuthor("");
        setText("");
    }

    return (
        <div className="create">
            <h4>Déposer une citation</h4>
            <div className="form">
                <input 
                    type="text"
                    placeholder="author"
                    value={author}
                    onChange ={(e) => setAuthor(e.target.value)}
                />
                <textarea className="citation"
                    placeholder="text"
                    value={text}
                    onChange={(e) => {setText(e.target.value)}}
                />
            </div>
            <button onClick={createQuote} >Create</button>
        </div>
    );
};

export default Create;