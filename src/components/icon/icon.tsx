/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import './icon.scss';

interface Props {
  name: string;
}

const Icon = (props: Props) => {
  return <span className={classNames('icon', `icon--${props.name}`)} />;
};

export default Icon;
