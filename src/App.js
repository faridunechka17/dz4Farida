import React, {useEffect, useState} from 'react';
import MainPage from "./mainPage/MainPage";
import ErrorPage from "./errorPage/ErrorPage";

const App = () => {
    const [title, seTitle] = useState({name: '', lastname: ''})
    useEffect(() => {
        const main = prompt('введите имя')
        const key = prompt('введите фаммлию')
        seTitle({name: main, lastname: key})
    }, []);

    if (title.name === 'John' && title.lastname === 'Johns'){
        return <MainPage user={title}/>
    }else {
        return <ErrorPage user={title}/>
    }
};

export default App;