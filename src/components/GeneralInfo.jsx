import FormHeading from './FormHeading';

export default function GeneralInfo({ generalInfo, onChange }) {
  const { name, jobtitle, email, phone } = generalInfo;
  return (
    <div>
      <FormHeading text={'General information'} />
      <form action="">
        <label htmlFor="name" className="block">
          Full Name:
        </label>
        <input
          className="w-full"
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          value={name}
          onChange={onChange}
        />
        <label htmlFor="jobtitle" className="block">
          Job Title:
        </label>
        <input
          className="w-full"
          type="text"
          id="jobtitle"
          name="jobtitle"
          placeholder="Senior Backend Developer"
          value={jobtitle}
          onChange={onChange}
        />
        <label htmlFor="email" className="block">
          Email:
        </label>
        <input
          className="w-full"
          type="email"
          id="email"
          name="email"
          placeholder="john.doe@email.com"
          value={email}
          onChange={onChange}
        />
        <label htmlFor="phone" className="block">
          Phone:
        </label>
        <input
          className="w-full"
          type="tel"
          id="phone"
          name="phone"
          placeholder="+46761234567"
          value={phone}
          onChange={onChange}
        />
      </form>
    </div>
  );
}
