export interface Info {
  lastConfigChanges: any;
  network: any;
}

export interface XFI {
  binance?: any;
  bitcoin?: any;
  bitcoincash?: any;
  ethereum?: any;
  common: any;
  info: Info;
  litecoin?: any;
  thorchain?: any;
}

export interface dWindow extends Window {
  xfi?: XFI;
  ethereum: any;
}
