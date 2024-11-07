import GeneralPreview from './GeneralPreview';
import PersonalProfilePreview from './PersonalProfilePreview';

export default function CvPreview({ generalInfo, personalProfile }) {
  console.log(personalProfile);
  return (
    <div className="bg-gray-50 shadow-md h-full w-full max-w-full mx-32">
      <div className="bg-blue-100 py-8 general-preview mb-8">
        <GeneralPreview generalInfo={generalInfo} />
      </div>
      <div className="personal-profile px-12">
        <PersonalProfilePreview personalProfile={personalProfile} />
      </div>
    </div>
  );
}
