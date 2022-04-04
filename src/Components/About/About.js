import React from 'react';
import photo2 from '../../images/2.png'
const About = () => {
    return (
        <div className=''>
            <img src={photo2} alt="" />
            <div className='text-[20px] bg-blue-100 py-3 h-80'>
                <p>We Are Bookish is the editorial blog for NetGalley members, presenting an independent voice to highlight books and a bookish lifestyle. Welcome!</p>

                <p> Recurring features include: book recommendations, author interviews & guest posts from publishing professionals, cover and stepback reveals, gift guides, book club resources, NetGalley member spotlights, and more.</p>

                <p>Genres covered include: Fiction, Mystery/Thriller, Romance, Science Fiction, Fantasy, and Young Adult.</p>

                <p>If you have any questions or need to report a problem: support@bookish.com.</p>
            </div>
        </div >
    );
};

export default About;