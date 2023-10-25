interface IProps {
  params: {
    generationNumber: string;
  };
}

export default function Generation({ params: { generationNumber } }: IProps) {
  console.log('generationNumber ==========>', generationNumber);

  return <div></div>;
}
