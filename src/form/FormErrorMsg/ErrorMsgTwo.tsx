import React from 'react';

const ErrorMsgTwo = ({ error }: any) => {
    return (
        <>
            <p style={{ color: 'red', fontSize: "12px", }}>{error}</p>
        </>
    );
};

export default ErrorMsgTwo;