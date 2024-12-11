interface BallProps {
  onClick: () => void;
  children?: React.ReactElement;
}

const Ball = (props: BallProps) => {
  return (
    <div className="ball" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Ball;
