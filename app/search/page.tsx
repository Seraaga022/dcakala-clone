import React from "react";

interface Props {
  params: { search: string };
}

const Page = ({ params: { search } }: Props) => {
  return <div>{search}</div>;
};

export default Page;
