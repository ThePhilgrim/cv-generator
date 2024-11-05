import { FaUserCircle } from 'react-icons/fa';

export default function GeneralPreview({ generalInfo }) {
  const { name, jobtitle, email, phone } = generalInfo;

  return (
    <div className="flex justify-between px-8">
      <div className="flex items-center info gap-2">
        <div className="avatar">
          <FaUserCircle className="h-12 w-12" />
        </div>
        <div className="flex flex-col name-title">
          <span>{name ? name : 'John Doe'}</span>
          <span>{jobtitle ? jobtitle : 'Senior Backend Developer'}</span>
        </div>
      </div>
      <div className="contact-info flex flex-col">
        <span className="email text-right">{email ? email : 'john.doe@email.com'}</span>
        <span className="phone text-right">{phone ? phone : '+467123456'}</span>
      </div>
    </div>
  );
}
