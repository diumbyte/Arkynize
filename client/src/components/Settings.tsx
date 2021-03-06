import { useState, useEffect, useRef } from "react"
import { importStore, resetStore, TrackedUnitsState } from "../redux/unitsReducers"
import { useAppDispatch } from "../redux/hooks"
import { toast } from "react-hot-toast"
import validateImportFile from "../util/validateImportFile"
import { ErrorButton, NeutralButton } from "./FormButton"

import store from "../redux/store"

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
        if(e.target.files?.length !== 0){
            if(e.target.files !== null) {
                const fileObj = e.target.files[0] as File
                const reader = new FileReader()
    
                reader.onload = e => {
                    const fileContents = e.target?.result?.toString() as string
                    if(validateImportFile(fileContents)) {
                        const res = JSON.parse(fileContents) as TrackedUnitsState
                        dispatch(importStore(res))
                        toast.success("File imported")                        
                    } else {
                        console.error("FAILED")
                        toast.error("File invalid")
                    }
                }
                reader.readAsText(fileObj)
            }
        }
    }

    return (
        <div className="mx-auto w-4/5 max-w-7xl flex flex-col items-center justify-center space-y-10">
            <NeutralButton
                className="w-4/5 md:w-1/5"
                onClick={downloadJSON}
            >
                Export Data
            </NeutralButton>
            <a
                className="hidden"
                href={fileDownloadURL}
                download={"arkynized.json"}
                ref={downloadRef}
            >Export data</a>
            <NeutralButton
                className="w-4/5 md:w-1/5"
                onClick={() => {
                    uploadRef.current?.click()
                }}
            >
                Import Data
            </NeutralButton>
            <input type="file" className="hidden"
                multiple={false}
                accept=".json,application/json"
                ref={uploadRef}
                onChange={openFile}
            />
            <ErrorButton
                className="w-4/5 md:w-1/5"
                onClick={() => {
                    dispatch(resetStore())
                    toast.success("Data successfully cleared")
                }}
            >
                Clear Data
            </ErrorButton>
        </div>
    )
}