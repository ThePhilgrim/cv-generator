import FormHeading from './FormHeading';

export default function PersonalProfile({ text, onChange }) {
  const textCharCount = text.length;

  return (
    <div>
      <FormHeading text={'Personal Profile'} />
      <form action="">
        <textarea
          name="personalprofile"
          id="personalprofile"
          placeholder="Write a short summary of your personal profile here"
          rows="5"
          maxLength={350}
          className="w-full"
          value={text}
          onChange={onChange}
        ></textarea>
      </form>
      <span className="text-xs float-end">{textCharCount}/350 characters</span>
    </div>
  );
}
