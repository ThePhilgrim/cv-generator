import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import WorkExperienceForm from './WorkExperienceForm';

export default function WorkExperienceItem({ info, id, itemNo, isOpen }) {
  return (
    <div className="item-container mb-4">
      <button className="flex justify-between items-center w-3/4 py-2 px-4 mb-2 border-2 border-blue-100 rounded-md">
        {`Work Experience ${itemNo}/3`}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <WorkExperienceForm />}
    </div>
  );
}
