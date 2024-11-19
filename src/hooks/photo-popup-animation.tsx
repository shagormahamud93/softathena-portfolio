import React from "react";
import { PhotoProvider } from "react-photo-view";

const PhotoPopupAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        {children}
      </PhotoProvider>
    </>
  );
};

export default PhotoPopupAnimation;
