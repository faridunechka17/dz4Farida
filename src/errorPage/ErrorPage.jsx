import React from 'react';

const ErrorPage = ({user}) => {
    return (
        <div>
            Тебе сюда нельзя {user.name} {user.lastname}
        </div>
    );
};

export default ErrorPage;