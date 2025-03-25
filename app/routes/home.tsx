import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ITEC MAGISTRATUS" },
    { name: "description", content: "" },
  ];
}

export default function Home() {
  return <Welcome />;
}
