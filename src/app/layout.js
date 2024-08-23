import { Container } from "@/styles";

export default function RootLayout({ children }) {
  return (
    <Container>
      <body>{children}</body>
    </Container>
  );
}
