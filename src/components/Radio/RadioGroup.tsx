import Radio from "./Radio";
import { RadioBtnGroupProps, RadioBtnOption } from "./radio.type";
import { S } from "./styles";

const RadioBtnGroup = ({ options, onChange, value }: RadioBtnGroupProps) => {
  function renderOptions() {
    return options.map(
      ({ optionName, value: optionValue, optionCode }: RadioBtnOption) => {
        const optionId = optionCode;
        const isChecked = value === optionValue;

        return (
          <Radio
            value={optionValue}
            label={optionName}
            key={optionCode}
            id={optionId}
            onChange={onChange}
            checked={isChecked}
          />
        );
      },
    );
  }
  return <S.Wrapper>{renderOptions()}</S.Wrapper>;
};

export default RadioBtnGroup;
