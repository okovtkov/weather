import classNames from 'classnames';

interface Props {
  className: string;
}

const Icon = (props: Props) => {
  return (
    <span
      className={classNames('icon', {
        [`icon--${props.className}`]: props.className,
      })}
    />
  );
};

export default Icon;
