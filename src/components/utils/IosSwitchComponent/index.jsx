import React, {useState} from "react";

import './style.scss';

export default function IosSwitchComponent(props) {

    const {setOpacityCards} = props;

    // для анимации свича
    const [isToggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!isToggle);
        setOpacityCards(!isToggle);
    }

    return (
        <div className={`toggle ${isToggle && 'toggle-active'}`} onClick={() => handleClick()}>
            <span/>
        </div>
    )
}