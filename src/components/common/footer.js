import Container from "./container";

export default function Footer() {
  return (
    <footer className="h-12 flex justify-center items-center">
      <Container>
        <p className="text-center">
          <small>&copy; 2022 NISLAB.</small>
        </p>
      </Container>
    </footer>
  );
}
