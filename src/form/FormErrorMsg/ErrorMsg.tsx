import React from 'react';

const ErrorMsg = ({ error }: any) => {
    return (
        <>
            <p style={{ color: 'red', fontSize: "12px", position: 'absolute' }}>{error}</p>
        </>
    );
};

export default ErrorMsg;