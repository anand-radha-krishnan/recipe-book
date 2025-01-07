import { connectClient, stopClient } from "../server/db";

async function main() {
  const client = await connectClient();

  await client.collection("Recipes").deleteMany({});

  const resp = await client.collection("Recipes").insertMany([
    {
      id: "baked-carrots",
      name: "Baked carrots",
      ingredients:
        "carrots, onion, garlic cloves, olive oil, salt",
      procdure:
        "Cut carrots and onion, Put everything together in an oven dish, add olive oil and salt, and mix well. Bake in a preheated oven at 180°C for 20 minutes.",
    },
    {
      id: "Pimientos-de-Padron",
      name: "Pimientos de Padron",
      ingredients: "padrón peppers, olive oil, salt",
      procdure:
        "Wash and dry the Pimientos de Padron. Heat olive oil in a pot and fry the peppers until the skin blisters; a few dark spots are okay. Sprinkle with regular salt or Fleur de Sel on the plate and eat promptlyCut carrots and onion, Put everything together in an oven dish, add olive oil and salt, and mix well. Bake in a preheated oven at 180°C for 20 minutes.",
    },
    {
      id: "broccoli-and-mushroom-stir-fry",
      name: "Broccoli and Mushroom Stir-Fry",
      ingredients:
        "broccoli, mushrooms, garlic cloves, vegetable broth, sesame oil, soy sauce",
      procdure:
        "Cut the broccoli, mushrooms and garlic. Heat a pan or wok on high heat, Sear the broccoli for 3 minutes. Add the garlic, vegetable broth, soy sauce for 5 minutes. Add the mushrooms and continue to simmer for another 2 minutes.",
    },
    {
      id: "candied-almonds",
      name: "Candied almonds",
      ingredients: "sugar, water, almonds, cinnamon",
      procdure:
        "Bring cinnamon, sugar and water to a boil. Add almonds and continue to cook. Then continue stirring until the sugar starts to melt. Place the almonds on baking paper, separate them, and let them cool.",
    },
  ]);

  console.info("Inserted Recipes:", resp.insertedCount);

  stopClient();
}

main();
