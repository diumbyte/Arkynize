import { useState, useEffect, useRef } from "react"
import { saveState } from "../../redux/localStorage"
import { importStore, resetStore, TrackedUnitsState } from "../../redux/actions/unitsReducer"
import { useAppDispatch } from "../../redux/hooks"

import store from "../../redux/store"

export const Settings = () => {
    const [fileDownloadURL, setFileDownloadURL] = useState("")
    const downloadRef = useRef<HTMLAnchorElement>(null)
    const uploadRef = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()
    
    const downloadJSON = () => {
        const output = JSON.stringify(store.getState().units, null, 4)
        const blob = new Blob([output])
        const fileDownloadURL = URL.createObjectURL(blob)
        setFileDownloadURL(fileDownloadURL)
    }

    useEffect(() => {
        if (fileDownloadURL !== "") {
            downloadRef.current?.click()
            URL.revokeObjectURL(fileDownloadURL)
            setFileDownloadURL("")
        }
    }, [fileDownloadURL])

    const openFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files !== null){
            const fileObj = e.target.files[0]
            const reader = new FileReader()

            reader.onload = e => {
                const fileContents = e.target?.result
                const res = JSON.parse(fileContents?.toString() as string) as TrackedUnitsState
                dispatch(importStore(res))
                saveState({units: res})
            }
            reader.readAsText(fileObj)
        }
        window.location.reload()
    }

    return (
        <div className="mx-auto w-4/5 max-w-7xl flex flex-col items-center justify-center space-y-10">
            <button 
                    className="primaryButton active:bg-buttonGreen-dark md:w-1/5 w-1/2"
                    onClick={downloadJSON}
                >
                    Export Data
            </button>
            <a
                className="hidden"
                href={fileDownloadURL}
                download={"e7planner.json"}
                ref={downloadRef}
            >Export data</a>
            <button 
                    className="primaryButton active:bg-buttonGreen-dark md:w-1/5 w-1/2"
                    onClick={() => {
                        uploadRef.current?.click()
                    }}
                >
                    Import Data
            </button>
            <input type="file" className="hidden"
                multiple={false}
                accept=".json,application/json"
                ref={uploadRef}
                onChange={openFile}
            />
            <div
                    className="cursor-pointer p-4 bg-red-500 rounded-lg text-center border-black border-opacity-20 border-2 outline-none w-1/2 md:w-1/5"
                    onClick={() => {
                        dispatch(resetStore())
                        window.location.reload()
                    }}
                >
                    Clear Data
                </div>
        </div>
    )
}