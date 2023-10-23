interface IProps {
  params: {
    slug: string;
  };
}

export default function Generation({ params: { slug } }: IProps) {
  console.log('slug ==========>', slug);

  return <div></div>;
}
