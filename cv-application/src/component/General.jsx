function General({ setDataGeneral,setState, data }) {
    function handleData(field, e) {
        setDataGeneral(setState,field, e.target.value);
        console.log(e.target.value);
    }
    return (
        <div className='flex flex-col m'>
            <h2 className='font-semibold mb-2'>General Info</h2>
            <input
                type='text'
                className='border border-solid mb-2 p-2 '
                placeholder='Name'
                name='name'
                onChange={(e) => {
                    handleData('name', e);
                }}
                value={data.name}
            />
            <input
                type='email'
                className='border border-solid mb-2 p-2'
                placeholder='Email'
                onChange={(e) => {
                    handleData('email', e);
                }}
                value={data.email}
            />
            <input
                className='border border-solid p-2 '
                placeholder='Phone Number'
                onChange={(e) => {
                    handleData('phone', e);
                }}
                value={data.phone}
            />
        </div>
    );
}

export { General };
