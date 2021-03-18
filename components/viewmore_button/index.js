import React from 'react';

const Button = ({data, max}) => {
    return (
        <>
            <div className={`ViewMore mx-auto ${data && 'd-none' }`} >
                {data ? <img src="/assets/spinner.svg" width="10px" height="10px"/> : "View More" }
            </div>
        </>
    );
};

export default Button;