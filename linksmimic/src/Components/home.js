import React from 'react';
import { FaEdit } from 'react-icons/fa';

const pageStyles = {
    display: {
        width: '200px',
        height: '50px',
        borderWidth: 'thin',
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: '20px',
        alignItems: 'center',
        marginBottom: '10px',
    },
    center:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    block:{
        width: '50%',
        display: 'block',
        margin: '0 auto',
        paddingTop: '100px',
    },
    edit:{
        marginLeft: '25em',
    }
}

const CircularImage = () => {

    const PinkFlower = require('../Images/PinkFlower.jpeg')

    return (
        <div>
            <img
                src={PinkFlower}  
                style={{width: 250, height:250, borderRadius:250/2}}
                alt="Pink Flower"
            />
        </div>
    )
}

const LinkTag = (prop) => {
    function MouseOver(event){
        event.target.style.cursor = 'pointer';
    }
    return (
        <div style={pageStyles.center}>
            <div style={pageStyles.display} onMouseOver={MouseOver}>
            <p>Link {prop.number}</p>
            </div>

        </div>
    )
}

const Close = ()=> {

    return (
        <div style={pageStyles.block}>
            <p>Want a custom designed link page? Bring your ideas and
contact us for a one-time payment link page through us,
designed to fit your needs.</p>
        </div>
    )
}

const ContactUs = () => {

    function MouseOver(event){
        event.target.style.cursor = 'pointer';
    }

    return (
        <div style={pageStyles.center} onMouseOver={MouseOver}>
            <div style={pageStyles.display}>
            <p>Contact Us</p>
            </div>

        </div>
    )
}

const CustomizeButton = () => {

    function MouseOver(event){
        event.target.style.cursor = 'pointer';
        event.target.style.size = '50px';
    }

    return (
        <div>
            <FaEdit style={pageStyles.edit} size={25} onMouseOver={MouseOver} />
        </div>
    )
}

export default function Home() {
    return (
        <div>
            <h1>HOME</h1>
            <CustomizeButton />
            <CircularImage />
            <h3>@username</h3>
            <p>Odio aenean sed adipiscing diam donec
adipiscing. <br/>Phasellus vestibulum lorem sed risus.</p>
            <LinkTag number="One" />
            <LinkTag number="Two" />
            <LinkTag number="Three" />

            <Close />
            <ContactUs />
        </div>
    )
} 