function Experience() {
    return (
        <div className='flex flex-col mb-2 '>
            <h2 className='mb-2 font-semibold'>Experience</h2>
            <input type='text' placeholder='Company Name' className='border border-solid p-2 mb-2' />
            <input type='text' placeholder='Position' className='border border-solid p-2 mb-2' />
            <input type='text' placeholder='Responsibilities' className='border border-solid p-2 mb-2' />
            <input type='text' placeholder='To Date' className='border border-solid p-2 mb-2' />
        </div>
    );
}
export { Experience };
