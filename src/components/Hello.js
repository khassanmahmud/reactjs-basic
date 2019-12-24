import React from 'react';

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Mahmud</h1>
    //     </div>
    // );

    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Mahmud')
    );
}

export default Hello;