import React from "react";
import { HomeContainer, Body, Rect, ContainerImg, ServicesBox, Card, CardGroup, Ul, Description } from "./styles";
import { useState } from "react";
import Image from "./people-office.jpeg";
// import Text from "../../ui/typography/text";

function Home() {
  const [hover, setHover] = useState(true);

  return (
    <HomeContainer>
      <ContainerImg>
        <Body 
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          hover={hover} 
          img={Image} 
        />
        <Rect 
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          hover={hover}
        >
          <div>
            {hover && (
              <>
                <div>Studio commercialista di Domodossola</div>
                <ServicesBox hover={hover}>
                  {hover && <div>I nostri servizi</div>}
                </ServicesBox>
              </>
            )}
          </div>
        </Rect>
      </ContainerImg>
      <CardGroup>
        <Card>
          qwe ew  we
        </Card>
        <Card>
          qwe ew  we
        </Card>
        <Card>
          qwe ew  we
        </Card>
      </CardGroup>
      <Description>
        Un commercialista svolge un ruolo essenziale nel contesto aziendale, fungendo da consUlente finanziario e esperto contabile. La sua presenza è vitale per garantire la salute finanziaria e la conformità legale di un'azienda. Di seguito sono elencate alcune delle principali utilità di cui un'azienda può beneficiare avvalendosi dei servizi di un commercialista.
        <Ul>
          <b>
            1. Pianificazione Fiscale Efficace:
          </b>
          <li>
          Il commercialista è un esperto nella complessa legislazione fiscale e può aiutare a strutturare la tua attività in modo da massimizzare i vantaggi fiscali. Una corretta pianificazione fiscale può consentire di risparmiare notevolmente sUlle imposte e migliorare la redditività complessiva dell'azienda.
          </li>
        </Ul>
        <Ul>
          <b>
            2. Gestione Contabile Precisa:
          </b>
          <li>
          Il commercialista gestisce la contabilità aziendale in modo accurato, garantendo che tutte le transazioni finanziarie siano registrate correttamente. Ciò fornisce una base solida per prendere decisioni informate sUlla gestione finanziaria e facilita la preparazione di report finanziari chiari e affidabili.
          </li>
        </Ul>
        <Ul>
          <b>
            3. Conformità Legale:
          </b>
          <li>
          L'azienda è soggetta a diverse normative fiscali e legali. Il commercialista assicura che l'azienda sia conforme a tutte le normative vigenti, riducendo così il rischio di sanzioni e controversie legali. Mantenere la conformità legale è cruciale per la reputazione e la stabilità finanziaria dell'azienda.
          </li>
        </Ul>
        <Ul>
          <b>
            4. ConsUlenza Strategica:
          </b>
          <li>
          Oltre alle responsabilità contabili, il commercialista può offrire preziosi consigli strategici. Partendo da una comprensione approfondita della situazione finanziaria dell'azienda, può contribuire a sviluppare piani di crescita, ottimizzare la struttura dei costi e migliorare l'efficienza operativa.
          </li>
        </Ul>
        <Ul>
          <b>
            5. Gestione del Budget:
          </b>
          <li>
          Il commercialista collabora nella creazione e gestione dei budget aziendali. Monitorare attentamente le entrate e le spese consente di mantenere sotto controllo le finanze aziendali e di apportare correzioni tempestive in caso di deviazioni.
          </li>
        </Ul>
        In conclusione, la partnership con un commercialista è una mossa strategica per qualsiasi azienda che mira a prosperare nel panorama aziendale competitivo di oggi. Le sue competenze non solo assicurano la conformità e la precisione contabile, ma contribuiscono anche a delineare una strategia finanziaria solida e a lungo termine.
      </Description>
    </HomeContainer>
  );
}

export default Home;
