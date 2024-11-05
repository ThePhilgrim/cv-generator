import { FaUserCircle } from 'react-icons/fa';

export default function GeneralPreview() {
  return (
    <div className="flex justify-between px-8">
      <div className="flex items-center info gap-2">
        <div className="avatar">
          <FaUserCircle className="h-12 w-12" />
        </div>
        <div className="flex flex-col name-title">
          <span>John Doe</span>
          <span>Senior Backend Developer</span>
        </div>
      </div>
      <div className="contact-info flex flex-col">
        <span className="email text-right">john.doe@email.com</span>
        <span className="phone text-right">+4671234567</span>
      </div>
    </div>
  );
}
