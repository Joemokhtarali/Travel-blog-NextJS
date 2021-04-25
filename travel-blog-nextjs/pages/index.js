import { Fragment } from "react";
import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {title: 'Cairo', country: 'Egypt', date: '07/13/2020', image: 'cairo.jpeg', youtube_link: 'https://www.youtube.com/watch?v=0NjnKn63r8w', slug: 'egypt-cairo1', content: "Whenever you hear Egypt, Your mind will always imagine three Pyramids, The Sphinx, Camels, and Horses. This picture isn't wrong, I'll be happy to write about it in this article that will make you more eager to visit Egypt. And I will write about everything you'll need to know before visiting The land of the Pharaohs."},
  {title: 'Cairo', country: 'Egypt', date: '07/13/2020', image: 'cairo.jpeg', youtube_link: 'https://www.youtube.com/watch?v=0NjnKn63r8w', slug: 'egypt-cairo2', content: "Whenever you hear Egypt, Your mind will always imagine three Pyramids, The Sphinx, Camels, and Horses. This picture isn't wrong, I'll be happy to write about it in this article that will make you more eager to visit Egypt. And I will write about everything you'll need to know before visiting The land of the Pharaohs."},
  {title: 'Cairo', country: 'Egypt', date: '07/13/2020', image: 'cairo.jpeg', youtube_link: 'https://www.youtube.com/watch?v=0NjnKn63r8w', slug: 'egypt-cairo3', content: "Whenever you hear Egypt, Your mind will always imagine three Pyramids, The Sphinx, Camels, and Horses. This picture isn't wrong, I'll be happy to write about it in this article that will make you more eager to visit Egypt. And I will write about everything you'll need to know before visiting The land of the Pharaohs."}
]

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
  );
}

export default HomePage;
