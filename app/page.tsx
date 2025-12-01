import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="">
      <h1>Hello World</h1>
      <p>This is a test paragraph for the first E-comers project</p>

      <Button variant={"destructive"}>Oni chan </Button>
    </Container>
  );
}
