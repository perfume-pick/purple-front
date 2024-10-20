import React, { ChangeEvent } from "react";
import Radio from "./Radio";
import { RadioBtnGroupProps, RadioBtnOption } from "./radio.type";
import { S } from "./styles";

const RadioBtnGroup = ({ options, onChange, value }: RadioBtnGroupProps) => {
  function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;

    // 동일한 값을 클릭하면 값을 빈 문자열로 설정 (선택 해제)
    if (value === newValue) {
      const changeEvent = {
        ...event,
        target: { ...event.target, value: "" }, // 빈 문자열을 설정
      };
      onChange(changeEvent as ChangeEvent<HTMLInputElement>); // ChangeEvent로 전달
    } else {
      onChange(event); // 새로운 값 선택 시 기존 event 전달
    }
  }

  function renderOptions() {
    return options.map(
      ({ optionName, value: optionValue, optionCode }: RadioBtnOption) => {
        const optionId = optionCode;
        const isChecked = value === optionCode;

        return (
          <Radio
            value={optionCode}
            label={optionName}
            key={optionCode}
            id={optionId}
            onChange={handleRadioChange}
            checked={isChecked}
          />
        );
      },
    );
  }
  return <S.Wrapper>{renderOptions()}</S.Wrapper>;
};

export default RadioBtnGroup;
