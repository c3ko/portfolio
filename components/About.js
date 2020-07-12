import React from 'react';

function RecentPost({ postData }) {

    return (
        <></>
    )
}
function About({ posts }) {
    return (
        <section id="about" className="about-section bg-white py-20">
            <div className="mx-auto w-3/4">
                <h2 className="section-heading fix-margin text-purple-800 mb-0">About Me</h2>
                <div className="flex">
                    <p className="mt-8 text-xl font-medium text-gray-800"> 
                        I've always sought out meaningful and exciting oppurtunities, as a web developer
                        my hope when I start a project is to make an impact, whether it's working with small businesses looking
                        to establish an online presence or working as part of a team at a high-growth company.
                    </p>
                    <ul>
                        { posts.map(post => <RecentPost />) }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;
