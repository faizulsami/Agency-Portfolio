import React from 'react';

const Projects = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3'>
                <div className='border rounded-xl '>
                    <div className='p-5'>
                        <img className='rounded-2xl border ' src="https://graphicsfamily.com/wp-content/uploads/edd/2021/12/Free-Business-Card-Design-Gold-And-Black-Colors-1180x885.jpg" alt="" />
                    </div>
                    <div className='p-3'>
                        <p className='py-2'>location, location</p>
                        <h3 className='text-2xl font-bold'>
                            Card image is
                        </h3>
                        <div className='flex gap-x-32 mt-5'>
                            <p className='border px-2 py-1 rounded-md font-bold'>web dev</p>
                            <p className='border px-2 py-1 rounded-md font-bold'>web dev</p>
                        </div>
                    </div>
                </div>

                <div className='border rounded-xl '>
                    <div className='p-5'>
                        <img className='rounded-2xl border ' src="https://graphicsfamily.com/wp-content/uploads/edd/2021/12/Free-Business-Card-Design-Gold-And-Black-Colors-1180x885.jpg" alt="" />
                    </div>
                    <div className='p-3'>
                        <p className='py-2'>location, location</p>
                        <h3 className='text-2xl font-bold'>
                            Card image is
                        </h3>
                        <div className='flex gap-x-32 mt-5'>
                            <p className='border px-2 py-1 rounded-md font-bold'>web dev</p>
                            <p className='border px-2 py-1 rounded-md font-bold'>web dev</p>
                        </div>

                    </div>
                </div>  <div className='border rounded-xl '>
                    <div className='p-5'>
                        <img className='rounded-2xl border ' src="https://graphicsfamily.com/wp-content/uploads/edd/2021/12/Free-Business-Card-Design-Gold-And-Black-Colors-1180x885.jpg" alt="" />
                    </div>
                    <div className='p-3'>
                        <p className='py-2'>location, location</p>
                        <h3 className='text-2xl font-bold'>
                            Card image is
                        </h3>
                        <div className='flex gap-x-32 mt-5'>
                            <p className='border px-2 py-1 rounded-md font-bold'>web dev</p>
                            <p className='border px-2 py-1 rounded-md font-bold'>web dev</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;