const CustomSelect = ({ value, onChange, options, translateMap, disabled }) => (
  <select
    value={value}
    onChange={(event) => onChange(event.target.value)}
    className="calc-option-bar min-w-[90px] max-xs:w-[70px] !w-[33%] max-md:max-w-[180px] md:max-w-[250px] max-sm:text-[11px] max-md:text-[13px] max-sm:p-[0.5px] max-sm:h-6 z-10"
    disabled={disabled}
  >
    {options.map((item) => (
      <option key={item} value={item}>
        {translateMap[item]}
      </option>
    ))}
  </select>
);

export default CustomSelect;
