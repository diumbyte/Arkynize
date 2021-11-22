import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"

import { Awakening, Enhancement, useGetUnitDetailsQuery } from "../../generated/graphql"
import { SkillDetail } from './Skill/SkillDetail';
import { AwakeningDetail } from './Awakening/AwakeningDetail';
import { UnitImagePreview } from "./UnitImagePreview"

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
                    <span className="text-2xl">{data?.unit.name}</span>
                </div>
                <UnitImagePreview 
                    name={data?.unit.name as string}
                    imageSource={`${process.env.PUBLIC_URL}/assets/images/hero/thumbnail/${data?.unit.code}.png`}
                    imageAlt={`Unit's thumbnail`}
                />
                <div className="container border-tavernBrown-light border-opacity-20 border-t border-b py-4">
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
                <div className="container pt-4">
                        <div className="row justify-start">
                            <span className="text-2xl pr-4">Awakenings</span>
                        </div>
                        <div className="row mt-4 flex-wrap">
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