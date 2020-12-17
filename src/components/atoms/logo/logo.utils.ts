export enum LogoModes {
  COLOR = 'color',
  LIGHT = 'light',
  DARK = 'dark',
}

export enum LogoVariants {
  SMALL = 'small',
  FULL = 'full',
  LOGOTYPE = 'logotype',
}

export const LogoColors = {
  [LogoModes.COLOR]: '',
  [LogoModes.LIGHT]: 'text-white',
  [LogoModes.DARK]: 'text-gray-700',
};
