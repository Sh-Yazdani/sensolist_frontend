"use client";

interface CheckboxProps {
  isChecked: boolean;
  //   setIsChecked: Dispatch<SetStateAction<boolean>>;
  onChange: (a: boolean) => void;
  title: string;
}

export default function Checkbox({
  isChecked,
  onChange,
  title,
}: CheckboxProps) {
  // const [checked, setChecked] = useState<boolean>(isChecked)
  return (
    <label className="relative checkbox-container flex items-center !mb-0">
      <input
        className={isChecked ? "checked" : ""}
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          onChange(isChecked);
        }}
      />
      <span className="checkmark !border-neutral-7"></span>
      {title}
    </label>
  );
}
