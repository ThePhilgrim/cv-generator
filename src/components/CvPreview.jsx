import GeneralPreview from './GeneralPreview';

export default function CvPreview() {
  return (
    <div className="bg-gray-50 shadow-md h-5/6 w-2/3 mx-44">
      <div className="bg-blue-100 py-8 general-preview">
        <GeneralPreview />
      </div>
    </div>
  );
}
