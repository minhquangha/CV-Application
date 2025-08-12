import './App.css';
import { General } from './component/General';
import { Education } from './component/Education';
import { Experience } from './component/Experience';
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

function App() {
    const cvRef = useRef();
    const [dataGeneral, setDataGeneral] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [dataEdu, setDataEdu] = useState({
        school: '',
        title: '',
        date: ''
    });
    const [dataExp, setDataExp] = useState({
        company: '',
        position: '',
        response: '',
        toDate: ''
    });
    function updateField(setState, field, value) {
        setState((pre) => ({
            ...pre,
            [field]: value
        }));
    }
    function handleReset() {
        setDataGeneral({
            name: '',
            email: '',
            phone: ''
        });
        setDataEdu({
            school: '',
            title: '',
            date: ''
        });
        setDataExp({
            company: '',
            position: '',
            response: '',
            toDate: ''
        });
    }
    //handle print
    const handlePrint = useReactToPrint({
        content: cvRef,
        documentTitle: 'CV Resume'
    });
    return (
        <div className='min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-100 dark:bg-zinc-800 transition-colors duration-500' >
            {/* input  CV*/}
            <div className='input bg-white rounded-lg p-6 space-y-6 shadow-lg'>
                <h1 className='font-bold text-2xl'>CV Builder</h1>
                <General setDataGeneral={updateField} setState={setDataGeneral} data={dataGeneral} />
                <Education setDataEducation={updateField} setState={setDataEdu} data={dataEdu} />
                <Experience setDataExperience={updateField} setState={setDataExp} data={dataExp} />
                <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"' onClick={handlePrint}>
                    {' '}
                    🖨️ Print CV / save as PDF
                </button>
                <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4 ml-0.5 "' onClick={handleReset}>
                    Reset
                </button>
            </div>
            {/* output CV */}
            <div  className='bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-md font-sans text-gray-900 dark:text-gray-100 max-w-3xl mx-auto transition-colors duration-500  flex flex-col flex-auto justify-between' ref={cvRef}>
                <div className='mb-2 justify-center'>
                    <h2 className='font-semibold mb-2 p-1.5'>General</h2>
                    <div>
                        <b>Name:</b> {dataGeneral.name}
                    </div>
                    <div>
                        <b>Email: </b>
                        {dataGeneral.email}
                    </div>
                    <div>
                        <b>Phone: </b>
                        {dataGeneral.phone}
                    </div>
                    <hr />
                </div>

                <div className='mb-2 justify-center'>
                    <h2 className='font-semibold mb-2 p-1.5'>Education</h2>
                    <div>
                        <b>School: </b>
                        {dataEdu.school}
                    </div>
                    <div>
                        <b>Date: </b>
                        {dataEdu.date}
                    </div>
                    <div>
                        <b>Title</b>
                        {dataEdu.title}
                    </div>
                    <hr />
                </div>

                <div className='mb-2 justify-center'>
                    <h2 className='font-semibold mb-2 p-1.5'>Experience</h2>
                    <div>
                        <b>Company: </b>
                        {dataExp.company}
                    </div>
                    <div>
                        <b>To Date: </b>
                        {dataExp.toDate}
                    </div>
                    <div>
                        <b>Position</b>
                        {dataExp.position}
                    </div>
                    <div>
                        <b>Responesibilities: </b>
                        {dataExp.response}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
