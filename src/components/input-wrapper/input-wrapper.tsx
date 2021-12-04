import classNames from 'classnames';
import { ChangeEvent } from 'react';
import './input-wrapper.scss';

interface Props {
  className: string;
  type: 'checkbox' | 'radio' | 'search';
  name: string;
  value: string;
  id: string;
  label: string;
  iconName?: string;
  checked?: boolean;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputWrapper = (props: Props) => {
  return (
    <div
      className={classNames(props.className, 'input-wrapper', {
        'input-wrapper--radio': props.type === 'radio',
        'input-wrapper--checkbox': props.type === 'checkbox',
        'input-wrapper--search': props.type === 'search',
      })}
    >
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        defaultChecked={props.checked}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      <label htmlFor={props.id} aria-label={props.label}>
        {props.iconName && (
          <span className={classNames('icon', `icon--${props.iconName}`)} />
        )}
      </label>
    </div>
  );
};

export default InputWrapper;
