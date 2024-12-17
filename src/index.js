import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';







import pic1 from './assets/images/dog1.jpg';
import pic2 from './assets/images/dog2.jpg';
import pic3 from './assets/images/dog3.jpg';
import pic4 from './assets/images/dog4.webp';

import pic5 from './assets/images/dog5.jpg';
import pic6 from './assets/images/dog6.jpg';
import pic7 from './assets/images/dog7.jpg';
import pic8 from './assets/images/dog8.jpg';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Dogimg() {
    return (
        <div>
            <div style={{ backgroundColor: "grey", width: "100%", height: "550px", marginTop: "60px" }}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div id="color" style={{ backgroundColor: "white", width: "fit-content", height: "fit-content", padding: "10px", margin: "10px", textAlign: "center", cursor: "pointer", animationName: "zoom" ,border:" white 1px solid"}}><img src={pic1} alt="img" style={{ width: "250px", height: "170px" }} /><p>American Pit Bull</p></div>
                    <div id="color" style={{ backgroundColor: "white", width: "fit-content", height: "fit-content", padding: "10px", margin: "10px", textAlign: "center", cursor: "pointer", animationName: "zoom" ,border:" white 1px solid" }}><img src={pic2} alt="img" style={{ width: "250px ", height: "170px" }} /><p>American Bully</p></div>
                    <div id="color" style={{ backgroundColor: "white", width: "fit-content", height: "fit-content", padding: "10px", margin: "10px", textAlign: "center", cursor: "pointer", animationName: "zoom" ,border:" white 1px solid" }}><img src={pic3} alt="img" style={{ width: "250px", height: "170px" }} /><p>Pit Bull Terrier</p></div>
                    <div id="color" style={{ backgroundColor: "white", width: "fit-content", height: "fit-content", padding: "10px", margin: "10px", textAlign: "center", cursor: "pointer", animationName: "zoom" ,border:" white 1px solid"}}><img src={pic4} alt="img" style={{ width: "250px", height: "170px" }} /><p>American Staffordshire Terrier
                    </p></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div id="color" style={{ backgroundColor: "white", width: "fit-content", height: "fit-content", padding: "10px", margin: "10px", textAlign: "center", cursor: "pointer", animationName: "zoom" ,border:" white 1px solid" }}><img src={pic5} alt="img" style={{ width: "250px", height: "170px" }} /><p>Staffordshire Bull Terrier</p></div>
                    <div id="color" style={{ backgroundColor: "white", width: "fit-content", height: "fit-content", padding: "10px", margin: "10px", textAlign: "center", cursor: "pointer", animationName: "zoom" ,border:" white 1px solid" }}><img src={pic6} alt="img" style={{ width: "250px ", height: "170px" }} /><p>Rottweiler</p></div>
                    <div id="color" style={{ backgroundColor: "white", width: "fit-content", height: "fit-content", padding: "10px", margin: "10px", textAlign: "center", cursor: "pointer", animationName: "zoom" ,border:" white 1px solid"}}><img src={pic7} alt="img" style={{ width: "250px", height: "170px" }} /><p>Great Dane</p></div>
                    <div id="color" style={{ backgroundColor: "white", width: "fit-content", height: "fit-content", padding: "10px", margin: "10px", textAlign: "center", cursor: "pointer", animationName: "zoom" ,border:" white 1px solid" }}><img src={pic8} alt="img" style={{ width: "250px", height: "170px" }} /><p>American Great Dane</p></div>
                </div>
            </div>


        </div>
    )
}








root.render(
    <Dogimg></Dogimg>
);






