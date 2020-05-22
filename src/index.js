import React from 'react';
import JokeGenerator from "./jokeGenerator";
import {render} from 'react-dom';


render(
    <React.StrictMode>
        <JokeGenerator />
    </React.StrictMode>,

    document.getElementById('root')
);