import React from 'react';
import CircleUtils from './CircleUtils';

export default function CircleFlow() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      <CircleUtils text="Start" class="bg-red-400" />
      <span className="hidden md:block w-16 h-1 bg-gray-900" />
      <CircleUtils text="Middle 1" class="bg-yellow-400" />
      <span className="hidden md:block w-16 h-1 bg-gray-900" />
      <CircleUtils text="Middle 2" class="bg-green-400" />
      <span className="hidden md:block w-16 h-1 bg-gray-900" />
      <CircleUtils text="End" class="bg-violet-400" />
    </div>
  );
}
