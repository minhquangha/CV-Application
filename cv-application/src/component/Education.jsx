function Education({ setDataEducation, setState,data }) {
    function handleUpdate(field, e) {
        setDataEducation(setState, field, e.target.value);
    }
    return (
        <div className='flex flex-col'>
            <h2 className='font-semibold mb-2'>Education</h2>
            <input
                type='text'
                placeholder='School Name'
                className='border border-solid p-2 mb-2'
                onChange={(e) => {
                    handleUpdate('school', e);
                }}
                value={data.school}
            />
            <input type='text' placeholder='Title of Study' className='border border-solid p-2 mb-2' onChange={(e) => {
                    handleUpdate('title', e);
                } } value={data.title} />
            <input type='text' placeholder='Date of Study' className='border border-solid p-2 mb-2' onChange={(e) => {
                    handleUpdate('date', e);
                }} value={data.date} />
        </div>
    );
}

export { Education };
