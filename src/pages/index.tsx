
import Hero from "@/components/organisms/Hero";
import Feactures from "@/components/organisms/Feactures";
import BlogCard from "@/components/molecules/BlogCard";
import {Button} from "@/components/ui/button"

export default function Home() {
  return(
  <section>
   <div className=' flex flex-col items-center w-full'>
    <Hero />
    <Button className="bg-blue-500 hover:bg-blue-600">Mi primer CI-CD</Button>
    <Feactures />
    <div className='flex flex-col items-center w-full'>
      <BlogCard />
    </div>
    
   </div>


   
 </section>
  )
}
