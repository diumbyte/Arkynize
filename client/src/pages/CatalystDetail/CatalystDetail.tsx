import { useState } from "react"

import BattleIcon from "../../assets/battle.png"
import ShopIcon from "../../assets/shop.png"

import { Drop, ShopItem, useGetCatalystInfoQuery } from "../../generated/graphql"
import { EpisodeList } from "./EpisodeList"
import { ShopListing } from "./ShopListing"
import { DropListing } from "./DropListing"


type CatalystDetailProps = {
    id: number,
    name: string,
    imageSourcePath: string,
    imageAlt: string
}

type GroupedDrop = {
    episode: string,
    drops?: Drop[],
}

type GroupedShopItem = {
    episode: string,
    shopItems?: ShopItem[]
}

export const CatalystDetail = ({
    id,
    name,
    imageSourcePath,
    imageAlt
}: CatalystDetailProps) => {
    const { data } = useGetCatalystInfoQuery({variables: {catalystId: id}})
    const [isDropsSelected, setIsDropsSelected] = useState(true)
    
    const groupedDropsByEpisode = data?.drops.reduce<GroupedDrop[]>((total, currentDrop) => {
        const dropIdx = total.findIndex(d => d.episode === currentDrop.stage.region.episode)

        if(dropIdx !== -1) {
            total.at(dropIdx)?.drops?.push(currentDrop)
        } else {
            total.push({
                episode: currentDrop.stage.region.episode,
                drops: [currentDrop]
            })
        }

        return total
    }, [])

    const groupedShopsByEpisode = data?.shopItems.reduce<GroupedShopItem[]>((total, currentShopItem) => {
        const shopItemIdx = total.findIndex(si => si.episode === currentShopItem.region.episode)
        
        if(shopItemIdx !== -1) {
            total.at(shopItemIdx)?.shopItems?.push(currentShopItem)
        } else {
            total.push({
                episode: currentShopItem.region.episode,
                shopItems: [currentShopItem]
            })
        }
        
        return total
    }, [])
    
    return (
        <div>
            <div className="row border-b border-black border-opacity-20 py-1 mb-2">
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
            {/* Tabbed navigation for mobile view */}
            <div className="flex md:hidden">
                <div 
                    className={`flex-1 pb-2 flex items-end justify-center ${isDropsSelected ? "border-b-2 border-midnightBlue" : ""}`}
                    onClick={() => setIsDropsSelected(true)}
                >
                        <img src={BattleIcon} alt="Battle icon" className="object-contain" width={36}/>
                        <h2 className="text-2xl">Drops</h2>
                </div>
                <div 
                    className={`flex-1 pb-2 flex items-end justify-center ${isDropsSelected ? "" : "border-b-2 border-midnightBlue"}`}
                    onClick={() => setIsDropsSelected(false)}
                >
                        <img src={ShopIcon} alt="Shop icon" className="object-contain" width={36}/>
                        <h2 className="text-2xl">Shops</h2>
                </div>
            </div>
            <div className="block md:flex md:justify-around">
                <div className={`md:block ${isDropsSelected ? "block" : "hidden"}`}>
                    <div className="hidden md:flex items-end justify-center">
                        <img src={BattleIcon} alt="Battle icon" className="object-contain" width={36}/>
                        <h2 className="text-2xl">Drops</h2>
                    </div>
                    {
                        groupedDropsByEpisode
                            ?.map(groupedDrops => 
                                (
                                    <EpisodeList key={groupedDrops.episode} name={`Episode ${groupedDrops.episode}`}>
                                        {
                                            groupedDrops.drops?.map(drop => {
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
                                )
                            )
                    }
                </div>
                <div className={`md:block ${isDropsSelected ? "hidden" : "block"}`}>
                    <div className="hidden md:flex items-end justify-center">
                        <img src={ShopIcon} alt="Shop icon" className="object-contain" width={36}/>
                        <h2 className="text-2xl">Shops</h2>
                    </div>
                    {
                        groupedShopsByEpisode
                            ?.map(groupedShopItems => 
                                (
                                    <EpisodeList key={groupedShopItems.episode} name={`Episode ${groupedShopItems.episode}`}>
                                        {
                                            groupedShopItems.shopItems?.map(shop => (
                                                <ShopListing 
                                                    key={shop.region.chapter}
                                                    chapter={shop.region.chapter}
                                                    price={shop.price}
                                                />
                                            ))
                                        }
                                    </EpisodeList>
                                )
                            )
                    }
                </div>
            </div>
        </div>
    )
}