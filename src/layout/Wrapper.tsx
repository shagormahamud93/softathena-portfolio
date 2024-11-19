"use client"
import BacktoTop from '@/components/common/BackToTop/BackToTop';
import Preloader from '@/components/common/Preloader/Preloader';
import { animationCreate } from '@/utils/utils';
import React, { useEffect, useState } from 'react';


const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 4200);
  }, [])
  return (

    <>
     <BacktoTop />
      {isLoading ? <Preloader /> : children}
    </>
  );
};

export default Wrapper;