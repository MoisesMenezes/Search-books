interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Card;
