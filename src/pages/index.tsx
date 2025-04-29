import {HeroTitle, MidiumTitle, SubTitle, TextTitle, SubText} from "@/components/atoms/Titles";
import Hero from "@/components/organisms/Hero";
import Icon from "@/components/atoms/Icon";

export default function Home() {
  return <div className=' flex flex-col items-center w-full min-h-screen'>
    <Hero />
    <Icon icon="material-symbols:add-card-outline" />
  </div>
}
