import './About.css'

const About = () => {
    return (
        <>
           <main className="main-grid">
            <div className="head">
            <h1 className="page-title text-green-500">About us</h1>
            <p className="subtitle">At TripLink, we are committed to providing exceptional vehicle services that prioritize quality, efficiency, and customer satisfaction</p>
            </div>
            <img className="main-image" src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="two men in a coworking space"/>
            
            <div className="main-text">
                <h2 className="section-title text-green-500">Were really great guys</h2>
                <p className="subtitle">We understand the importance of reliable transportation, which is why we offer a comprehensive range of services, including routine maintenance, diagnostics, repairs, and more. Our state-of-the-art facilities are equipped with the latest tools and technology, enabling us to address a wide array of automotive issues efficiently and effectively.</p>
                <p className="subtitle">We have learned everything from scratch and spend sleepless nights to learn all the fundamentals es well as the advanced stuff to create projects. We love to work in a co-working space and thats why you will not find us a normal office.</p>
              
                <h2 className="section-title sub text-green-500">We can do all sorts of great stuff </h2>
                <p className="subtitle">Whether you need a simple oil change, brake inspection, or complex engine repair, you can rely on TripLink to deliver superior results at competitive prices. We strive to exceed your expectations and to make your experience with us as convenient and hassle-free as possible.</p>
                <p className="subtitle">So sure, maybe were a bit different from what youd expect, but if you want to get a professional Web presence were the guys for you.</p>
            </div>
      </main>

      <br /><br /><br /><br />
  
        </>
    );
};

export default About;