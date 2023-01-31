import React from 'react'
import Footer from '../components/Footer'
import '../components/Footer/styles/footer.css';
import Box from '@mui/material/Box';


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Link href=""><img src="additio.png" height="50rem"/>  Additio</Footer.Link>
                <Box component={"img"} src="pokeball.png" height="5rem" marginLeft="7rem" />
                <Footer.Link href=""><img src="user.png" height="50rem"/>  Contact Us</Footer.Link>
            </Footer.Row>
            <Footer.Title href="#">__________________________________________________________________________________________________________</Footer.Title>
            </Footer.Wrapper>
            <div className='footerdiv'>
                <h1>-- Copyrights to PokeAdditio --</h1>
            </div>
        </Footer>
    )
}