import React from 'react';

const TitleSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-4xl font-bold mb-8">FLS Unit 2</h1>
        
        <div className="space-y-4 text-xl">
          <p className="font-medium">Jonathan A. Rocha</p>
          <p>DS 6371 - Statistical Foundations for Data Science</p>
          <p>Dr. Bivin Sadler & Dr. Monnie McGee</p>
          <p>January 16, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;