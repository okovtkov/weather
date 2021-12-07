import classNames from 'classnames';
import './icon.scss';

interface Props {
  name: string;
}

const Icon = (props: Props) => {
  return <span className={classNames('icon', `icon--${props.name}`)} />;
};

export default Icon;
