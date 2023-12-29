import React from 'react'
import { ContentSolution, AutoScrollHeader1, AutoScrollHeader2, IndustriesAutoScroll, Approch, PowerCreativity, Preloader, Form, Footer, HeaderBanner, Navbar, Numbers, CreativeCrew, OurServices, CTAButton, Testimonials, PortFolio2 } from '../../Components/Layout'
import { head1, head2, head3, head4, head5, head6, head7, head8, sec1, sec2, sec3, sec4, sec5, sec6, sec7, sec8, sec9, ind1, ind2, ind3, ind4, ind5, ind6, ind7, ind8, ind9, ind10, sw1, sw2, sw3, sw4, sw5, sw6, sw7, sw8, sw9, sw10, sw11, sw12 } from '../../assets/images'

const App = () => {
  const images = [head1, head2, head3, head4, head5, head6, head7, head8];
  const images2 = [sec1, sec2, sec3, sec4, sec5, sec6, sec7, sec8, sec9];
  const images3 = [ind1, ind2, ind3, ind4, ind5, ind6, ind7, ind8, ind9, ind10];
  const images4 = [sw1, sw2, sw3, sw4, sw5, sw6, sw7, sw8, sw9, sw10, sw11, sw12];
  return (
    <div>
      <Navbar />
      <HeaderBanner />
      <AutoScrollHeader1 images={images} />
      <AutoScrollHeader2 images={images2} />
      <ContentSolution />
      <OurServices />
      <Numbers />
      <PortFolio2 />
      <IndustriesAutoScroll images={images3} />
      <Approch />
      <CreativeCrew />
      <PowerCreativity images={images4} />
      <Testimonials />
      <Form />
      <CTAButton />
      <Footer />
    </div>
  )
}

export default App