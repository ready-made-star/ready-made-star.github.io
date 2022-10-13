import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    // console.log(props);
    const { initialMinute = 0, initialSeconds = 0 } = props;
    const min = initialMinute > 9 ? initialMinute : '0' + initialMinute;
    const sec = initialSeconds > 9 ? initialSeconds : '0' + initialSeconds;

    const [appTimer, setAppTimer] = useState({ min: min, sec: sec });

    useEffect(() => {

        let _sec, _min;

        _sec = appTimer.sec;
        _min = appTimer.min;

        if (_sec > 0 || _min > 0) {

            let TimerId = setInterval(function () {
                if (_min === 0 && _sec === 0) {
                    clearInterval(TimerId);
                } else if (_sec <= 0) {
                    _min -= 1;
                    _sec = 59;
                } else {
                    _sec -= 1;
                }

                setAppTimer({ min: _min, sec: _sec });
            }, 1000);
            return () => {
                clearInterval(TimerId);
            };
        } else {

        }
    });
    let mins = appTimer.min === 0 ? "0" + appTimer.min : appTimer.min;
    let secs = appTimer.sec > 9 ? appTimer.sec : "0" + appTimer.sec;

    return (
        <label>{mins}:{secs}</label>
    )
}

export default Timer;