import React from 'react';

const SectionTitle = ({left, right}) => {
    return (
        <div className="max-w-4xl mx-auto flex items-center justify-between text-md px-5 md:px-0">
          <h2 className="font-medium text-gray-600 uppercase ">{left}</h2>
          <h2 className="flex items-center justify-center grad-text uppercase">{right}</h2>
        </div>
    );
};

export default SectionTitle;