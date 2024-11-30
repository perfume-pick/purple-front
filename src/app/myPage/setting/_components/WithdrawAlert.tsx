import ModalLayout from "@/components/modalLayout/modalLayout";
import { S } from "./styles";

interface WithdrawAlertProps {
  checked: boolean;
  isOpen: boolean;
  onCheckboxChange: () => void;
  onWithdrawClick: () => void;
  onCloseModal: () => void;
}

const WithdrawAlert = ({
  checked,
  isOpen,
  onCheckboxChange,
  onWithdrawClick,
  onCloseModal,
}: WithdrawAlertProps) => {
  return (
    isOpen && (
      <ModalLayout onClick={onCloseModal}>
        <S.Wrapper onClick={e => e.stopPropagation()}>
          <S.TitleBox>
            <S.Title>계정을 정말로 삭제하실 건가요?</S.Title>
          </S.TitleBox>
          <S.ContentBox>
            <S.DescriptionContainer>
              <S.DescriptionBox>
                <S.DescriptionCheckBox>
                  <img src="/assets/images/non_outline_check.png" alt="check" />
                </S.DescriptionCheckBox>
                <p>취향카드, 프로필 등 모든 개인정보가 삭제됩니다.</p>
              </S.DescriptionBox>
              <S.DescriptionBox>
                <S.DescriptionCheckBox>
                  <img src="/assets/images/non_outline_check.png" alt="check" />
                </S.DescriptionCheckBox>
                <p>
                  향수에 남긴 코멘트는 가명화되며 삭제되지 않으니 미리
                  확인하세요.
                </p>
              </S.DescriptionBox>
            </S.DescriptionContainer>
            <S.WithdrawButton disabled={!checked} onClick={onWithdrawClick}>
              계정 삭제
            </S.WithdrawButton>
            <div>
              <S.ConfirmTextBox>
                <S.CheckboxLabel>
                  <S.CheckboxInput
                    type="checkbox"
                    checked={checked}
                    onChange={onCheckboxChange}
                  />
                  {checked && (
                    <img
                      src="/assets/images/non_outline_check.png"
                      alt="check"
                    />
                  )}
                </S.CheckboxLabel>
                <S.ConfirmText>
                  안내사항을 모두 확인하였으며 이에 동의합니다
                </S.ConfirmText>
              </S.ConfirmTextBox>
            </div>
          </S.ContentBox>
        </S.Wrapper>
      </ModalLayout>
    )
  );
};

export default WithdrawAlert;
