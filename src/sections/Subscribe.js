import React, {useState} from 'react';
import Button from '../components/Button';
//import SibApiV3Sdk from '@getbrevo/brevo';

const Subscribe = ()=>{

    const [email, setEmail] = useState('');

    /*const brevo_api_key = process.env.BREVO_API_KEY;

    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    let apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = brevo_api_key;

    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); 

    sendSmtpEmail.subject = "My {{params.subject}}";
    sendSmtpEmail.htmlContent = "<html><body><h1>This is my first transactional email</h1><a href={{params.parameter}}>Verficar Email</a></body></html>";
    sendSmtpEmail.sender = {"name":"Coding Is Giving","email":"juanpibazan3693@gmail.com"};
    sendSmtpEmail.to = [{"email":email,"name":`${firstName} ${lastName}`}];
    //sendSmtpEmail.replyTo = {"email":"replyto@domain.com","name":"John Doe"};
    //sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
    sendSmtpEmail.params = {"parameter":`http://localhost:3000/emailConfirmation/${email}`,"subject":"Confirmation Email"};
    */

    return (
        <section id='subscribe'
        className='flex flex-col justify-center items-center min-h-screen gap-10'
        >
            <h1 className='text-4xl font-bold'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</h1>
            <div className='flex sm:justify-between w-full items-center max-sm:flex-col gap-5 p-2.5 rounded-xl border-2 border-slate-gray'>
                <input 
                type='email'
                placeholder='subscribe@nike.com'
                value={email}
                className='flex max-sm:justify-end items-center w-full'
                />
                <div className='flex justify-center items-center max-sm:w-full p-2.5'>
                    <Button 
                    label='Sign Up'
                    fullWidth
                    />
                </div>
            </div>

        </section>
    )
};

export default Subscribe;