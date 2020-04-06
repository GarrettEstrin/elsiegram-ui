import React from 'react';
import {useParams} from 'react-router-dom';

import Feed from './Feed.js';

export default function FeedContainer(props) {
    let {page} = useParams();
    return <Feed page={page} userRole={props.userRole}/>
}