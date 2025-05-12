
import Hero from "@/components/organisms/Hero";
import Feactures from "@/components/organisms/Feactures";
import BlogCard from "@/components/molecules/BlogCard";

export default function Home() {
  return(
  <section>
    <Hero />
   <div className=' flex flex-col items-center w-full'>

    <Feactures />
    <div className='flex flex-col items-center w-full'>
      <BlogCard />
    </div>
   </div>
 </section>
  )
}
