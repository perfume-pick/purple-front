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
