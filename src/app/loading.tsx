import Spinner from '@/Components/spinner/Spinner';
import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center min-h-[90vh] ">
            <Spinner/>
        </div>
    );
};

export default LoadingPage;