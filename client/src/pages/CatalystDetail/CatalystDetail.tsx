import BattleIcon from "../../assets/battle.png"
import ShopIcon from "../../assets/shop.png"

import { useGetCatalystInfoQuery } from "../../generated/graphql"
import { EpisodeList } from "./EpisodeList"
import { ShopListing } from "./ShopListing"
import { DropListing } from "./DropListing"


type CatalystDetailProps = {
    id: number,
    name: string,
    imageSourcePath: string,
    imageAlt: string
}

export const CatalystDetail = ({
    id,
    name,
    imageSourcePath,
    imageAlt
}: CatalystDetailProps) => {
    const { data } = useGetCatalystInfoQuery({variables: {catalystId: id}})

    const episodeOneDrops = data?.drops.filter(d => d.stage.region.episode === "1")
    const episodeOneEpilogueDrops = data?.drops.filter(d => d.stage.region.episode === "1 Epilogue")
    const episodeTwoDrops = data?.drops.filter(d => d.stage.region.episode === "2")
    const episodeThreeDrops = data?.drops.filter(d => d.stage.region.episode === "3")
    
    const episodeOneShops = data?.shopItems.filter(si => si.region.episode === "1")
    const episodeOneEpilogueShops = data?.shopItems.filter(si => si.region.episode === "1 Epilogue")
    const episodeTwoShops = data?.shopItems.filter(si => si.region.episode === "2")
    const episodeThreeShops = data?.shopItems.filter(si => si.region.episode === "3")
    
    return (
        <div>
            <div className="row border-b border-black border-opacity-20 py-1">
                <img 
                    className="object-contain"
                    width={40}
                    src={imageSourcePath} 
                    alt={imageAlt}
                />
                <span className="text-2xl px-2 text-center">
                    {name}
                </span>
            </div>
            <div className="block md:flex md:justify-around">
                <div className="">
                    <div className="flex items-end justify-center">
                        <img src={BattleIcon} alt="Battle icon" className="object-contain" width={36}/>
                        <h2 className="text-2xl">Drops</h2>
                    </div>
                    <EpisodeList name="Episode 1">
                        {
                            episodeOneDrops?.map(drop => {
                                return <DropListing
                                    key={drop.stage.id}
                                    chapter={drop.stage.region.chapter}
                                    instance={drop.stage.instance}
                                    energyCost={drop.stage.energy}
                                    pointsGained={drop.stage.points}
                                />
                            })
                        }
                    </EpisodeList>
                    <EpisodeList name="Episode 1 Epilogue">
                        {
                            episodeOneEpilogueDrops?.map(drop => {
                                return <DropListing
                                    key={drop.stage.id}
                                    chapter={drop.stage.region.chapter}
                                    instance={drop.stage.instance}
                                    energyCost={drop.stage.energy}
                                    pointsGained={drop.stage.points}
                                />
                            })
                        }
                    </EpisodeList>
                    <EpisodeList name="Episode 2">
                        {
                            episodeTwoDrops?.map(drop => {
                                return <DropListing
                                    key={drop.stage.id}
                                    chapter={drop.stage.region.chapter}
                                    instance={drop.stage.instance}
                                    energyCost={drop.stage.energy}
                                    pointsGained={drop.stage.points}
                                />
                            })
                        }
                    </EpisodeList>
                    <EpisodeList name="Episode 3">
                        {
                            episodeThreeDrops?.map(drop => {
                                return <DropListing
                                    key={drop.stage.id}
                                    chapter={drop.stage.region.chapter}
                                    instance={drop.stage.instance}
                                    energyCost={drop.stage.energy}
                                    pointsGained={drop.stage.points}
                                />
                            })
                        }
                    </EpisodeList>
                </div>
                <div className="">
                    <div className="flex items-end justify-center">
                        <img src={ShopIcon} alt="Shop icon" className="object-contain" width={36}/>
                        <h2 className="text-2xl">Shops</h2>
                    </div>
                    <EpisodeList name="Episode 1">
                        {
                            episodeOneShops?.map(shop => {
                                return <ShopListing 
                                    key={shop.region.chapter}
                                    chapter={shop.region.chapter}
                                    price={shop.price}
                                />
                            })
                        }
                    </EpisodeList>
                    <EpisodeList name="Episode 1 Epilogue">
                        {
                            episodeOneEpilogueShops?.map(shop => {
                                return <ShopListing
                                    key={shop.region.chapter}
                                    chapter={shop.region.chapter}
                                    price={shop.price}
                                 />
                            })
                        }
                    </EpisodeList>
                    <EpisodeList name="Episode 2">
                        {
                            episodeTwoShops?.map(shop => {
                                return <ShopListing
                                    key={shop.region.chapter}
                                    chapter={shop.region.chapter}
                                    price={shop.price}
                                 />
                            })
                        }
                    </EpisodeList>
                    <EpisodeList name="Episode 3">
                        {
                            episodeThreeShops?.map(shop => {
                                return <ShopListing
                                    key={shop.region.chapter}
                                    chapter={shop.region.chapter}
                                    price={shop.price}
                                 />
                            })
                        }
                    </EpisodeList>
                </div>
            </div>
        </div>
    )
}