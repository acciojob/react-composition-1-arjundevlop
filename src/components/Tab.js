import React from 'react'
import { useState } from 'react';


const Tab = ({tabs}) => {

    const [activeTabIndex, setactiveTabIndex] = useState(0);

    function handleActiveTab(index){
        setactiveTabIndex(index);

    }
    //console.log(tabs)


    return (
        <div>
            <ul>
                {tabs.map((tab,index)=>{
                    return <li key={index} onClick={()=>{handleActiveTab(index)}}>{tab.title}</li>
                })}
            </ul>
            <div>{tabs[activeTabIndex].content}</div>
        </div>
    )
}

export default Tab;