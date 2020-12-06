import { Colors } from '@components/utils';

export enum InputStates {
  DEFAULT = 'default',
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export const InputClasses = {
  [InputStates.DEFAULT]: 'bg-gray-100 border-gray-200 text-gray-400',
  [InputStates.ERROR]: 'bg-danger-50 border-danger-500 text-danger-500',
  [InputStates.SUCCESS]: 'bg-success-50 border-success-500 text-success-500',
  [InputStates.WARNING]: 'bg-warning-50 border-warning-500 text-warning-500',
};

export const InputFocusClasses = {
  [Colors.PRIMARY]: 'bg-primary-50 border-primary-500 text-primary-500',
  [Colors.SECONDARY]: 'bg-secondary-50 border-secondary-500 text-secondary-500',
  [Colors.DANGER]: 'bg-danger-50 border-danger-500 text-danger-500',
  [Colors.WARNING]: 'bg-warning-50 border-warning-500 text-warning-500',
  [Colors.SUCCESS]: 'bg-success-50 border-success-500 text-success-500',
};

export const InputIcons = {
  [InputStates.ERROR]: 'times-circle',
  [InputStates.WARNING]: 'exclamation-triangle',
  [InputStates.SUCCESS]: 'check-circle',
  [InputStates.DEFAULT]: '',
};
