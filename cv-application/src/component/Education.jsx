function Education() {
    return (
        <div className='flex flex-col'>
            <h2 className='font-semibold mb-2'>Education</h2>
            <input type='text' placeholder='School Name' className='border border-solid p-2 mb-2' />
            <input type='text' placeholder='Title of Study' className='border border-solid p-2 mb-2' />
            <input type='text' placeholder='Date of Study' className='border border-solid p-2 mb-2' />
        </div>
    );
}

export { Education };
