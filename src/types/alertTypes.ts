export interface AlertType {
  title?: string;
  message: string;
  ok: string;
}

export interface ConfirmAlertType extends AlertType {
  cancel: string;
}

export interface ProfileAlertType extends AlertType {
  delete: string;
}

export interface DialogAlertType {
  message: string;
  leftText: string;
  rightText: string;
  leftBgColor: string;
  rightBgColor: string;
  leftColor: string;
  rightColor: string;
}
