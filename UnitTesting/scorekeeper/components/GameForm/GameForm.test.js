import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", async () => {
  render(<GameForm />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();

  const inputFields = await screen.getAllByRole("textbox");
  expect(inputFields).toHaveLength(2);
});

test("renders a form with the accessible name 'Create a new game'", () => {});

// test("submits the correct form data when every field is filled out", async () => {
//   render(
//     <GameForm onCreateGame={[
//       {nameOfGame: "chess", players: ["ab", "cd"]}
//     ]}
//     />
//     )
// }
// const onCreateGame = ...;
//   )
// });

test("does not submit form if one input field is left empty", async () => {});

// test("renders name of game and 'show score' button only", () => {
//   render(
//     <HistoryEntry
//       nameOfGame="Dodelido"
//       players={[
//         { name: "John", score: 2, id: "xyz" },
//         { name: "Jane", score: 1, id: "abc" },
//       ]}
//     />
//   );

//   const nameOfGame = screen.getByText(/dodelido/i);
//   const button = screen.getByRole("button", { name: /show score/i });

//   expect(nameOfGame).toBeInTheDocument();
//   expect(button).toBeInTheDocument();
// });
