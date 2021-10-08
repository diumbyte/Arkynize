import React from 'react';
import { Awakening, Enhancement, useGetUnitDetailsQuery } from "../generated/graphql"
import { useParams } from "react-router-dom"
import { SkillDetail } from './components/SkillDetail';
import { AwakeningDetail } from './components/AwakeningDetail';
import { ReactComponent as PlusIcon } from "../assets/plus.svg"

type UnitParams = {
    unitId: string
}

export const UnitDetail = () => {
    const {unitId} = useParams<UnitParams>();
    const { data } = useGetUnitDetailsQuery({variables: {unitId: Number(unitId)}});
    
    return (
        <div className="w-full">
            <div className="row justify-start">
                <span className="text-2xl">{data?.unit.name}</span>
            </div>
            <div className="row py-4">
                <img 
                    className=""
                    src={`${process.env.PUBLIC_URL}/assets/images/hero/thumbnail/${data?.unit.code}.png`} 
                    alt={`${data?.unit.name}'s thumbnail`}
                />
            </div>
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
                            enhancements={skill.enhancements as Array<Enhancement>}
                        />)
                    }
                </div>
            </div>
            <div className="container pt-4">
                    <div className="row justify-start">
                        <span className="text-2xl pr-4">Awakenings</span>
                    </div>
                    <div className="row mt-4 flex-wrap">
                        <AwakeningDetail awakenings={data?.getAwakeningsForUnit as Array<Awakening>}/>
                    </div>
            </div>
        </div>
    )
}