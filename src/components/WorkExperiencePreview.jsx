export default function WorkExperiencePreview({ workExperience }) {
  const workExperienceItems = workExperience.map((item) => {
    const startDate = item.info.startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const endDate = item.info.endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    return (
      <div key={item.id} className="experience-item flex justify-between px-4 mb-4">
        <div className="experience-title flex flex-col">
          <span className="role">{item.info.role}</span>
          <span className="company">{item.info.company}</span>
        </div>
        <div className="experience-period flex items-center">
          <span className="">{`${startDate}-${endDate}`}</span>
        </div>
      </div>
    );
  });
  return (
    <div className="work-experience-container">
      <div className="bg-blue-100 px-4 mb-4">
        <span className="text-md">Work Experience</span>
      </div>
      {workExperienceItems}
    </div>
  );
}
