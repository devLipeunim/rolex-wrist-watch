"use client";
import Products from "@/Assets/Data/Products";
import Featured from "@/Components/Featured";
import NewArrivals from "@/Components/NewArrivals";
import { Produxts } from "@/Components/Produxts";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import homeImg from "../Assets/img/home.png";
import story from "../Assets/img/story.png";
export default function Home() {
  const [allProducts, setAllProducts] = useState(Products);
  const [allFeaturedProducts, setAllFeaturedProducts] = useState(Products);
  const [allNewArrivals, setAllNewArrivals] = useState(Products);

  useEffect(() => {
    const filteredFeatured = Products.filter(
      (item) => item.category === "Featured"
    );
    setAllFeaturedProducts(filteredFeatured);

    const filteredProducts = Products.filter(
      (item) => item.category === "Products"
    );
    setAllProducts(filteredProducts);

    const filteredNewArrivals = Products.filter(
      (item) => item.category === "New Arrivals"
    );
    setAllNewArrivals(filteredNewArrivals);
  }, []);
  return (
    <main className="main">
      {/* <!--==================== HOME ====================--> */}
      <section className="home" id="home">
        <div className="home__container container grid">
          <div className="home__img-bg">
            <Image src={homeImg} alt="" className="home__img" />
          </div>

          <div className="home__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="home__social-link"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="home__social-link"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="home__social-link"
            >
              Instagram
            </a>
          </div>

          <div className="home__data">
            <h1 className="home__title">
              NEW WATCH <br /> COLLECTIONS B720
            </h1>
            <p className="home__description">
              Latest arrival of the new imported watches of the B720 series,
              with a modern and resistant design.
            </p>
            <span className="home__price">&#8358;1245</span>

            <div className="home__btns">
              <a href="#" className="button button--gray button--small">
                Discover
              </a>

              <button className="button home__button">ADD TO CART</button>
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== FEATURED ====================--> */}
      <section className="featured section container" id="featured">
        <h2 className="section__title">Featured</h2>

        <div className="featured__container grid">
          {allFeaturedProducts.map((item) => (
            <Featured key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* <!--==================== STORY ====================--> */}
      <section className="story section container">
        <div className="story__container grid">
          <div className="story__data">
            <h2 className="section__title story__section-title">Our Story</h2>

            <h1 className="story__title">
              Inspirational Watch of <br /> this year
            </h1>

            <p className="story__description">
              The latest and modern watches of this year, is available in
              various presentations in this store, discover them now.
            </p>

            <a href="#" className="button button--small">
              Discover
            </a>
          </div>

          <div className="story__images">
            <Image src={story} alt="" className="story__img" />
            <div className="story__square"></div>
          </div>
        </div>
      </section>

      {/* <!--==================== PRODUCTS ====================--> */}
      <section className="products section container" id="products">
        <h2 className="section__title">Products</h2>

        <div className="products__container grid">
          {allProducts.map((item) => (
            <Produxts key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* <!--==================== TESTIMONIAL ====================--> */}

      {/* <section className="testimonial section container">
        <div className="testimonial__container grid">
          <Swiper
            // slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            mousewheel={true}
            cssMode={true}
            // pagination={{ clickable: true }}
            // navigation={true}
            modules={[Navigation]}
          >
            <div className="swiper-wrapper">
              {Testimonials.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <TestimonialCards item={item} />
                  </SwiperSlide>
                );
              })}
            </div>
            
            <div class="swiper-button-next">
              <i class="bx bx-right-arrow-alt"></i>
            </div>
            <div class="swiper-button-prev">
              <i class="bx bx-left-arrow-alt"></i>
            </div>
          </Swiper>


          <div className="testimonial__images">
            <div className="testimonial__square"></div>
            <Image src={testimonial} alt="" class="testimonial__img" />
          </div>
        </div>
      </section> */}

      {/* <!--==================== NEW ====================--> */}
      <section className="new section container" id="new">
        <h2 className="section__title">New Arrivals</h2>

        <div className="new__container">
          <Swiper
            // slidesPerView={1}
            spaceBetween={24}
            loop={true}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            mousewheel={true}
            cssMode={true}
            pagination={{ clickable: true }}
            // navigation={true}
            modules={[Pagination, Navigation]}
          >
            <div className="swiper-wrapper">
              {allNewArrivals.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <NewArrivals item={item} />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </section>

      {/* <!--==================== NEWSLETTER ====================--> */}
      <section className="newsletter section container">
        <div className="newsletter__bg grid">
          <div>
            <h2 className="newsletter__title">
              Subscribe Our <br /> Newsletter
            </h2>
            <p className="newsletter__description">
              Don&#39;t miss out on your discounts. Subscribe to our email
              newsletter to get the best offers, discounts, coupons, gifts and
              much more.
            </p>
          </div>

          <form action="" className="newsletter__subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter__input"
            />
            <button className="button">SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </main>
  );
}
