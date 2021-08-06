export interface DialogState {
    type: 'alert' | 'confirmation' | 'working' | 'login';
    signal: 'blank' | 'warning' | 'error' | 'success';
    msg: string;
    isVisible: boolean;
    data: any;
}
