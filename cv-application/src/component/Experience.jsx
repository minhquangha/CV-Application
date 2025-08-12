function Experience({setDataExperience, setState,data}) {
    function sendData(field, e) {
        setDataExperience(setState, field, e.target.value);
    }
    return (
        <div className='flex flex-col mb-2 '>
            <h2 className='mb-2 font-semibold'>Experience</h2>
            <input
                type='text'
                placeholder='Company Name'
                className='border border-solid p-2 mb-2'
                onChange={(e) => {
                    sendData('company', e);
                }}
                value={data.company}
            />
            <input type='text' placeholder='Position' className='border border-solid p-2 mb-2' onChange={(e) => {
                    sendData('position', e);
                }} value={data.position} />
            <input type='text' placeholder='Responsibilities' className='border border-solid p-2 mb-2' onChange={(e) => {
                    sendData('response', e);
                }} value={data.response} />
            <input type='text' placeholder='To Date' className='border border-solid p-2 mb-2' onChange={(e) => {
                    sendData('toDate', e);
                }} value={data.toDate} />
        </div>
    );
}
export { Experience };
