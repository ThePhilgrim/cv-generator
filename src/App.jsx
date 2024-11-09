import GeneralInfo from './components/GeneralInfo';
import ProjectHeading from './components/ProjectHeading';
import PersonalProfile from './components/PersonalProfile';
import WorkExperienceItem from './components/WorkExperienceItem';
import CvPreview from './components/CvPreview';
import { useState } from 'react';
import FormHeading from './components/FormHeading';

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

  const [personalProfile, setPersonalProfile] = useState('');

  const handlePersonalProfileChange = (e) => {
    setPersonalProfile(e.target.value);
  };

  const [workExperienceItems, setWorkExperienceItems] = useState([
    {
      id: crypto.randomUUID(),
      info: {
        role: 'Senior Backend Developer',
        company: 'Garmin',
        startDate: new Date(),
        endDate: new Date(),
      },
    },
    {
      id: crypto.randomUUID(),
      info: {
        role: 'Junior Backend Developer',
        company: 'Respectable Tech Company',
        startDate: new Date(),
        endDate: new Date(),
      },
    },
  ]);

  const [workIsOpenIndex, setWorkIsOpenIndex] = useState(0);

  return (
    <div className="bg-gray-300 h-dvh px-16 py-8">
      <div className="grid grid-cols-12 h-full">
        <aside className="col-span-12 lg:col-span-5 w-5/6 bg-blue-300 shadow-md px-16 py-8">
          <ProjectHeading text={'CV Generator'} />
          <GeneralInfo generalInfo={generalInfo} onChange={handleGeneralInfoChange} />
          <PersonalProfile text={personalProfile} onChange={handlePersonalProfileChange} />
          <div className="mb-8">
            <FormHeading text={'Work Experience'} />
            {workExperienceItems.map((item, index) => (
              <WorkExperienceItem
                key={item.id}
                id={item.id}
                info={item.info}
                itemNo={index + 1}
                isOpen={index === workIsOpenIndex ? true : false}
              />
            ))}
          </div>
        </aside>
        <main className="flex items-center justify-center col-span-12 lg:col-span-7 h-full">
          <CvPreview generalInfo={generalInfo} personalProfile={personalProfile} workExperience={workExperienceItems} />
        </main>
      </div>
    </div>
  );
}
