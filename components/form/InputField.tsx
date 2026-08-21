'use client';

type InputProps = {
  name: string;
  type: 'text' | 'email' | 'password' | 'number';
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
};

const InputField = ({
  name,
  type,
  label,
  placeholder,
  value,
  //   onChange,
}: InputProps) => {
  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const inputValue =
  //       type === 'number' ? Number(e.target.value) : e.target.value;

  //     onChange?.(inputValue);
  //   };

  return (
    <>
      <div className='flex flex-col gap-2 pb-5'>
        <label htmlFor={name} className='capitalize font-semibold text-xl'>
          {label || name}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          //   onChange={handleChange}
          required
          className='border border-[#DDD] p-5 rounded-xl'
        />
      </div>
    </>
  );
};
export default InputField;
