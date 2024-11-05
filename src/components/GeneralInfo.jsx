import FormHeading from './FormHeading';

export default function GeneralInfo() {
  return (
    <div>
      <FormHeading text={'General information'} />
      <form action="">
        <label htmlFor="name" className="block">
          Full Name:
        </label>
        <input className="w-full" type="text" id="name" placeholder="John Doe" />
        <label htmlFor="jobtitle" className="block">
          Job Title:
        </label>
        <input className="w-full" type="text" id="jobtitle" placeholder="Senior Backend Developer" />
        <label htmlFor="email" className="block">
          Email:
        </label>
        <input className="w-full" type="email" id="email" placeholder="john.doe@email.com" />
        <label htmlFor="phone" className="block">
          Phone:
        </label>
        <input className="w-full" type="tel" id="phone" placeholder="+46761234567" />
      </form>
    </div>
  );
}
