import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const AccordionMenu = () => {
  return <>
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>✨Upcoming events in Madrid</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Take a look at some of upcoming concerts and DJ sessions in your favorite venues in Madrid🔥
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Antídoto Club (Diego Armando Invites): Anais B Thu, 5 Dec, 11:59 pm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Club Nights every thursday in Madrid.

            MAIN ROOM: Anais B + Dre Tala + Gidi + Diego Armando

            SECOND ROOM: Yosef + Dj Air + Lara Taylor
            <article className="botonera">
              <button onClick={() => window.open(`https://dice.fm/event/l83l2l-antdoto-club-diego-armando-invites-anais-b-5th-dec-art-club-madrid-tickets`, '_blank')}><span>BUY TICKETS</span></button>
            </article>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Funky Groove Sessions: DJ Soul X Fri, 6 Dec, 10:00 pm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Funky beats and deep grooves every Friday night.

            MAIN ROOM: DJ Soul X + The Funk Collective

            SECOND ROOM: Deep House Vibes + Jax M
            <article className="botonera">
              <button onClick={() => window.open(`https://dice.fm/event/xyz123-funky-groove-sessions-dj-soul-x-6th-dec-club-vibes-tickets`, '_blank')}>
                <span>BUY TICKETS</span>
              </button>
            </article>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Electro Nights: Beatmaster Sun, 7 Dec, 11:00 pm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A night of electrifying music and high-energy beats.

            MAIN ROOM: Beatmaster + Luna Nova + DJ Alex

            SECOND ROOM: Techno Underground + Marc F
            <article className="botonera">
              <button onClick={() => window.open(`https://dice.fm/event/xyz456-electro-nights-beatmaster-7th-dec-club-electro-tickets`, '_blank')}>
                <span>BUY TICKETS</span>
              </button>
            </article>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>Indie Vibes: The Killers Tribute Fri, 13 Dec, 9:00 pm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A tribute to The Killers in an intimate live setting.

            MAIN ROOM: The Killers Tribute Band

            SECOND ROOM: Indie Hits DJ Set
            <article className="botonera">
              <button onClick={() => window.open(`https://dice.fm/event/abc123-indie-vibes-the-killers-tribute-13th-dec-rock-club-tickets`, '_blank')}>
                <span>BUY TICKETS</span>
              </button>
            </article>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography>Techno Rave: Vero X Sat, 14 Dec, 11:00 pm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Immerse yourself in deep techno at one of the best raves in town.

            MAIN ROOM: Vero X + Vibe Bender
            <article className="botonera">
              <button onClick={() => window.open(`https://dice.fm/event/xyz789-techno-rave-vero-x-14th-dec-dance-club-tickets`, '_blank')}>
                <span>BUY TICKETS</span>
              </button>
            </article>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography>Drum and Bass/Jungle Legends: Old Skool Party Sat, 21 Dec, 10:00 pm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Classic Jungle and dnb tracks from the 90s and early 2000s.

            MAIN ROOM: Pendulum + Shy FX
            <article className="botonera">
              <button onClick={() => window.open(`https://dice.fm/event/abc456-hip-hop-legends-old-skool-party-21st-dec-club-hiphop-tickets`, '_blank')}>
                <span>BUY TICKETS</span>
              </button>
            </article>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  </>;
}
export default AccordionMenu;