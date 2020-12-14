import { Colors } from '../../utils';

export interface ButtonToggleItem {
  value: String | Number,
  label: String,
}

export const ButtonToggleClasses = {
  [Colors.PRIMARY]: 'text-primary-500 border-primary-100 hover:bg-primary-100 active:bg-primary-200 active:border-primary-200',
  [Colors.SECONDARY]: 'text-secondary-500 border-secondary-100 hover:bg-secondary-100 active:bg-secondary-200 active:border-secondary-200',
  [Colors.DANGER]: 'text-danger-500 border-danger-100 hover:bg-danger-100 active:bg-danger-200 active:border-danger-200',
  [Colors.WARNING]: 'text-warning-500 border-warning-100 hover:bg-warning-100 active:bg-warning-200 active:border-warning-200',
  [Colors.SUCCESS]: 'text-success-500 border-success-100 hover:bg-success-100 active:bg-success-200 active:border-success-200',
  [Colors.DARK]: 'text-gray-600 border-gray-200 hover:bg-gray-200 active:bg-gray-300 active:border-gray-300',
  [Colors.LIGHT]: 'text-white border-white-20 hover:bg-white-20 active:bg-white-30 active:border-white-30',
};

export const ButtonToggleActiveClasses = {
  [Colors.PRIMARY]: 'bg-primary-500 border-primary-500 text-white',
  [Colors.SECONDARY]: 'bg-secondary-500 border-secondary-500 text-white',
  [Colors.DANGER]: 'bg-danger-500 border-danger-500 text-white',
  [Colors.WARNING]: 'bg-warning-500 border-warning-500 text-white',
  [Colors.SUCCESS]: 'bg-success-500 border-success-500 text-white',
  [Colors.DARK]: 'bg-gray-600 border-gray-600 text-white',
  [Colors.LIGHT]: 'bg-white border-white text-gray-500',
};