import React from 'react';

export default function ShowCase() {
  return (
    <div id="features" className="min-h-screen py-20 bg-white relative z-10 flex items-center justify-center">
      <div className="showcase grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-5/6 mx-auto">
        {/* Artificial Intelligence Card */}
        <div className="rounded shadow group relative hover:cursor-pointer w-full border border-zinc-400 h-48 sm:col-span-2 flex items-center justify-center">
          <h2 className="text-3xl font-semibold px-3">Artificial Intelligence</h2>
          <p className="text-xl p-3 absolute opacity-0 bg-yellow-200 group-hover:opacity-100 transition-opacity z-10 h-full w-full top-0 flex items-center justify-center text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut iusto explicabo, voluptates ab eum hic dolore iure, itaque exercitationem harum ducimus! Laudantium eius, natus mollitia beatae doloremque asperiores iure?
          </p>
        </div>

        {/* Quick Response Card */}
        <div className="rounded shadow group relative hover:cursor-pointer w-full border border-zinc-400 h-48 flex items-center justify-center">
          <h2 className="text-3xl font-semibold px-3">Quick Response</h2>
          <p className="text-xl p-3 absolute opacity-0 bg-yellow-200 group-hover:opacity-100 transition-opacity z-10 h-full w-full top-0 flex items-center justify-center text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut iusto explicabo, voluptates ab eum hic dolore iure, itaque exercitationem harum ducimus! Laudantium eius, natus mollitia beatae doloremque asperiores iure?
          </p>
        </div>

        {/* Ability Card */}
        <div className="rounded shadow group relative hover:cursor-pointer w-full border border-zinc-400 h-48 flex items-center justify-center">
          <h2 className="text-3xl font-semibold px-3">Ability</h2>
          <p className="text-xl p-3 absolute opacity-0 bg-yellow-200 group-hover:opacity-100 transition-opacity z-10 h-full w-full top-0 flex items-center justify-center text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut iusto explicabo, voluptates ab eum hic dolore iure, itaque exercitationem harum ducimus! Laudantium eius, natus mollitia beatae doloremque asperiores iure?
          </p>
        </div>

        {/* Why We Card */}
        <div className="rounded shadow group relative hover:cursor-pointer w-full border border-zinc-400 h-48 sm:col-span-2 flex items-center justify-center">
          <h2 className="text-3xl font-semibold px-3">Why We</h2>
          <p className="text-xl p-3 absolute opacity-0 bg-yellow-200 group-hover:opacity-100 transition-opacity z-10 h-full w-full top-0 flex items-center justify-center text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut iusto explicabo, voluptates ab eum hic dolore iure, itaque exercitationem harum ducimus! Laudantium eius, natus mollitia beatae doloremque asperiores iure?
          </p>
        </div>
      </div>
    </div>
  );
}
