import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

export const useVanillaTilt = () => {
    useEffect(() => {
        const tilt = document.querySelectorAll<any>(".tilt");
        tilt.forEach(element => {
            VanillaTilt.init(element, {
                reverse: true,
                max: 3,
                speed: 400,
                // glare: true,
                reset: true,
                perspective: 500,
                transition: true,
                "max-glare": 0.75,
                "glare-prerender": false,
                gyroscope: true,
                gyroscopeMinAngleX: -45,
                gyroscopeMaxAngleX: 45,
                gyroscopeMinAngleY: -45,
                gyroscopeMaxAngleY: 45
            });
        });

        return () => {
            // Clean up VanillaTilt when component unmounts
            tilt.forEach(element => {
                if (element.vanillaTilt) {
                    element.vanillaTilt.destroy();
                }
            });
        };
    }, []);
};

