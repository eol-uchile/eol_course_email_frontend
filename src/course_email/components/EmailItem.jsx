import React from 'react';

export const EmailItem = ( email ) => {
    return (
        <div>
            ({ email.date })[{ email.sender }] { email.subject }: { email.message } 
        </div>
    )
}
