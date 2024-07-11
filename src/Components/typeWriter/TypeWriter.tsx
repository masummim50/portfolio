"use client"
import React from 'react';
import Typewriter from 'typewriter-effect';

const CustomTypeWriter = () => {
    return (
        <Typewriter
              options={{
              strings: ['Web Developer', 'Web Designer', 'React Developer'],
              autoStart: true,
              loop: true,
              deleteSpeed:25,
              delay:50
              }}
            />
    );
};

export default CustomTypeWriter;