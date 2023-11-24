import { ContentLayout } from "@/components/content/ContentLayout";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8 md:gap-14 items-center capitalize">
      <Header/>
      <ContentLayout/>
      <Footer/>
    </main>
  )
}
