import React, { useState } from 'react';
const CONTACT_LAMBDA_API_URL = "https://m9glytrdm8.execute-api.us-east-2.amazonaws.com/contact"

function Contact() {

    const [ messageSent, setMessageSent ] = useState(false)
    const [ contactName, changeContactName ] = useState('')
    const [ contactEmail, changeContactEmail ] = useState('')
    const [ contactMessage, changeContactMessage ] = useState('')

    async function postMessage(){
        const formData = new FormData()
        formData.append('name', contactName)
        formData.append('email', contactEmail)
        formData.append('message', contactMessage)

        const response = await fetch(CONTACT_LAMBDA_API_URL,{
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            body: formData
        });

        return response.json();
    }

    function handleSendMessage(e){
        e.preventDefault()
        postMessage().then(data => console.log(data))

        setMessageSent(true)
    }


    return (
        <section id="contact" className="py-12 px-8 mb-12">
            <div className="mx-auto">
                <h2 className="section-heading mx-auto text-purple-800 mb-0">Contact</h2>
                <div className="mt-8 bg-gray-100 px-6 py-8  max-w-5xl mx-auto">
                    <div className="flex justify-around flex-wrap">
                        <div className="text-center md:text-left mr-8">
                            <h3 className="text-gray-900 font-bold text-3xl">Interested? Lets talk.</h3>
                            <h4 className="text-gray-700 text-xl">Don't like forms? You can email me instead.</h4>
                            <img src="/img/contact_600.jpg" width="500px" height="500px"/>
                        </div>
                        <form onSubmit={handleSendMessage} className="flex flex-col justify-between">
                            <div className="mt-3">
                                <label className="uppercase text-sm text-gray-600 font-bold">NAME</label>
                                <input value={contactName} onChange={(e) => changeContactName(e.target.value)} className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-sm  shadow-lg focus:outline-none focus:shadow-outline" type="text"/>
                            </div>
                            <div className="mt-3">
                                <label className="uppercase text-sm text-gray-600 font-bold">EMAIL</label>
                                <input value={contactEmail} onChange={(e) => changeContactEmail(e.target.value)} className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-sm shadow-lg focus:outline-none focus:shadow-outline" type="text"/>
                            </div>
                            <div className="mt-3">
                                <label className="uppercase text-sm text-gray-600 font-bold">MESSAGE</label>
                                <textarea value={contactMessage} onChange={(e) => changeContactMessage(e.target.value)} className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-sm shadow-lg focus:outline-none focus:shadow-outline" type="text"/>
                            </div>
                            <button className="mt-3 uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                SEND MESSAGE
                            </button>
                            { messageSent ?
                                <span className="mt-3 text-center bg-green-200 px-4 py-2 rounded-md">Message Sent Succefully.</span>
                                :
                                <span className="mt-3 px-4 py-2">&nbsp;&nbsp;</span>
                            }

                        </form>
                    </div>
                   
                </div>
                

            </div>
        </section>
    )
}

export default Contact;
