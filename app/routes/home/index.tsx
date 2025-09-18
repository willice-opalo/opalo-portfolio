import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profile Dev" },
    { name: "description", content: "Welcome to Profile Dev" },
  ];
}

export default function Home() {
  return (
    <>
      Homes
    </>
  )
}
