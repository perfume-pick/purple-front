import { DialogAlertType } from "@/types/alertTypes";
import ModalLayout from "../modalLayout/modalLayout";
import Portal from "./Portal";
import { S } from "./styles";

type Props = {
  messageInfo: DialogAlertType;
  handleClickdialogBtn: (code: string) => void;
};

const DialogAlert = ({ messageInfo, handleClickdialogBtn }: Props) => {
  return (
    <Portal>
      <ModalLayout>
        <S.AlertWrapper>
          <S.AlertContents>
            <div>{messageInfo.message}</div>
          </S.AlertContents>
          <S.AlertButtonWrap className="two-btn">
            <button
              style={{
                backgroundColor: messageInfo.leftBgColor,
                color: messageInfo.leftColor,
              }}
              onClick={() => handleClickdialogBtn("CANCEL")}
            >
              {messageInfo.leftText}
            </button>
            <button
              style={{
                backgroundColor: messageInfo.rightBgColor,
                color: messageInfo.rightColor,
              }}
              onClick={() => handleClickdialogBtn("DELETE")}
            >
              {messageInfo.rightText}
            </button>
          </S.AlertButtonWrap>
        </S.AlertWrapper>
      </ModalLayout>
    </Portal>
  );
};

export default DialogAlert;
