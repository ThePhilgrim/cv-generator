import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import WorkExperienceForm from './WorkExperienceForm';
import { MAX_WORK_EXPERIENCE_ITEMS } from '../App';

export default function WorkExperienceItem({ info, id, index, isOpen, openForm }) {
  const handleClick = () => {
    // If already open, sets index out range to close all experience items. Otherwise sets isOpen on current experience item.
    isOpen ? openForm(MAX_WORK_EXPERIENCE_ITEMS) : openForm(index);
  };
  return (
    <div className="item-container mb-4">
      <button
        className="flex justify-between items-center w-3/4 py-2 px-4 mb-2 border-2 border-blue-100 rounded-md"
        onClick={handleClick}
      >
        {`Work Experience ${index + 1}/3`}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <WorkExperienceForm />}
    </div>
  );
}
