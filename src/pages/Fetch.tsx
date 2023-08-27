import axios from "axios";
import {useEffect, useState} from "react";

export const Cats = () => {
    const [cat, setCat] = useState("");
    
    const getCat = async () => {
        const info = await axios.get("https://api.thecatapi.com/v1/images/search").then((res)=>{
        console.log(res.data[0].url);    
        setCat(res.data[0].url);
        });
    }
    // useEffect (() => {
    //     getCat();
    // }, []);

    return (<div>
        <h1>My Cat Bites Me A Lot, But I Still Love Her!❤️</h1>
        <button onClick={getCat}>Generate</button>
        <img src={cat} width='50%' height='40%'/>
    </div>)
}