import './App.css';
import { General } from './component/General';
import { Education } from './component/Education';
import { Experience } from './component/Experience';

function App() {
    return (
        <div className='min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-100 dark:bg-zinc-800 transition-colors duration-500'>
            {/* input  CV*/}
            <div className='input bg-white rounded-lg p-6 space-y-6 shadow-lg'>
                <h1 className='font-bold text-2xl'>CV Builder</h1>
                <General />
                <Education />
                <Experience />
                <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"'> 🖨️ Print CV / save as PDF</button>
            </div>
            {/* output CV */}
            <div className='bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-md font-sans text-gray-900 dark:text-gray-100 max-w-3xl mx-auto transition-colors duration-500'>
                <h1>Output</h1>
            </div>
        </div>
    );
}

export default App;
