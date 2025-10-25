import Container from "@/components/Container";
import HeroSection from "@/components/heroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="max-w-7xl  ">
      <HeroSection />
    </Container>
  );
}
