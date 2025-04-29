
import Hero from "@/components/organisms/Hero";
import Feactures from "@/components/organisms/Feactures";
import BlogCard from "@/components/molecules/BlogCard";

export default function Home() {
  return(
  <section>
   <div className=' flex flex-col items-center w-full'>
    <Hero />
    <Feactures />
    <div className='flex flex-col items-center w-full'>
      <BlogCard />
    </div>
    
   </div>


   
 </section>
  )
}
