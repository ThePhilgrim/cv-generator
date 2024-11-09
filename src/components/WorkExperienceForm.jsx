export default function WorkExperienceForm() {
  return (
    <div className="work-experience-form px-6 w-2/3">
      <form action="">
        <label htmlFor="jobtitle" className="block">
          Job Title:
        </label>
        <input className="w-full" type="text" id="jobtitle" name="jobtitle" placeholder="Junior Backend Developer" />

        <label htmlFor="company" className="block">
          Company:
        </label>
        <input className="w-full" type="text" id="company" name="company" placeholder="Major Tech Co" />
        <div className="dates flex gap-4">
          <div className="startdate">
            <label htmlFor="startdate" className="block">
              Start date:
            </label>
            <input type="month" name="startdate" id="startdate" />
          </div>
          <div className="enddate">
            <label htmlFor="enddate" className="block">
              End date:
            </label>
            {/* TODO: Make sure end date is after start date */}
            <input type="month" name="enddate" id="enddate" />
          </div>
        </div>
      </form>
    </div>
  );
}
