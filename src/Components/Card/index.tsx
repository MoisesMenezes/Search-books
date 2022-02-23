import ModalBook from "../ModalBook";

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  return (
    <>
      <h1>{title}</h1>

      <ModalBook />
    </>
  );
};

export default Card;
