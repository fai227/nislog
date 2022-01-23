import Container from "./container";

export default function Header() {
  return (
    <header className="bg-primary text-white h-12 flex justify-center items-center">
      <Container>
        <h1 className="text-center">
          <a href="/">NISLOG</a>
        </h1>
      </Container>
    </header>
  );
}
