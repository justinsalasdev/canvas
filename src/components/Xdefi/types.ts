export interface XFI {
  binance?: any;
  bitcoin?: any;
  bitcoincash?: any;
  ethereum: any;
  common: any;
  info: any;
  litecoin: any;
  thorchain: any;
}

export interface dWindow extends Window {
  xfi?: XFI;
  ethereum?: any;
}
