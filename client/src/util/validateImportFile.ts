import Ajv from "ajv"
import schema from "./trackedUnitsJSONSchema.json"
import { TrackedUnitsState } from "../redux/unitsReducers";

const validateImportFile = (fileContents: string) => {
    const ajv = new Ajv();

    const validate = ajv.compile<TrackedUnitsState>(schema)
    return validate(JSON.parse(fileContents?.toString() as string))
}

export default validateImportFile