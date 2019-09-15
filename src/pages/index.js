import React from "react"
import styled from "styled-components"
import NewsList from "../components/news/newslist"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"
import ResourcesList from "../components/resources/resources-list";
import { IndexPageWrapper } from "./de";

const renderComponent = (
  <IndexPageWrapper>
    <p>Our first step into the city of Berlin is to settle into the ground level space of a tower belonging to the architectural complex of ExRotaprint in the neighborhood of Wedding. We start with three sequential moments, exp. 1, exp. 2, and exp. 3, unfolding from September 2019 to May 2020. From June 13 to September 13, 2020, the 11th Berlin Biennale will bring forth these experiences at various venues throughout the city. exp. 1: The Bones of the World has just begun.</p>
    <p>How do each of us bare ourselves to the world? exp. 1: The Bones of the World is an attempt to hold on to the complicated beauty of life when the fire has erupted. Not an obsession with the ruins, but an attempt to be attentive to what is made with the rubble. A way of working with and remaining beside that which moves us now. As an exhibition it is a setting, an exercise in mutual exposure, a place to listen to the stories that shape us—stories we have shared with one another, and stories that have not yet been told. It is a space open to the diverse experiences that we bring with us, but also to those occurring around us, outside our comfort zones, at this very moment.</p>
    <p>Os Ossos do Mundo [The Bones of the World] is also the title of a travelog written by the Brazilian artist Flávio de Carvalho (1899–1973) during his time in Europe in the mid-1930s. Today it reads as a kind of reverse ethnography of the Old World. For us, The Bones of the World is a point of departure, an initial motion, aware of the rawness of time and its broken promises. At the same time, it is a joyous acknowledgement of life occurring amidst, against, and despite the general states of brokenness all around us. From here, we move.</p>
    <p>With works and contributions by:

Marwa Arsanios, Felix Brüggemann, Flávio de Carvalho, Léo Corrêa, Die Remise (Ali Akyol, Jacqueline Aslan, Stefan Bast, Muriel Biedrzycki, Julia Brunner, Fatma Cakmak, Stefan Endewardt, Tobi Euler, Melina Gerstemann, Ayşe Güleç, Juanita Kellner, Angelika Levi, Carmen Mörsch, Shanti Suki Osman, Ayse Preissing, Markus Schega, Miriam Schickler, Aylin Turgay, and pupils from the Nürtingen and Heinrich-Zille elementary schools, with Çiçek Bacık, Aïcha Diallo, Kotti-Shop, Annika Niemann), Feminist Health Care Research Group (Inga Zimprich/Julia Bonn), Andrés Fernández, Florian Gass, Till Gathmann, Mauricio Gatti, Eiko Grimberg, Sheroanawe Hakihiiwe, Âlut Kangermio, Mapa Teatro, Virginia de Medeiros, Marcelo Moreschi, Museo de la Solidaridad Salvador Allende, Mirja Reuter, Teatro da Vertigem, Teo, Cecilia Vicuña, Osías Yanov, and more.</p>
  </IndexPageWrapper>
)
const IndexPage = () => {
  const firstColumn = (
    <>
    <UpcomingEvents />
    </>
  )
  const secondColumn = (
    <>
    <p> Hello </p>
    </>
  )
  return (
    <Layout
    firstColumn={<ResourcesList />}
    secondColumn={renderComponent}
    numberOfColumnsIsTwo={true}
    thirdColumn={<UpcomingEvents />}
  />
  )

}

export default IndexPage
