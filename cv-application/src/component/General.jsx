function General() {
    return (
        <div className="flex flex-col m">
            <h2 className='font-semibold mb-2'>General Info</h2>
            <input type='text' className='border border-solid mb-2 p-2 ' placeholder='Name' />
            <input type='email' className='border border-solid mb-2 p-2' placeholder='Email' />
            <input className='border border-solid p-2 ' placeholder='Phone Number' />
        </div>
    );
}

export { General };
