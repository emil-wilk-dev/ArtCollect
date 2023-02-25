import React from 'react';
import SliderCarousel from '../components/SliderCarouselsingle';
import FeatureBox from '../components/FeatureBox';
import CarouselCollection from '../components/CarouselCollection';
import ColumnNew from '../components/ColumnNew';
import AuthorList from '../components/authorList';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar .search #quick_search{
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: none !important;
  }
  header#myHeader .logo .d-3{
    display: block !important;
  }
  footer.footer-light .subfooter span img.d-1{
    display: none !important;
  }
  footer.footer-light .subfooter span img.d-3{
    display: inline-block !important;
  }
  .de_countdown{
    right: 10px;
  }
  .author_list_pp{
    margin-left:0;
  }
  footer.footer-light .subfooter{
    border-top: 1px solid rgba(255,255,255,.1);
  }
`;

const homethree = () => (
  <div>
    <GlobalStyles />
    <section className="jumbotron no-bg">
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className="spacer-single"></div>
            <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
              <h6 className=""><span className="text-uppercase color">WELCOME</span></h6>
            </Reveal>
            <div className="spacer-10"></div>
            <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
              <h1 className="">Trade, sell or collect digital art</h1>
            </Reveal>
            <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
              <p className=" lead">
                Art Collect is a new NFT marketlplace on the Tezos network that helps artists and collectors connect thruogh value.
              </p>
            </Reveal>
            <div className="spacer-10"></div>
            <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
              <span onClick={() => window.open("/#", "_self")} className="btn-main lead">Explore Drops</span>
              <div className="mb-sm-30"></div>
            </Reveal>
            <Reveal className='onStep d-inline' keyframes={inline} delay={900} duration={1200} triggerOnce>
              <div className="row">
                <div className="spacer-single"></div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-4 mb30">
                    <div className="de_count text-left">
                      <h3><span>94215</span></h3>
                      <h5 className="id-color">Drops</h5>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-4 mb30">
                    <div className="de_count text-left">
                      <h3><span>27</span>k</h3>
                      <h5 className="id-color">Drops sold</h5>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-4 mb30">
                    <div className="de_count text-left">
                      <h3><span>4</span>k</h3>
                      <h5 className="id-color">Artists</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="spacer-double"></div>
          </div>
          <div className='col-lg-6 px-0'>
            <SliderCarousel />
          </div>
        </div>
      </div>
    </section>

    <section className='container no-top'>
      <div className='container px-0'>
        <FeatureBox />
      </div>
    </section>

    <section className='container'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='style-2'>Trending Drops</h2>
          </div>
        </div>
        <ColumnNew />
      </div>
    </section>

    <section className='container no-top'>
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='style-2'>New Drops</h2>
        </div>
      </div>
      <div className='container no-top'>
        <div className='row'>
          <div className='col-lg-12 px-0'>
            <CarouselCollection />
          </div>
        </div>
      </div>
    </section>

    <section className='container no-top'>
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='style-2'>Most Valuable</h2>
        </div>
        <div className='col-lg-12'>
          <AuthorList />
        </div>
      </div>
    </section>

    <section className='container no-top'>
      <div className='row'>
        <div className='col-lg-12 text-center'>
          <h2 className='style-2'>Drops</h2>
          <div className="small-border"></div>
        </div>
      </div>
      <div className='container px-0'>
        <div className="row">
          <div className="col-lg-2 col-sm-4 col-6 mb30">
            <span className="box-url">
              <i className="fa fa-image"></i>
              <h4>Art</h4>
            </span>
          </div>

          <div className="col-lg-2 col-sm-4 col-6 mb30">
            <span className="box-url">
              <i className="fa fa-music"></i>
              <h4>Music</h4>
            </span>
          </div>

          <div className="col-lg-2 col-sm-4 col-6 mb30">
            <span className="box-url">
              <i className="fa fa-search"></i>
              <h4>Domain Names</h4>
            </span>
          </div>

          <div className="col-lg-2 col-sm-4 col-6 mb30">
            <span className="box-url">
              <i className="fa fa-globe"></i>
              <h4>Virtual Worlds</h4>
            </span>
          </div>

          <div className="col-lg-2 col-sm-4 col-6 mb30">
            <span className="box-url">
              <i className="fa fa-vcard"></i>
              <h4>Trading Cards</h4>
            </span>
          </div>

          <div className="col-lg-2 col-sm-4 col-6 mb30">
            <span className="box-url">
              <i className="fa fa-th"></i>
              <h4>Collectibles</h4>
            </span>
          </div>
        </div>
      </div>
    </section>

    <Footer />

  </div>
);
export default homethree;