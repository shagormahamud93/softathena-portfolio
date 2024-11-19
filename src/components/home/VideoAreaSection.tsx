"use client"
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import VideoBgImg from '../../../public/assets/imgs/video/video-bg-02.png';
import { useJarallax } from '@/hooks/use-jarallax';

const VideoAreaSection = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)
    useJarallax()
    return (
        <>
            <div className="video__area style-three position-relative jarallax">
                <div className="video__bg-thumb include-bg jarallax-img" style={{ backgroundImage: `url(${VideoBgImg.src})` }}
                    >
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8 col-md-10">
                            <div className="video__content text-center">
                                <div className="video__play">
                                    <button onClick={() => { openVideoModal() }} className="play-btn popup-video"><i
                                        className="fa-sharp icon-play"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo isOpen={isOpen} videoId="vWLcyFtni6U" onClose={() => setIsOpen(false)} />
        </>
    );
};

export default VideoAreaSection;