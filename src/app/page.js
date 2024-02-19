import Image from "next/image";
import Box from '@mui/joy/Box'
import Container from '@mui/material/Container';
import Card from '@mui/joy/Card';
import Cards from "./components/index/Cards";


export default function Home() {
  return (
    <main className="flex">
      <Container maxWidth="lg">
        <div
         className="box"
        >
          <Cards />
        </div>
      </Container>
    </main>
  );
}
