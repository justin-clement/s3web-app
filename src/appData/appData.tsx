import type { ReactNode } from "react"

export type ServiceProps = {
    name: string | ReactNode
    nameAsString: string
    summary: string
    description: string | ReactNode    
}

// ALL SERVICES AND DESCRIPTIONS.
export const trueHealthProps: ServiceProps = {
    name: <p>True<span>Health</span></p>, 
    nameAsString: "TrueHealth", 
    summary: "", 
    description: 
        <>
            <p></p>
        </>
}

export const supernovaSportsProps: ServiceProps = {
    name: <p>Supernova Sports</p>, 
    nameAsString: "Supernova Sports",
    summary: "", 
    description: 
        <>
            <p></p>
        </>
}

export const finserProps: ServiceProps = {
    name: <p>Finser</p>, 
    nameAsString: "Finser",
    summary: "", 
    description: 
        <>
            <p></p>
        </>
}

export const leavesProps: ServiceProps = {
    name: <p>Leaves</p>,
    nameAsString: "Leaves", 
    summary: "", 
    description: 
        <>
            <p></p>
        </>
}

export const easyInventoryProps: ServiceProps = {
    name: <p>EasyInventory</p>, 
    nameAsString: "EasyInventory",
    summary: "", 
    description: 
        <>
            <p></p>
        </>
}

export const knowThisDocProps: ServiceProps = {
    name: <p>KnowThis<span>Doc</span></p>, 
    nameAsString: "KnowThisDoc",
    summary: "", 
    description: 
        <>
            <p></p>
        </>
}

export const agentOneProps: ServiceProps = {
    name: <p>AgentOne</p>, 
    nameAsString: "AgentOne",
    summary: "", 
    description: 
        <>
            <p></p>
        </>
}

export const everyNigerianProps: ServiceProps = {
    name: <p>EveryNigerian</p>, 
    nameAsString: "EveryNigerian",
    summary: "", 
    description: 
        <>
            <p></p>
        </>
}

// ALL SERVICES IN A LIST (FOR MAPPING RENDERING).
export const allServices = [
    trueHealthProps, supernovaSportsProps, finserProps, 
    leavesProps, easyInventoryProps, knowThisDocProps, 
    agentOneProps, everyNigerianProps
]