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
                    {
                        groupedDropsByEpisode
                            ?.map(groupedDrops => 
                                (
                                    <EpisodeList name={`Episode ${groupedDrops.episode}`}>
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
                <div className="">
                    <div className="flex items-end justify-center">
                        <img src={ShopIcon} alt="Shop icon" className="object-contain" width={36}/>
                        <h2 className="text-2xl">Shops</h2>
                    </div>
                    {
                        groupedShopsByEpisode
                            ?.map(groupedShopItems => 
                                (
                                    <EpisodeList name={`Episode ${groupedShopItems.episode}`}>
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