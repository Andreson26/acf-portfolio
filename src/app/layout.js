import { Container } from "./layoutStyles";

export default function RootLayout({ children }) {
  return (
    <Container>
      <body>{children}</body>
    </Container>
  );
}  

