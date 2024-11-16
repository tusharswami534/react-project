import React, { useState } from 'react';
import CountUp from 'react-countup'; 
import ReactVisibilitySensor from 'react-visibility-sensor';
import CommonHeading from '../common/CommonHeading';

const CounterTest = () => {
    const [isVisible, setIsVisible] = useState(false); 
       const handleVisibilityChange = (isVisible) => {
        setIsVisible(isVisible); 
    };

    return (
        <div className='max-w-[1140px] w-full mx-auto'>
            <div>
                <CommonHeading Heading='Counter Test' />
                <div>
                    <ReactVisibilitySensor onChange={handleVisibilityChange}>
                        <div className='text-5xl text-black font-bold pb-6 text-center'>
                            <CountUp start={0} end={isVisible ? 100 : 0} delay={1} />
                        </div>
                    </ReactVisibilitySensor>
                </div>
            </div>
        </div>
    );
};

export default CounterTest;
