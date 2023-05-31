import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character({}) {
  const id = useRouter().query.id;
  // React router checks the dynamic path. the [id]-filename shows Next to use it
  //const id = 1;
  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`
  );

  if (isLoading) {
    return "Loading ...";
  }
  console.log("data", data);
  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
