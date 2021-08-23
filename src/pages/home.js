import React from 'react'
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { OptForm } from '../components';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                </Feature>
                <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>GET STARTED</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>
                        Ready to watch? Enter your email to create or restart your 
                        membership.
                    </OptForm.Text>
                </OptForm>
            </HeaderContainer>    
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />  
            
        </>
    )
}


