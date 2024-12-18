import Home from "@/app/(afterLogin)/home/page";

export default function Page({ params }) {
  params.username; // elonmusk
  params.id; // 1
  params.photoId; // 1
  return <Home />;
}
