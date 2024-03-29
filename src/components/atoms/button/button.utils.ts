import { Colors } from '../../utils';

export enum ButtonTypes {
  FILLED = 'filled',
  TRANSPARENT = 'transparent',
  OUTLINED = 'outlined',
  FILLED_MONOCHROME = 'filled-monochrome',
  LINK = 'link',
}

export enum ButtonTags {
  BUTTON = 'button',
  LINK = 'a',
}

export const ButtonClasses = {
  [ButtonTypes.FILLED]: {
    [Colors.PRIMARY]:
      'border-primary-500 bg-primary-500 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700 disabled:border-primary-200 disabled:bg-primary-200 text-white',
    [Colors.SECONDARY]:
      'border-secondary-500 bg-secondary-500 hover:bg-secondary-600 hover:border-secondary-600 active:bg-secondary-700 active:border-secondary-700 disabled:border-secondary-200 disabled:bg-secondary-200 text-white',
    [Colors.DANGER]:
      'border-danger-500 bg-danger-500 hover:bg-danger-600 hover:border-danger-600 active:bg-danger-700 active:border-danger-700 disabled:border-danger-200 disabled:bg-danger-200 text-white',
    [Colors.WARNING]:
      'border-warning-500 bg-warning-500 hover:bg-warning-600 hover:border-warning-600 active:bg-warning-700 active:border-warning-700 disabled:border-warning-200 disabled:bg-warning-200 text-white',
    [Colors.SUCCESS]:
      'border-success-500 bg-success-500 hover:bg-success-600 hover:border-success-600 active:bg-success-700 active:border-success-700 disabled:border-success-200 disabled:bg-success-200 text-white',
    [Colors.DARK]:
      'border-gray-500 bg-gray-500 hover:bg-gray-600 hover:border-gray-600 active:bg-gray-700 active:border-gray-700 disabled:border-gray-200 disabled:bg-gray-200 text-white',
    [Colors.LIGHT]:
      'border-white bg-white hover:bg-gray-50 hover:border-gray-50 active:bg-gray-100 active:border-gray-100 disabled:border-white disabled:bg-white text-gray-600 disabled:text-gray-200',
  },
  [ButtonTypes.TRANSPARENT]: {
    [Colors.PRIMARY]:
      'border-transparent text-primary-500 hover:border-primary-50 hover:bg-primary-50 active:bg-primary-100 active:border-primary-100 disabled:bg-transparent disabled:border-transparent disabled:text-primary-200',
    [Colors.SECONDARY]:
      'border-transparent text-secondary-500 hover:border-secondary-50 hover:bg-secondary-50 active:bg-secondary-100 active:border-secondary-100 disabled:bg-transparent disabled:border-transparent disabled:text-secondary-200',
    [Colors.DANGER]:
      'border-transparent text-danger-500 hover:border-danger-50 hover:bg-danger-50 active:bg-danger-100 active:border-danger-100 disabled:bg-transparent disabled:border-transparent disabled:text-danger-200',
    [Colors.WARNING]:
      'border-transparent text-warning-500 hover:border-warning-50 hover:bg-warning-50 active:bg-warning-100 active:border-warning-100 disabled:bg-transparent disabled:border-transparent disabled:text-warning-200',
    [Colors.SUCCESS]:
      'border-transparent text-success-500 hover:border-success-50 hover:bg-success-50 active:bg-success-100 active:border-success-100 disabled:bg-transparent disabled:border-transparent disabled:text-success-200',
    [Colors.DARK]:
      'border-transparent text-gray-500 hover:border-gray-100 hover:bg-gray-100 active:bg-gray-200 active:border-gray-200 disabled:bg-transparent disabled:border-transparent disabled:text-gray-200',
    [Colors.LIGHT]:
      'border-transparent text-white hover:bg-white-10 active:bg-white-20 disabled:bg-transparent disabled:text-white-20',
  },
  [ButtonTypes.OUTLINED]: {
    [Colors.PRIMARY]:
      'border-primary-100 text-primary-500 hover:border-primary-500 hover:bg-primary-50 active:bg-primary-100 disabled:bg-transparent disabled:border-primary-100 disabled:text-primary-200',
    [Colors.SECONDARY]:
      'border-secondary-100 text-secondary-500 hover:border-secondary-500 hover:bg-secondary-50 active:bg-secondary-100 disabled:bg-transparent disabled:border-secondary-100 disabled:text-secondary-200',
    [Colors.DANGER]:
      'border-danger-100 text-danger-500 hover:border-danger-500 hover:bg-danger-50 active:bg-danger-100 disabled:bg-transparent disabled:border-danger-100 disabled:text-danger-200',
    [Colors.WARNING]:
      'border-warning-100 text-warning-500 hover:border-warning-500 hover:bg-warning-50 active:bg-warning-100 disabled:bg-transparent disabled:border-warning-100 disabled:text-warning-200',
    [Colors.SUCCESS]:
      'border-success-100 text-success-500 hover:border-success-500 hover:bg-success-50 active:bg-success-100 disabled:bg-transparent disabled:border-success-100 disabled:text-success-200',
    [Colors.DARK]:
      'border-gray-200 text-gray-500 hover:border-gray-500 hover:bg-gray-100 active:bg-gray-200 disabled:bg-transparent disabled:border-gray-200 disabled:text-gray-200',
    [Colors.LIGHT]:
      'border-white-20 text-white hover:border-white hover:bg-white-10 active:bg-white-20 disabled:bg-transparent disabled:border-white-20 disabled:text-white-20',
  },
  [ButtonTypes.FILLED_MONOCHROME]: {
    [Colors.PRIMARY]:
      'border-white bg-white text-primary-500 hover:border-primary-50 hover:bg-primary-50 active:bg-primary-100 active:border-primary-100 disabled:bg-white disabled:border-white disabled:text-primary-200',
    [Colors.SECONDARY]:
      'border-white bg-white text-secondary-500 hover:border-secondary-50 hover:bg-secondary-50 active:bg-secondary-100 active:border-secondary-100 disabled:bg-white disabled:border-white disabled:text-secondary-200',
    [Colors.DANGER]:
      'border-white bg-white text-danger-500 hover:border-danger-50 hover:bg-danger-50 active:bg-danger-100 active:border-danger-100 disabled:bg-white disabled:border-white disabled:text-danger-200',
    [Colors.WARNING]:
      'border-white bg-white text-warning-500 hover:border-warning-50 hover:bg-warning-50 active:bg-warning-100 active:border-warning-100 disabled:bg-white disabled:border-white disabled:text-warning-200',
    [Colors.SUCCESS]:
      'border-white bg-white text-success-500 hover:border-success-50 hover:bg-success-50 active:bg-success-100 active:border-success-100 disabled:bg-white disabled:border-white disabled:text-success-200',
    [Colors.DARK]:
      'border-white bg-white text-gray-600 hover:border-gray-100 hover:bg-gray-100 active:bg-gray-200 active:border-gray-200 disabled:bg-white disabled:border-white disabled:text-gray-200',
    [Colors.LIGHT]:
      'border-white bg-white text-gray-600 hover:border-gray-100 hover:bg-gray-100 active:bg-gray-200 active:border-gray-200 disabled:bg-white disabled:border-white disabled:text-gray-200',
  },
  [ButtonTypes.LINK]: {
    [Colors.PRIMARY]: 'text-primary-500 hover:text-primary-600 disabled:text-primary-200',
    [Colors.SECONDARY]: 'text-secondary-500 hover:text-secondary-600 disabled:text-secondary-200',
    [Colors.DANGER]: 'text-danger-500 hover:text-danger-600 disabled:text-danger-200',
    [Colors.WARNING]: 'text-warning-500 hover:text-warning-600 disabled:text-warning-200',
    [Colors.SUCCESS]: 'text-success-500 hover:text-success-600 disabled:text-success-200',
    [Colors.DARK]: 'text-gray-600 hover:text-gray-700 disabled:text-gray-200',
    [Colors.LIGHT]: 'text-white hover:text-white disabled:text-white',
  },
};

export const ButtonBaseClasses = {
  [ButtonTags.BUTTON]: {},
};
