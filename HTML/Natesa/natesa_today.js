"use strict";

/*
   Author: Msimango
   Date:   2023-03-12

   This script uses the getEvent() function to return the
   HTML code containin the daily events at the Natesa TUT.

*/

/* Determine the current date and time */
var thisDate = new Date();
var dateString = thisDate.toLocaleDateString('en-us');

/* Write the current date in an h2 heading using the local date conventions */
var dateHTML = "<h2>" + dateString + "</h2>";

/* Determine the day of the week */
var thisDay = thisDate.getDay();
var eventHTML = getEvent(thisDay);

/* Write today's events to the web page */
document.getElementById("natesaToday").insertAdjacentHTML("beforeEnd"+ dateHTML + eventHTML);





function getEvent(day) {
   var eventHTML;
   switch (day) {
      case 0: // Sunday Events
      eventHTML = '<dl> \
         <dt>Natesa Closing Function</dt> \
         <dd><p>Dance ceremony(umgidi)</p> \
             <p><strong>Location:</strong> TCE Sports ground</p> \
             <p><strong>Time:</strong> 12 am &ndash; 1 pm</p> \
             <p><strong>Cost:</strong> Free</p> \
         </dd> \
         <dt>Natesa Intervaisty Competition</dt> \
         <dd><p>Choral, sketch, and dance.</p> \
             <p><strong>Location:</strong> UKZ Durban Westville Campus</p> \
             <p><strong>Time:</strong> 710 am &ndash 15 pm</p> \
             <p><strong>Cost:</strong> Free for TUT Natesa members, and participating students. R30.50 all others</p> \
        //video/audio goes here:       </dd> \
      </dl>';
      break;
      case 1: // Monday Events
      eventHTML = '<dl> \
         <dt>Monday Billiards</dt> \
         <dd><p>Play in the BC Billiards league for fun and prizes</p> \
             <p><strong>Location:</strong> Union Game Room </p> \
             <p><strong>Time:</strong> 7 pm &ndash; 11 pm</p> \
             <p><strong>Cost:</strong> R30.50 for registration</p> \
         </dd> \
         <dt>Distinguished Lecture Series</dt> \
         <dd><p>Cultural critic <em>Elizabeth Kellog</em> speaks on the issues of the day.</p> \
             <p><strong>Location:</strong> Union Theater</p> \
             <p><strong>Time:</strong> 7 pm &ndash; 9 pm</p> \
             <p><strong>Cost:</strong> free, seating is limited</p> \
         </dd> \
      </dl>';
      break;
      case 2: // Tuesday Events
      eventHTML = '<dl> \
         <dt>umgidi wamakhosana cpmetition</dt> \
         <dd><p>Azikhale!!!!!!...</p> \
             <p><strong>Location:</strong> pretoria west campus</p> \
             <p><strong>Time:</strong> 10 am &ndash; 12 pm</p> \
             <p><strong>Cost:</strong> Free</p> \
          //video/audio/image goes here:            </dd> \
         <dt>Spotlight Series</dt> \
         <dd><p>Former Lieutenant Governor, Joe Tierney, will present <em>The Dream Alive Program</em>, \
                celebrating the life of Martin Luther King, Jr.</p> \
             <p><strong>Location:</strong> </p> \
             <p><strong>Time:</strong> 7 pm &ndash; 8:30 pm</p> \
             <p><strong>Cost:</strong> free</p> \
             <video controls>\
             <source src="choral.mp4" type="video/ogg"> \
          </video> </dd> \
      </dl>';
      break;
         case 3: // Wednesday Events
      eventHTML = '<dl> \
         <dt>Grade 12 University Application Day</dt> \
         <dd><p>Over 20 Natesa members with laptops will be on hand to assist school learners from nearby communities \
               to apply for a space in Gauteng Universities. \
               tutoring, health care, elder care, etc. </p> \
             <p><strong>Location:</strong> University of Johannesburg, Soweto Campus</p> \
             <p><strong>Time:</strong> 9 am &ndash; 4 pm</p> \
             <p><strong>Cost:</strong> Free</p> \
         //image goes here: natesaRegistration.jpg      </dd> \
         <dt>Natesa Music Competition</dt> \
         <dd><p>Volunteer and gain experience in all areas of the music business: book bands, \
                create promotional campaigns, meet new people.</p> \
             <p><strong>Location:</strong> Ga-Rakuwa, Aula Hall </p> \
             <p><strong>Time:</strong> 5 pm &ndash; 6:30 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         </dd> \
         <dt>Natesa Poem Competition</dt> \
         <dd><p><em>Somandla ngiphe amandla, ngisho ngamandla, ngithi Amandla!!!!</em></p> \
             <p><strong>Location:</strong> TUT Arts Campus</p> \
             <p><strong>Time:</stgrong> 7 pm &ndash; 9 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         //video goes here: Amandla.m4a    </dd> \
      </dl>';
      break;
      case 4: // Thursday Events
      eventHTML = '<dl> \
         <dt>NABACHU meets NATESA</dt> \
         <dd><p>The youth branch of the Nazareth Baptist Church known as \
         NABACHU will be meeting the tertiary branch of church known as NTESA \.</p> \
             <p><strong>Location:</strong> TUT Pretoria Main Campus</p> \
             <p><strong>Time:</strong> 8 am &ndash; 14:00 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         //video goes here: intethelelo.mp4 \
         </dd> \
         <dt>NATESA meets King Misuzulu kaZwelithini</dt> \
         <dd><p><em>Intaka ibekelwe amazolo!</em> Inkonzo yentsha yaMaNazaretha neSilo samabandla.Simi Nawe Silo Sethu!</p> \
             <p><strong>Location:</strong> KwaKhangelamankengane Royal Palace</p> \
             <p><strong>Time:</strong> 10 pm &ndash; 16:00 pm</p> \
             <p><strong>Cost:</strong> Free</p> \
         //video goes here: silo.mp4\
      </dl>';
      break;
         case 5: // Friday Events
      eventHTML = '<dl> \
         <dt>Choral Competition</dt> \
         <dd><p>Meet people from you will get to know your fellow \
               members of NaTeSa who are on other campuse, universities\
                and technickons. Enjoy coffee, snacks, choral music and \
                informal conversation with students from other \
                cultures and interests.</p> \
             <p><strong>Location:</strong> DUT Indumiso Campus</p> \
             <p><strong>Time:</strong> 11:30 am &ndash; 1 pm</p> \
             <p><strong>Cost:</strong> free</p> \
             //video/audio/image goes here: VID-20210726-WA0008.mp4  \
         </dd> \
         <dt>Amakhosazana Bridal Ceremony</dt> \
         <dd><p><em>Bride maids and grooms</em> will perform \
                ukusina dance and singing during the ceremony.</p> \
             <p><strong>Location:</strong> Ubuhleni Home</p> \
             <p><strong>Time:</strong> 9 am &ndash; 4 pm</p> \
             <p><strong>Cost:</strong> free</p> \
             //video/audio/image goes here: VID-20210409-WA0052.mp4 \
         </dd> \
         <dt>Friday Nite Movies</dt> \
         <dd><p><em>Masters of Fate</em></p> \
             <p><strong>Location:</strong> Fredric Whyte Play Circle</p> \
             <p><strong>Time:</strong> 7 pm &ndash; 9:30 pm; 10 pm &ndash; midnight</p> \
             <p><strong>Cost:</strong> R50.50</p> \
         </dd> \
      </dl>';
      break;
      case 6: // Saturday Events
      eventHTML = '<dl> \
         <dt>Kites on the Concourse</dt> \
         <dd><p>Enjoy beautiful kites from around the world and then make and \
                fly kites of your own invention.</p>\
             <p><strong>Location:</strong> Union Concourse</p> \
             <p><strong>Time:</strong> 10 am &ndash; 3 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         </dd> \
         <dt>Saturday Bargain Billiards</dt> \
         <dd><p>Play unlimited pool every Saturday night.</p> \
             <p><strong>Location:</strong> Union Game Room</p> \
             <p><strong>Time:</strong> 7 pm &ndash; 11:30 pm</p> \
             <p><strong>Cost:</strong> R40.25 with student ID</p> \
         </dd> \
         <dt>Great Hall Music Ball </dt> \
         <dd><p><em>Ian Gold and Free Space</em> perform contemporary \
             pop and rock.</p> \
             <p><strong>Location:</strong> Great Hall</p> \
             <p><strong>Time:</strong> 8 pm &ndash; midnight</p> \
             <p><strong>Cost:</strong> R50.75 with student ID</p> \
         </dd> \
      </dl>';
      break;
   }

   return eventHTML
}
