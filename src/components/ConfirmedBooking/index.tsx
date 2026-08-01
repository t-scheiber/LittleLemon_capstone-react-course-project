import { FC, HTMLAttributes, useState } from "react";
import { Container, Top, Confirmation } from "./styles";
import { useNavigate, NavigateFunction } from "react-router-dom";
import Button from "../Button";

const ConfirmedBooking: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const navigate: NavigateFunction = useNavigate();
  // Use lazy initialization to avoid setState in useEffect
  const [booking] = useState<{ date: string, time: string, guests: string, occasion: string } | undefined>(() => {
    const storedBooking = localStorage.getItem("Bookings");
    return storedBooking ? JSON.parse(storedBooking) : undefined;
  });

  return (
    <Container {...props}>
      <Top>
        <h1>Thank you for your reservation!</h1>
        <h3 className="lead-txt">We look forward to seeing you at Little Lemon.</h3>
      </Top>
      {
        booking &&
        <Confirmation>
          <h2>Confirmation details</h2>
          <span><strong>Occasion:</strong> {booking.occasion}</span>
          <span><strong>Guests:</strong> {booking.guests}</span>
          <span><strong>Date:</strong> {booking.date}</span>
          <span><strong>Time:</strong> {booking.time}</span>
        </Confirmation>
      }

      <Button aria-label="Go back to the home page" onClick={() => navigate("/")}>Back to home</Button>
    </Container>
  );
};

export default ConfirmedBooking;