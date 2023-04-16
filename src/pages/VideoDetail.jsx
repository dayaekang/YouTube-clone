import React from 'react';
import {useLocation} from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {

    const {state: { video }} = useLocation();
    const {title, description, channelId, channelTitle} = video.snippet;
    
   return (
        <section className='flex felx-col lg:flex-row'>
            <article className='basis-4/6'>
                <iframe
                    id="player"
                    type="text/html"
                    title={title}
                    width="100%"
                    height="640"
                    src={`http://www.youtube.com/embed/${video.id}`}
                    frameBorder="0"
                />
                <div className='p-8'>
                    <h1 className='text-x1 font-bold'>{title}</h1>
                    <ChannelInfo id={channelId} name={channelTitle}/>
                    <pre className='whitespace-pre-wrap'>{description}</pre>
                 </div>
            </article>

            <section className='basis-2/6'>
                <RelatedVideos id={video.id}/>
            </section>
        </section>
    );
}

