import React from "react";
import AccordionMenu from "./AccordionMenu/AccordionMenu";

const Events = () => {
  return <>
  <section className="heroEvents">
    <article className="eventsHeader">
      <h1>✨SHOWS</h1>
    </article>
    <article className="accordionContainer">
  <AccordionMenu/>
    </article>
  </section>
  </>;
};

export default Events;


