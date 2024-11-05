import GeneralInfo from './components/GeneralInfo';
import ProjectHeading from './components/ProjectHeading';
import CvPreview from './components/CvPreview';
import { useState } from 'react';

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    jobtitle: '',
    email: '',
    phone: '',
  });

  const handleGeneralInfoChange = ({ target: { name, value } }) => {
    setGeneralInfo({
      ...generalInfo,
      [name]: value,
    });
  };
  console.log(generalInfo);

  return (
    <div className="bg-gray-300 h-dvh px-16 py-8">
      <div className="grid grid-cols-12 h-full">
        <aside className="col-span-12 lg:col-span-5 w-5/6 bg-blue-300 shadow-md px-16 py-8">
          <ProjectHeading text={'CV Generator'} />
          <GeneralInfo generalInfo={generalInfo} onChange={handleGeneralInfoChange} />
        </aside>
        <main className="flex items-center justify-center col-span-12 lg:col-span-7 h-full">
          <CvPreview generalInfo={generalInfo} />
        </main>
      </div>
    </div>
  );
}
