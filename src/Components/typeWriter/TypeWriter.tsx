"use client"
import React from 'react';
import Typewriter from 'typewriter-effect';

const CustomTypeWriter = () => {
    return (
        <Typewriter
              options={{
              strings: ['MERN stack developer'],
              autoStart: true,
              loop: false,
              deleteSpeed:100000000,
              delay:50,

              }}
            />
    );
};

export default CustomTypeWriter;