import { useEffect } from 'react';

// Custom hook for initializing Jarallax
export const useJarallax = () => {
    useEffect(() => {
        // Ensure jarallax is only initialized on the client-side
        if (typeof window !== 'undefined') {
            import('jarallax').then((jarallaxModule) => {
                const jarallax = jarallaxModule.jarallax;
                jarallax(document.querySelectorAll('.jarallax'), {
                    speed: 0.4,
                });
            }).catch(error => {
                console.error("Error loading jarallax:", error);
            });
        }
    }, []);
};