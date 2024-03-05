import { FC, HTMLAttributes } from "react";
import { Container, Top, Cards } from "./styles";
import Button from "../Button";
import SpecialFoodCard from "../SpecialFoodCard";
import greekSalad from "../../assets/greekSalad.jpg";
import bruschetta from "../../assets/bruschetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";

const Specials: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props} id="menu">
      <Top>
        <h1>This weeks specials!</h1>
        <Button>Online Menu</Button>
      </Top>
      <Cards>
        <SpecialFoodCard
          imageUrl={greekSalad}
          title="Greek Salad"
          price={12.99}
          description="The famous greek salad with crispy lettuce, peppers, olives and famed greek cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <SpecialFoodCard
          imageUrl={bruschetta}
          title="Bruschetta"
          price={7.99}
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <SpecialFoodCard
          imageUrl={lemonDessert}
          title="Lemon Dessert"
          price={6.99}
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced by hand and is as authentic as can be imagined."
        />
      </Cards>
    </Container>
  );
};

export default Specials;