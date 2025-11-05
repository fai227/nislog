import Container from "./container";

export default function Header() {
  return (
    <header className="flex justify-center items-center">
      <Container>
        <div className="flex justify-center items-center mt-6">
          <img src="assets/log_icon.svg" alt="NISLOG Logo" className="h-10 mr-1" />
          <img src="assets/log_label.svg" alt="NISLOG Label" className="h-10 ml-1" />
        </div>
      </Container>
    </header>
  );
}
