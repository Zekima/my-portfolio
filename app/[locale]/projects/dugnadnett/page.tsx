import { Globe, Github } from "lucide-react"

export default async function Page() {
    return (
        <div className="pb-72 space-y-12">
            <div className="w-full h-[400px] bg-primary clear-start flex justify-center">
                <img src="/images/dugnadnett-1.png" alt="DugnadNett Mockup" className="object-contain" />

            </div>
            <div className="flex flex-col lg:flex-row gap-y-16 ">
                <div className="space-y-4 lg:w-1/2">
                    <p className="text-6xl font-medium">DugnadNett</p>
                    <p className="text-3xl">Bachelorprosjekt</p>
                </div>



                <div className="lg:w-1/2 space-y-12">



                    <div className="space-y-2 font-medium">

                        <p className="text-2xl font-light">
                            Dette prosjektet utviklet en digital plattform for å organisere dugnader, med sanntidskommunikasjon, filtrering og en sentral oversikt over lokale dugnader.
                        </p>


                    </div>

                    <p className="font-medium  text-xl bg-secondary p-4 text-center">
                        "Hvordan kan en webapplikasjon forbedre dugnadorganisering ved å overkomme begrensninger ved sosiale medier?"
                    </p>

                    <div className="space-y-2 font-medium">
                        <p className="text-2xl font-light">
                            Gjennom prosjektet har jeg utviklet en dypere forståelse for kode og kommunikasjon i team, spesielt hvordan man effektivt kan diskutere og gi tilbakemeldinger på kode. Jeg har lært å uttrykke tekniske løsninger tydelig og motta konstruktiv kritikk, noe som har vært avgjørende for å forbedre kodekvaliteten og samarbeidet mellom gruppemedlemmer.
                        </p>
                    </div>




                    <div className="flex gap-4 pt-4 flex-wrap text-xl">
                        <div className="flex gap-2 underline items-center ">
                            <img src="/icons/pdf-icon.png" alt="PDF icon" width={24} />
                            <p className="">DugnadNett.pdf</p>
                        </div>
                        <div className="flex gap-2 items-center underline">
                            <Globe width={28} />
                            <p className="">www.dugnadnett.no</p>
                        </div>
                        <div className="flex gap-2 items-center underline">
                            <Github width={28} />
                            <p className="">Kildekode</p>
                        </div>

                    </div>

                </div>



            </div>


        </div>


    )
}