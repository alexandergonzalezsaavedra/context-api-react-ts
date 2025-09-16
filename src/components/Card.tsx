interface Props {
  children?: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className='col-md-4 text-center'>
      <div
        className='card mt-5 mx-auto'
        style={{ width: '18rem' }}
      >
        <img
          src='...'
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>{children}</div>
      </div>
    </div>
  );
};

export default Card;
