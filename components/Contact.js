import React, { useState } from 'react';

function ContactImage(){
    return (
        <>
            <svg>
                
            </svg>
        </>

    )
}

function Contact() {

    const [ messageSent, setMessageSent ] = useState(false)

    function handleSendMessage(e){
        e.preventDefault()
        setMessageSent(true)
    }

    
    return (
        <section id="contact" className="bg-purple-700 py-12 px-8">
            <div className="mx-auto">
                <h2 className="section-heading mx-auto text-gray-100 mb-0">Contact</h2>
                <div className="mt-8 bg-gray-100 px-6 py-8 rounded-md shadow-lg max-w-5xl mx-auto">
                    <div className="flex justify-around flex-wrap">
                        <div className="mr-8">
                            <h3 className="text-gray-900 font-bold text-3xl">Interested? Lets talk.</h3>
                            <h4 className="text-gray-700 text-xl">Don't like forms? You can email me instead.</h4>
                            <img src="/img/contact_600.jpg" width="500px" height="500px"/>
                        </div>
                        <form onSubmit={handleSendMessage} className="flex flex-col justify-between">
                            <div className="mt-3">
                                <label className="uppercase text-sm text-gray-600 font-bold">NAME</label>
                                <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text"/>
                            </div>
                            <div className="mt-3">
                                <label className="uppercase text-sm text-gray-600 font-bold">EMAIL</label>
                                <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text"/>
                            </div>
                            <div className="mt-3">
                                <label className="uppercase text-sm text-gray-600 font-bold">MESSAGE</label>
                                <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text"/>
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
