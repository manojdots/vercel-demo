import Image from "next/image";
import { Button, Stack } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Stack spacing={2} alignItems="center">
        <Button variant="contained">hello</Button>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <Button href="/buy" variant="outlined">
          buy
        </Button>
      </Stack>
    </main>
  );
}
