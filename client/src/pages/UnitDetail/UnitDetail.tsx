import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"

import { Awakening, Enhancement, useGetUnitDetailsQuery } from "../../generated/graphql"
import { SkillDetail } from './Skill/SkillDetail';
import { AwakeningDetail } from './Awakening/AwakeningDetail';
import StarIcon from "../../assets/star.png"

type UnitParams = {
    unitId: string
}

export const UnitDetail = () => {
    const {unitId} = useParams<UnitParams>();
    const { data } = useGetUnitDetailsQuery({variables: {unitId: Number(unitId)}});
    
    return (
        <div className="w-full">
            <Helmet>
                {
                    data !== undefined &&
                    <title>{data?.unit.name} - Arkynized</title>
                }
            </Helmet>
            <div className="flex items-start justify-between space-x-20">
                <div className="flex flex-col justify-center w-min bg-white rounded shadow px-8 py-4">
                    <img 
                        className="mx-auto"
                        width={120}
                        src={`${process.env.PUBLIC_URL}/assets/images/hero/icon/${data?.unit.code}.png`}
                        alt={`Unit's thumbnail`}
                    />
                    <span className="text-xl font-semibold text-center">{data?.unit.name}</span>
                    <div className="flex items-center">
                        <span className="text-gray-400">Attribute: </span>
                        <img 
                            width={24}
                            src={`${process.env.PUBLIC_URL}/assets/images/attribute/${data?.unit.attribute.id}.png`}
                            alt={`Attribute icon`}
                        />
                        <span className="capitalize">{data?.unit.attribute.name}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-400">Zodiac: </span>
                        <img 
                            width={24}
                            src={`${process.env.PUBLIC_URL}/assets/images/zodiac/${data?.unit.zodiac?.id}.png`}
                            alt={`Zodiac icon`}
                        />
                        <span className="capitalize">{data?.unit.zodiac?.name}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-400">Rarity: </span>
                        {
                            [...Array(data?.unit.rarity.value)].map((x, i) => {
                                return (
                                    <img className="object-contain" width={16} src={StarIcon} alt="Star icon"/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex-1 flex flex-col w-max">
                    <div className="flex flex-col">
                        <span className="text-2xl">Skills</span>
                        <div className="flex flex-col mt-4">
                            {data?.getUnitSkills.map(skill => 
                                <SkillDetail 
                                    key={skill.id}
                                    id={skill.id} 
                                    name={skill.name} 
                                    type={skill.type} 
                                    code={skill.code}
                                    enhancements={skill.enhancements as Enhancement[]}
                                    unitId={data.unit.id}
                                    unitCode={data.unit.code}
                                    unitName={data.unit.name}
                                />)
                            }
                        </div>
                    </div>
                    <div className="mt-4">
                            <div className="">
                                <span className="text-2xl">Awakenings</span>
                            </div>
                            <div className="flex flex-nowrap mt-4 bg-white p-4 rounded shadow">
                                <AwakeningDetail 
                                    awakenings={data?.getAwakeningsForUnit as Awakening[]} 
                                    unitId={data?.unit.id}
                                    unitCode={data?.unit.code}
                                    unitName={data?.unit.name}
                                />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}