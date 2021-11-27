import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"

import { Awakening, Enhancement, useGetUnitDetailsQuery } from "../../generated/graphql"
import { SkillDetail } from './Skill/SkillDetail';
import { AwakeningDetail } from './Awakening/AwakeningDetail';

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
            <div>
                <div className="row justify-start">
                    <span className="text-2xl text-midnightBlue font-semibold">{data?.unit.name}</span>
                </div>
                <div className="row py-4">
                    <img 
                        src={`${process.env.PUBLIC_URL}/assets/images/hero/thumbnail/${data?.unit.code}.png`}
                        alt={`Unit's thumbnail`}
                    />
                </div>
                <div className="">
                    <span className="text-2xl text-midnightBlue">Skills</span>
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
                <div className="container mt-4">
                        <div className="row justify-start">
                            <span className="text-2xl text-midnightBlue">Awakenings</span>
                        </div>
                        <div className="row mt-4 flex-wrap bg-white p-4 rounded shadow">
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
    )
}