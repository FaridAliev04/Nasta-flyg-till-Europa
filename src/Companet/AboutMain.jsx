import { useEffect, useState } from "react";
import React from "react";
import { supabase } from "../supabase";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Slide } from "react-awesome-reveal";

const AboutMain = () => {


  return (
    <div className="about_main">
      <div className="flag">
        <Slide className="slide_flag-img">
          <div className="about_main-flag_div">
            <img
              className="about_main-flag_img"
              src="aboutCity/Austria.jpg"
              alt=""
            />
          </div>
        </Slide>

        <Slide direction='right' className="slide_flag-text">
          <div className="flag_text">
            <h1 className="about_main-flag_name">Österrike</h1>
            <p className="about_main-flag-text">
              Österrike (tyska: Österreich), formellt Republiken Österrike
              (tyska: Republik Österreich), är en inlandsstat i Centraleuropa.
              Österrike gränsar till både Tyskland och Tjeckien i norr,
              Slovakien och Ungern i öster, Slovenien och Italien i söder och
              Schweiz och Liechtenstein i väster. Huvudstaden är Wien som ligger
              vid floden Donau. Österrikes ursprung dateras tillbaka till
              800-talet då territorierna Oberösterreich och Niederösterreich
              blev alltmer befolkade. Namnet "Ostarrichi" finns först
              dokumenterat i ett officiellt dokument år 996. Sedan dess har
              namnet utvecklats till Österreich.
            </p>

            <a
              className="about_main-link-wikipedia"
              href="https://sv.wikipedia.org/wiki/Austria"
              target="_blank"
            >
              lär dig mer <AiOutlineArrowRight className="about_link-icons" />
            </a>
          </div>
        </Slide>
      </div>
      <div className="flag">
        <Slide className="slide_flag-img">
          <div className="about_main-flag_div">
            <img
              className="about_main-flag_img"
              src="aboutCity/Denmark.jpg"
              alt=""
            />
          </div>
        </Slide>
        <Slide direction='right' className="slide_flag-text">
          <div className="flag_text">
            <h1 className="about_main-flag_name">Denmark</h1>
            <p className="about_main-flag-text">
              Danmark (danska: Danmark, uttalas [ˈtænmɑk]) är ett nordiskt land
              i norra Europa. Det är storstadsdelen av och den mest folkrika
              beståndsdelen av kungariket Danmark, en konstitutionellt enhetlig
              stat som omfattar de autonoma områdena Färöarna och Grönland i
              Nordatlanten. Metropolitan Danmark är den sydligaste av de
              skandinaviska länderna, som ligger sydväst och söder (Bornholm och
              Ertholmene) om Sverige, söder om Norge och norr om Tyskland, med
              vilken den delar en kort gräns, Danmarks enda landgräns.
            </p>
            <a
              className="about_main-link-wikipedia"
              href="https://sv.wikipedia.org/wiki/Denmark"
              target="_blank"
            >
              lär dig mer <AiOutlineArrowRight className="about_link-icons" />
            </a>
          </div>
        </Slide>
      </div>
      <div className="flag">
        <Slide className="slide_flag-img">
          <div className="about_main-flag_div">
            <img
              className="about_main-flag_img"
              src="aboutCity/Germany.jpg"
              alt=""
            />
          </div>
        </Slide>
        <Slide direction='right' className="slide_flag-text">
          <div className="flag_text">
            <h1 className="about_main-flag_name">Tyskland</h1>
            <p className="about_main-flag-text">
              Tyskland,officiellt Förbundsrepubliken Tyskland, är ett land i
              Centraleuropa. Det är det näst folkrikaste landet i Europa efter
              Ryssland, och det mest folkrika medlemslandet i Europeiska
              unionen. Tyskland ligger mellan Östersjön och Nordsjön i norr och
              Alperna i söder. Dess 16 delstater gränsar till Danmark i norr,
              Polen och Tjeckien i öster, Österrike och Schweiz i söder och
              Frankrike, Luxemburg, Belgien och Nederländerna i väster.
              Nationens huvudstad och mest folkrika stad är Berlin och dess
              främsta finansiella centrum är Frankfurt; det största
              tätortsområdet är Ruhr.
            </p>
            <a
              className="about_main-link-wikipedia"
              href="https://sv.wikipedia.org/wiki/Germany"
              target="_blank"
            >
              lär dig mer <AiOutlineArrowRight className="about_link-icons" />
            </a>
          </div>
        </Slide>
      </div>
      <div className="flag">
        <Slide className="slide_flag-img">
          <div className="about_main-flag_div">
            <img
              className="about_main-flag_img"
              src="aboutCity/Sweden.jpg"
              alt=""
            />
          </div>
        </Slide>
        <Slide direction='right' className="slide_flag-text">
          <div className="flag_text">
            <h1 className="about_main-flag_name">Sverige</h1>
            <p className="about_main-flag-text">
              Sverige ([sværjɛ] ( lyssna)), formellt Konungariket Sverige
              ([ˈkôːnɵŋaˌriːkɛt ˈsvæ̌rjɛ] ( lyssna)), är ett land som ligger på
              Skandinaviska halvön i Nordeuropa. Sverige har landgräns i väst
              med Norge, i nordost med Finland samt angränsande
              territorialvatten till Norge i västsydväst, Danmark i sydväst och
              Finland i öst. Landet har kuster mot Bottenviken, Bottenhavet,
              Ålands hav, Östersjön, Öresund, Kattegatt och Skagerrak. Sverige
              hade den 28 februari 2023 enligt SCB en befolkning på 10 528 561
              och är, med en area (inklusive sjöar) på 447 425 km², det
              geografiskt femte största landet i Europa.
            </p>
            <a
              className="about_main-link-wikipedia"
              href="https://sv.wikipedia.org/wiki/Sverige"
              target="_blank"
            >
              lär dig mer <AiOutlineArrowRight className="about_link-icons" />
            </a>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default AboutMain;
