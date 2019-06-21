import React from 'react';
import {Carousel} from "react-responsive-carousel";

class About extends Carousel{
    render(){
     return(
          <>
              <div className="about_wrap">
                  <h2 className="about_wrap_h2">About Us</h2>
                  <p className="about_wrap_p">Cozy, comfortable, and affordably elegant, our guesthouse houses a unique clientele. Young backpackers stay in our made up dorms, parents and children in family rooms, and couples in private accommodation. We like to think our lodging serves as a meeting place for people from all walks of life.
                      Our restaurant is open for breakfast, lunch, and dinner, and serves a tasty menu of local fare. Travelers passing through the area will often stop by for a hearty meal.
                      You can also book trips, guides, and other activities, by speaking with our concierge at the front desk.</p>
              </div>
          </>
        )
    }
}
export default About;