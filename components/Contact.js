import React from 'react';

function Contact() {
    return (
        <section id="contact" className="bg-purple-700 py-12 px-8">
            <div className="mx-auto">
                <h2 className="section-heading mx-auto text-gray-100 mb-0">Contact</h2>
                <div className="mt-8 bg-gray-100 px-6 py-8 rounded-md shadow-lg max-w-5xl mx-auto">
                    <div className="flex justify-around flex-wrap">
                        <div className="mr-8">
                            <h3 className="text-gray-900 font-bold text-3xl">Interested? Lets talk.</h3>
                            <h4 className="text-gray-700 text-xl">Don't like forms? You can email me instead.</h4>
                        </div>
                        <form className="flex flex-col justify-between">
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
                        </form>
                    </div>
                   
                </div>
                

            </div>
        </section>
    )
}

export default Contact;
