import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import image from '../Assets/image/banner/Creative-Hayao-Miyazaki-Quote-Poster- (2).jpg'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} style={{ width: '600px', height: '400px' }} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Md. Ashifuzzaman Akib</h1>
                        <p className="py-6 text-xl">" I'm a person who loves to think and doing some creative work. As an IT student, I actually have a terrific passion for technology. We all imagine a superb future in which we have everything we want and I even have devoted myself to this tremendous adventure. I even have always labored with new things to maintain myself updated. Showing my qualities and skills with my work, that's what I most like".</p>

                        <a className="btn btn-outline m-2" href='https://github.com/'><GoMarkGithub></GoMarkGithub></a>
                        

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;