import React from 'react'
import { useState } from 'react';


const Tab = (tabs)=> {

    const [activeTabIndex, setactiveTabIndex] = useState(0);

    function handleActiveTab(index){
        setactiveTabIndex(index);

    }


    return (
        <div>
            <ul>
                {props.tabs.map((tab,index)=>{
                    return <li key={index} onClick={()=>{handleActiveTab(index)}}>{tab.title}</li>
                })}
            </ul>
            <div>{props.tabs[activeTabIndex].content}</div>
        </div>
    )
}

export default Tab;