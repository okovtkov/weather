/* eslint-disable jsx-a11y/no-static-element-interactions */
import { MouseEvent } from 'react';
import classNames from 'classnames';
import './icon.scss';

interface Props {
  name: string;
  onMouseDown?: (event: MouseEvent<HTMLSpanElement>) => void;
  onMouseUp?: (event: MouseEvent<HTMLSpanElement>) => void;
}

const Icon = (props: Props) => {
  return (
    <span
      className={classNames('icon', `icon--${props.name}`)}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
    />
  );
};

export default Icon;
