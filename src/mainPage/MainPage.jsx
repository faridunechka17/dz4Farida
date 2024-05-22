import React from 'react';

const MainPage = ({user}) => {
    return (
        <div>
            Добро пожаловать {user.name} {user.lastname}
        </div>
    );
};

export default MainPage;