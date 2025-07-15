import React, { useState } from "react";
function Cells() {
    const [like1, setLike1] = useState(0)
    const [like2, setLike2] = useState(0)
    const [like3, setLike3] = useState(0)
    const [like4, setLike4] = useState(0)
    const [like5, setLike5] = useState(0)
    const [like6, setLike6] = useState(0)
    function play(cls, song) {
        const main = document.querySelector('.Cellcls')
        const Cx = document.querySelector(cls)
        const iframe = document.createElement('iframe');
        iframe.src = song;
        iframe.width = '400';
        iframe.height = '200';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        main.replaceChild(iframe, Cx)
    }
    return (
        <>
            <div className="Cellcls">
                <div className="cellx c1">
                    <img onClick={() => (play('.c1', 'https://www.youtube.com/embed/GWNrPJyRTcA'))} id="imgx" src="https://th.bing.com/th/id/OIP.7sCrm27-4updgXqLRXojCAHaD4?w=340&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
                    <footer>Chuttamlle Song from Devar Movie <br />
                        <button onClick={() => {
                            setLike1(like1 + 1)
                        }}>👍{like1}</button>
                    </footer>
                </div>
                <div className="cellx c2">
                    <img onClick={() => (play('.c2', 'https://www.youtube.com/embed/g44VQxMcFH4?si=AWWK28HnQ1TUfksQ'))} id="imgx" src="https://th.bing.com/th/id/OIP.GzhQnGePC6fQ_J10TepvRwHaEK?w=299&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
                    <footer>Fear Song from Devar Movie <br />
                        <button onClick={() => {
                            setLike2(like2 + 1)
                        }}>👍{like2}</button>
                    </footer>
                </div>
                <div className="cellx c3">
                    <img onClick={() => (play('.c3', 'https://www.youtube.com/embed/HZ_Q20ir-gg?si=Kg6SCUnh4dwqTSYp'))} id="imgx" src="https://th.bing.com/th/id/OIP.DF8jw1EzAjbVs6ZwU87ojQHaHa?w=182&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
                    <footer>AyudhaPooja Song from Devar Movie <br />
                        <button onClick={() => {
                            setLike3(like3 + 1)
                        }}>👍{like3}</button></footer>
                </div>
                <div className="cellx c4">
                    <img onClick={() => (play('.c4', 'https://www.youtube.com/embed/gh3FyLT7WVg?si=Wl7d6mxjIB0Y-rkB'))} id="imgx" src="https://www.bing.com/th/id/OIP.iW8JK_I3rCAHTmsBarPh4wHaEc?w=281&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
                    <footer>Kurchini Madatha Petti Song from GunturuKaaram Movie <br /><button onClick={() => {
                        setLike4(like4 + 1)
                    }}>👍{like4}</button></footer>
                </div>
                <div className="cellx c5">
                    <img onClick={() => (play('.c5', 'https://www.youtube.com/embed/m2kU2b9PYcs?si=FZg0N2Z20cxdY8qG'))} id="imgx" src="https://th.bing.com/th/id/OIP.jc_jCZkdcvyboxatq-CfiwHaEO?w=280&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
                    <footer>Sirivennela Song from ShyamSingaroy Movie <br />
                        <button onClick={() => {
                            setLike5(like5 + 1)
                        }}>👍{like5}</button></footer>
                </div>
                <div className="cellx c6">
                    <img onClick={() => (play('.c6', 'https://www.youtube.com/embed/mKaiW7uLHqw?si=7Guj01C5RgNVfw22'))} id="imgx" src="https://th.bing.com/th/id/OIP._hVyve3bzPHz-V0uUt66ngHaEK?w=283&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
                    <footer>Nuvvena naa Nuvvena Song from Anandh Movie <br />
                        <button onClick={() => {
                            setLike6(like6 + 1)
                        }}>👍{like6}</button></footer>
                </div>
            </div>
        </>
    )
}
export default Cells;