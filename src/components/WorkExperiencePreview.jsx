export default function WorkExperiencePreview() {
  return (
    <>
      <div className="bg-blue-100 px-4 mb-4">
        <span className="text-md">Work Experience</span>
      </div>
      <div className="experience-items flex flex-col px-4">
        <div className="experience-item flex justify-between mb-4">
          <div className="experience-title flex flex-col">
            <span className="role">Junior Backend Developer</span>
            <span className="company">Garmin</span>
          </div>
          <div className="experience-period flex items-center">
            <span className="">October 21 - January 24</span>
          </div>
        </div>
        <div className="experience-item flex justify-between mb-4">
          <div className="experience-title flex flex-col">
            <span className="role">Internship</span>
            <span className="company">Garmin</span>
          </div>
          <div className="experience-period flex items-center">
            <span className="">January 21 - September 21</span>
          </div>
        </div>
      </div>
    </>
  );
}
